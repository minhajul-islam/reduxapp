import {SYNC, TYPE} from "../Constants";
import UtilFunction from "../../src/utils/UtilFunction";

const initialState = {
    auth: {
        token: "",
        refresh_token: ""
    },
    syncTime: '',
    error: null
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case TYPE.FETCH_AUTH_SUCCESS:
            return {
                ...state,
                syncTime: action.syncTime,
                auth: action.payload
            };
        case TYPE.FETCH_AUTH_REMOVE:
            return {
                ...state,
                syncTime: '',
                auth: {
                    token: "",
                    refresh_token: ""
                },
            };
        case TYPE.FETCH_AUTH_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}

export const getToken = state => state.auth.token;
export const getRefreshToken = state => state.auth.refresh_token;
export const redirectToHome = state => !UtilFunction.sycTimeCheck(state.syncTime, SYNC.AUTH);
