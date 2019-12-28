import axios from 'axios';
import asyncStore from 'react-native-simple-store';
import {REFRESH_TOKEN_KEY} from '../Constants';
import NetworkClient from './NetworkClient';
import UtilFunction from '../../src/utils/UtilFunction';
import NavigationService from '../../src/navigation/NavigationService';

const request = async (config) => {
    let callBack = axios(config);
    return callBack.then(response => {
        return callBack;
    }).catch(async error => {
        if (error.response.status === 401 && config.headers.Authorization != null && config.headers.Authorization !== '') {
            let result = await refreshToken(config.headers.Authorization);
            if (result != null) {
                config.headers.Authorization = 'Bearer ' + result.data.access_token;
                return axios(config);
            } else {
                return callBack;
            }
        } else if (error.response.status === 503) {
            NavigationService.navigate('ERROR_SCREEN', {userName: 'ERROR_SCREEN'});
            return callBack;
        } else {
            return callBack;
        }
    });

};


async function refreshToken(token) {
    return await asyncStore.get(REFRESH_TOKEN_KEY)
        .then(async value => {
            if (value.length > 50) {
                return NetworkClient.postOauth({
                    grant_type: 'refresh_token',
                    client_id: 2,
                    client_secret: 'xxxxxxxxxxxxxxxx',
                    refresh_token: value,
                    scope: '',
                }, token).then(async response => {
                    if (response.data != null && response.data.token_type === 'Bearer') {
                        UtilFunction.saveTokenLocal(response.data.access_token);
                        UtilFunction.saveRefreshTokenLocal(response.data.refresh_token);
                    }
                    return response;
                }).catch(async error => {
                    return null;
                });
            } else {
                return null;
            }

        })
        .catch(error => {
            return null;
        });


}


export default request;
