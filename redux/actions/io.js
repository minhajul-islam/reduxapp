import {TYPE} from "../Constants";

export function loadingStart() {
    return {
        type: TYPE.LOADING_START,
    };
}

export function loadingEnd() {
    return {
        type: TYPE.LOADING_END,
    };
}

export const error = error => ({
    type: TYPE.ERROR,
    error,
});

