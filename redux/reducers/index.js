import {combineReducers} from 'redux'
import {io} from "./io";
import {authReducer} from "./auth_reducer";

export default combineReducers({
    authReducer,
    io
})
