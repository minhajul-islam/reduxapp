import NetworkClient from './NetworkClient';
import {
    API_STATUS, MCQ_LIST,
    PRIVACY,
    USER,
} from './Constants';
import {AlertHelper} from '../component/AlertHelper';
import String from '../src/assets/strings/String';

let getUserInfo = (reduxSave, callBack, token) => {
    NetworkClient.get(USER, {}, 'Bearer ' + token).then(response => {
        callBack(response.data.data, API_STATUS.SUCCESS);
        reduxSave(response.data.data);
    }).catch(async error => {
        callBack(error, API_STATUS.FAILED);
        AlertHelper.show('error', 'Error', 'String.something_went_wrong');

    });
};

let updateUserInfo = (reduxSave, callBack, body, token) => {
    NetworkClient.put(USER, body, 'Bearer ' + token).then(response => {
        callBack(response.data.data, API_STATUS.SUCCESS);
        reduxSave(response.data.data);
    }).catch(async error => {
        callBack(error, API_STATUS.FAILED);
        AlertHelper.show('error', 'Error', 'String.something_went_wrong');
    });
};




// let uploadDocument = (callBack, token, imageData) => {
//     NetworkClient.imagePost(DOCS, imageData, 'Bearer ' + token).then(response => {
//         callBack(response.data.data, API_STATUS.SUCCESS);
//     }).catch(async error => {
//         callBack(error, API_STATUS.FAILED);
//     });
// };




let getMcq = (callBack, token) => {
    NetworkClient.get(MCQ_LIST, {}, 'Bearer ' + token).then(response => {
        callBack({
            sycTime: new Date(),
            data: response.data.data != null ? response.data.data : [],
        }, API_STATUS.SUCCESS);
    }).catch(async error => {
        callBack(error, API_STATUS.FAILED);
    });
};


// without token
let getPrivacy = (callBack) => {
    NetworkClient.get(PRIVACY, {}, '').then(response => {
        callBack(response.data, API_STATUS.SUCCESS);
    }).catch(error => {
        callBack(error, API_STATUS.FAILED);
        AlertHelper.show('error', 'Error', 'String.something_went_wrong');
    });
};



const ApiFunction = {
    getUserInfo, getPrivacy, updateUserInfo,
};

export default ApiFunction;
