import {
    SAVE_SKOO_DETAILS,
    SAVE_TRANSACTION
} from "../constent/app";

const defaultState = {
    skooDetail: null,
    selectedSkooDetail: null,
    transaction: null
};
export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case SAVE_SKOO_DETAILS:
            return {
                ...state,
                skooDetail: payload
            };
        case SAVE_TRANSACTION:
            return {
                ...state,
                transaction: payload
            };
        default:
            return state;
    }
}
