import {
    SAVE_PROFILE,
    SAVE_TRANSACTION,
} from '../constent/app';
//  import asyncStore from 'react-native-simple-store';
//
//
// export const getMapSnapFromStorage = () => (dispatch) => {
//
//     asyncStore.get('mapSnap')
//         .then(mapSnap => {
//             console.log('action app: mapsnap: ', mapSnap);
//             dispatch({
//                 type: MAP_SNAP,
//                 payload: mapSnap
//             });
//         })
//         .catch(e => {
//         });
//
// };


export function saveProfile(payload) {
    return {
        type: SAVE_PROFILE,
        payload
    }
}

export function saveTransaction(payload) {
    return {
        type: SAVE_TRANSACTION,
        payload
    };
}
