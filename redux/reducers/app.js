import {CABIN, TRIP, TYPE} from "../Constants";

const initialState = {
    tripType: TRIP.ONE_WAY,
    departureFrom: 'Bangaluru',
    arrivalsAt: 'New York',
    departureDate: 'Mon, 14 Dec',
    arrivalsDate: 'Tue, 15 Dec',
    cabinClass: CABIN.BUSINESS,
};

export function app(state = initialState, action) {
    switch (action.type) {
        case TYPE.SET_TRIP_TYPE:
            return {
                ...state,
                tripType: action.payload
            };
            //TODO
        default:
            return {...state};
    }
}

export const getTripType = state => state.tripType;
          //TODO

