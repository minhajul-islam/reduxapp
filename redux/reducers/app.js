import {
    SAVE_PROFILE,
    GET_PROFILE,
    SAVE_LANGUAGE, GET_LANGUAGE, SAVE_MCQ_LIST, GET_MCQ_LIST,
} from '../constent/app';

const defaultState = {
    userId: {
        'id': 17,
        'phone': '8801515272948',
    },
    profile: {},
    mcq: {
        syncTime: '',
        data: [],
    },
    language:{
        'id': 1,
        'name': 'English',
        'code': 'en',
    }
};

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case SAVE_PROFILE:
            return {
                ...state,
                profile: payload,
            };
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
            };
        case SAVE_LANGUAGE:
            return {
                ...state,
                language: payload,
            };
        case GET_LANGUAGE:
            return {
                ...state,
                language: payload,
            };
        case SAVE_MCQ_LIST:
            return {
                ...state,
                mcq: payload,
            };
        case GET_MCQ_LIST:
            return {
                ...state,
                mcq: payload,
            };
        default:
            return state;
    }
}

