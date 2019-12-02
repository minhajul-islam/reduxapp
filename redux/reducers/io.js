import {
    LOADING_END,
    LOADING_START,
    GET_TOKEN,
    SAVE_TOKEN,
    REMOVE_TOKEN,
    ERROR,
    GET_REFRESH_TOKEN, SAVE_REFRESH_TOKEN,
} from '../constent/io';

let defaultState = {
    loading: false,
    data: null,
    error: null,
    token: null,
    access_token: null,
    refresh_token: null,
    token_type: null,
    transactionApiCalled: false,
    shouldRedirectedToManagePage: false,
};

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case LOADING_START:
            return {
                ...state,
                loading: true,
            };
        case LOADING_END:
            return {
                ...state,
                loading: false,
            };
        case GET_TOKEN:
            return {
                ...state,
                token: payload
            };
        case SAVE_TOKEN:
            return {
                ...state,
                token: payload
            };
        case REMOVE_TOKEN:
            return {
                ...state,
                token: payload
            };
        case GET_REFRESH_TOKEN:
            return {
                ...state,
                refresh_token: payload
            };
        case SAVE_REFRESH_TOKEN:
            return {
                ...state,
                refresh_token: payload
            };
        case ERROR:
            return {...state, error: action.error};
        default:
            return {...state};

    }
}
