import {LOADING_END, LOADING_START, CREDENTIAL, TRANSACTION_API_CALLED, REDIRECT_TO_MANAGE_PAGE} from '../constent/io';

let defaultState = {
    loading: false,
    data: null,
    error: null,
    access_token: null,
    refresh_token: null,
    token_type: null,
    transactionApiCalled: false,
    shouldRedirectedToManagePage: false
};

export default (state = defaultState, {type, payload}) =>{
    switch (type){
        case LOADING_START:
            return {
                ...state,
                loading: true
            };
        case LOADING_END:
            return {
                ...state,
                loading: false
            };
        case CREDENTIAL: {
            const {access_token, refresh_token, token_type} = payload;
            return {
                ...state,
                access_token,
                refresh_token,
                token_type
            };
        }
        case TRANSACTION_API_CALLED: {
            return {
                ...state,
                transactionApiCalled: payload
            };
        }
        case REDIRECT_TO_MANAGE_PAGE: {
            return {
                ...state,
                shouldRedirectedToManagePage: payload
            };
        }
        default:
            return {...state}

    }
}