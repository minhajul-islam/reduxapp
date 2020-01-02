import {TYPE} from "../Constants";

export function setTripType(payload) {
    return {
        type: TYPE.SET_TRIP_TYPE,
        payload
    };
}
      //TODO
export const error = error => ({
    type: TYPE.ERROR,
    error,
});

