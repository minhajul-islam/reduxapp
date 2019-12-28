import { TYPE} from '../Constants';

export function fetchUsersRequest() {
    return {
        type: TYPE.FETCH_USERS_REQUEST
    }
}

export function fetchUsersSuccess(payload) {
    return {
        type: TYPE.FETCH_USERS_SUCCESS,
        syncTime: new Date(),
        payload
    }
}

export function fetchUsersFailure(payload) {
    return {
        type: TYPE.FETCH_USERS_FAILURE,
        payload
    }
}



