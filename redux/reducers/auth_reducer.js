import {SYNC, TYPE} from "../Constants";
import UtilFunction from "../../src/utils/UtilFunction";

const initialState = {
    auth: {
        token: "",
        refresh_token: ""
    },
    syncTime: '',
    pending: false,
    error: null
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case TYPE.FETCH_LOGIN_REQUEST:
            return {
                ...state,
                pending: true
            };
        case TYPE.FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                pending: false,
                syncTime: action.syncTime,
                auth: action.payload
            };
        case TYPE.FETCH_LOGIN_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const getToken = state => state.auth.token;
export const getRefreshToken = state => state.auth.refresh_token;
export const getAuthPending = state => state.pending;
export const redirectToHome = state => !UtilFunction.sycTimeCheck(state.syncTime, SYNC.AUTH);
export const redirectToLogin = state => state.auth.token==="";
export const getAuthSyncTime = state => state.syncTime;
export const getAuthError = state => state.error;
