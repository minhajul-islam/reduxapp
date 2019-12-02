import {
    GET_LANGUAGE, GET_MCQ_LIST,
    GET_PROFILE, SAVE_LANGUAGE, SAVE_MCQ_LIST,
    SAVE_PROFILE,
    SAVE_USER_ID,
} from '../constent/app';
import asyncStore from 'react-native-simple-store';
import {API_STATUS, LANGUAGE, MCQ, PROFILE} from '../../api/Constants';
import UtilFunction from '../../src/utils/UtilFunction';

//Profile
export const saveProfileLocal = (profile) => dispatch => {
    asyncStore
        .save(PROFILE, profile).then(value => {
        dispatch(saveProfile(profile));
    })
        .catch(error => {
            dispatch(error(error.message || 'ERROR'));
        });
};

export const getProfileLocal = (callback) => dispatch => {
    asyncStore.get(PROFILE)
        .then(value => {
            dispatch(getProfile(value));
            dispatch(callback());
            return Promise.resolve();
        })
        .catch(error => {
            dispatch(error(error.message || 'ERROR'));
            return Promise.resolve();
        });
};

export function saveProfile(payload) {
    return {
        type: SAVE_PROFILE,
        payload,
    };
}

export const getProfile = (payload) => ({
    type: GET_PROFILE,
    payload,
});

export const getMcqLocal = (callback) => dispatch => {
    asyncStore.get(MCQ)
        .then(value => {
            let data = {
                syncTime: '',
                data: [],
            };
            if (value == null) {
                value = data;
            }
            dispatch(getMcq(value));
            dispatch(callback(value, API_STATUS.LOCAL));
            return value;
        })
        .catch(error => {
            dispatch(error(error.message || 'ERROR'));
            return Promise.resolve();
        });
};

export function saveMcq(payload) {
    return {
        type: SAVE_MCQ_LIST,
        payload,
    };
}

export const getMcq = (payload) => ({
    type: GET_MCQ_LIST,
    payload,
});



//LANGUAGE
export const saveLanguageLocal = (callBack,language) => dispatch => {
    asyncStore
        .save(LANGUAGE, language).then(value => {
        dispatch(saveLanguage(language));
        UtilFunction.onSetLanguage(language);
        dispatch(callBack(language));
    })
        .catch(error => {
            dispatch(error(error.message || 'ERROR'));
        });

};

export const getLanguageLocal = (callback) => dispatch => {
    asyncStore.get(LANGUAGE)
        .then(value => {
            dispatch(getLanguage(value != null ? value : {
                'id': 1,
                'name': 'English',
                'code': 'en',
            }));
            dispatch(callback(value != null ? value : {
                'id': 1,
                'name': 'English',
                'code': 'en',
            }));
            return Promise.resolve();
        })
        .catch(error => {
            dispatch(error(error.message || 'ERROR'));
            return Promise.resolve();
        });
};

export function saveLanguage(payload) {
    return {
        type: SAVE_LANGUAGE,
        payload,
    };
}

export const getLanguage = (payload) => ({
    type: GET_LANGUAGE,
    payload,
});
