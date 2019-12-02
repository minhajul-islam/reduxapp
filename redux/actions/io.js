import {
    LOADING_START,
    LOADING_END,
    GET_TOKEN,
    SAVE_TOKEN,
    REMOVE_TOKEN,
    ERROR, GET_REFRESH_TOKEN, SAVE_REFRESH_TOKEN, REMOVE_REFRESH_TOKEN,
} from '../constent/io';
import asyncStore from 'react-native-simple-store';
import {REFRESH_TOKEN_KEY, TOKEN_KEY} from '../../api/Constants';

export function loadingStart() {
    return {
        type: LOADING_START,
    };
}

export function loadingEnd() {
    return {
        type: LOADING_END,
    };
}


export const getToken = (payload) => ({
    type: GET_TOKEN,
    payload,
});

export const saveToken = (payload) => ({
    type: SAVE_TOKEN,
    payload,
});

export const removeToken = () => ({
    type: REMOVE_TOKEN,
});

export const error = error => ({
    type: ERROR,
    error,
});


//token
export const getUserToken = (callback) => dispatch => {
    asyncStore.get(TOKEN_KEY)
        .then(value => {
            dispatch(getToken(value));
            dispatch(callback(value));
            return Promise.resolve();
        })
        .catch(error => {
            dispatch(error(error.message || 'ERROR'));
            return Promise.resolve();
        });
};



export const saveUserToken = (token) => dispatch => {
    asyncStore
        .save(TOKEN_KEY, token).then(value => {
        dispatch(saveToken(token));
    })
        .catch(error => {
            dispatch(error(error.message || 'ERROR'));
        });

};

export const removeUserToken = (callBack) => dispatch => {
    asyncStore
        .update(TOKEN_KEY, {}).then(value => {
        dispatch(saveToken(""));
        dispatch(callBack);
    })
        .catch(error => {
            dispatch(error(error.message || 'ERROR'));
        });

};

// refresh token
export const getRefreshTokenState = (payload) => ({
    type: GET_REFRESH_TOKEN,
    payload,
});

export const saveRefreshTokenState = (payload) => ({
    type: SAVE_REFRESH_TOKEN,
    payload,
});

export const removeRefreshTokenState = () => ({
    type: REMOVE_REFRESH_TOKEN,
});

export const getRefreshToken = (callback) => dispatch => {
    asyncStore.get(REFRESH_TOKEN_KEY)
        .then(value => {
            dispatch(getRefreshTokenState(value));
            dispatch(callback(value));
            return Promise.resolve();
        })
        .catch(error => {
            dispatch(error(error.message || 'ERROR'));
            return Promise.resolve();
        });
};



export const saveRefreshToken = (token) => dispatch => {
    asyncStore
        .save(REFRESH_TOKEN_KEY, token).then(value => {
        dispatch(saveRefreshTokenState(token));
    })
        .catch(error => {
            dispatch(error(error.message || 'ERROR'));
        });

};

export const removeRefreshToken = (callBack) => dispatch => {
    asyncStore
        .update(REFRESH_TOKEN_KEY, {}).then(value => {
        dispatch(saveRefreshTokenState(""));
        dispatch(callBack);
    })
        .catch(error => {
            dispatch(error(error.message || 'ERROR'));
        });

};

