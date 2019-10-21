import {LOADING_START, LOADING_END, CREDENTIAL, REDIRECT_TO_MANAGE_PAGE, TRANSACTION_API_CALLED} from '../constent/io';

export function loadingStart() {
    return {
        type: LOADING_START
    }
}

export function loadingEnd() {
    return {
        type: LOADING_END
    }
}

export function credential(payload) {
    return {
        type: CREDENTIAL,
        payload
    }
}

export function setTransactionApiCalled(payload) {
    return {
        type: TRANSACTION_API_CALLED,
        payload
    }
}

export function setShouldRedirectedToManagePage(payload) {
    return {
        type: REDIRECT_TO_MANAGE_PAGE,
        payload
    }
}