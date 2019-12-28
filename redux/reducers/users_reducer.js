import {TYPE} from "../Constants";

const initialState = {
    users:[],
    syncTime:'',
    pending:false,
    error: null
};

export function usersReducer(state = initialState, action) {
    switch(action.type) {
        case TYPE.FETCH_USERS_REQUEST:
            return {
                ...state,
                pending: true
            };
        case TYPE.FETCH_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
                syncTime:action.syncTime,
                users: action.payload
            };
        case TYPE.FETCH_USERS_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const getUsers = state => state.users;
export const getUsersPending = state => state.pending;
export const getUsersSyncTime = state => state.syncTime;
export const getUsersError = state => state.error;
