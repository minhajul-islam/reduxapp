import axios from 'axios';
import {REFRESH_TOKEN_KEY} from '../Constants';
import NavigationService from '../../src/navigation/NavigationService';

const request = async (config) => {
    let callBack = axios(config);
    return callBack.then(response => {
        return callBack;
    }).catch(async error => {
        if (error.response.status === 401 && config.headers.Authorization != null && config.headers.Authorization !== '') {
            let result = await refreshToken(config.headers.Authorization);
            if (result != null) {
                config.headers.Authorization = 'Bearer ' + result.token;
                return axios(config);
            } else {
                return callBack;
            }
        } else if (error.response.status === 503) {
            //NavigationService.navigate('ERROR_SCREEN', {userName: 'ERROR_SCREEN'});
            return callBack;
        } else {
            return callBack;
        }
    });

};


async function refreshToken(token) {
    return await {
        token: "",
        refresh_token: ""
    };
}


export default request;
