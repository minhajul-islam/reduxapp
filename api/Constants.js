import {Platform} from 'react-native'
//url
export const IS_LIVE = true;

export const USER_PHOTO_UPLOAD = '/user-photo';
export const USER = '/user';
export const USER_SETTING = '/user-settings';
export const SUPPORT = '/support';
export const PRIVACY = '/privacy';
export const TERMS = '/terms-conditions';
export const MCQ_LIST = '/mcq';


// const upload
export const URL_FEEDBACK_ANDROID ='https://play.google.com/store/apps/details?id=com.bd';

//storage key
export const TOKEN_KEY = 'TOKEN_KEY';
export const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN_KEY';
export const PROFILE = 'PROFILE';
export const MCQ = 'MCQ';
export const LANGUAGE = 'LANGUAGE';//countries
export const VERSION = Platform.OS === 'ios' ? '1.0' : '1.0';

// enum
export const API_STATUS = {
    SUCCESS : 'SUCCESS',
    FAILED: 'FAILED',
    LOCAL: 'LOCAL',
    MAINTENANCE: 'MAINTENANCE',
    UNAUTHORIZED: 'UNAUTHORIZED',
};

export const STORAGE = {
    USERS : 'USERS',
};


