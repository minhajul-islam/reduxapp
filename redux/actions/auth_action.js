import { TYPE} from '../Constants';

export function fetchLoginRequest() {
    return {
        type: TYPE.FETCH_LOGIN_REQUEST
    }
}

export function fetchLoginSuccess(payload) {
    return {
        type: TYPE.FETCH_LOGIN_SUCCESS,
        syncTime: new Date(),
        payload
    }
}

export function fetchLogout() {
    return {
        type: TYPE.FETCH_LOGIN_SUCCESS,
        syncTime: '',
        payload:''
    }
}

export function fetchLoginFailure(payload) {
    return {
        type: TYPE.FETCH_LOGIN_FAILURE,
        payload
    }
}



