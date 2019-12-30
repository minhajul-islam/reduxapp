import {TYPE} from "../Constants";

const initialState = {
    loading: false,
    error: null,
};

export function io(state = initialState, action) {
    switch (action.type) {
        case TYPE.LOADING_START:
            return {
                ...state,
                loading: true,
            };
        case TYPE.LOADING_END:
            return {
                ...state,
                loading: false,
            };
        case TYPE.ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return {...state};
    }
}

export const isLoading = state => state.loading;


