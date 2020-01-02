import {combineReducers} from 'redux'
import {io} from "./io";
import {app} from "./app";
import {authReducer} from "./auth_reducer";

export default combineReducers({
    authReducer,
    app,
    io
})
