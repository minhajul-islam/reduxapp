import { TYPE} from '../Constants';

export function fetchLoginSuccess(payload) {
    return {
        type: TYPE.FETCH_AUTH_SUCCESS,
        syncTime: new Date(),
        payload
    }
}

export function fetchLogout() {
    return {
        type: TYPE.FETCH_AUTH_REMOVE,
    }
}

export function fetchLoginFailure(payload) {
    return {
        type: TYPE.FETCH_AUTH_FAILURE,
        payload
    }
}



