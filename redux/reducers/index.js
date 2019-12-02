import {combineReducers} from 'redux'
import io from './io';
import app from './app';

export default combineReducers({
    io,
    app
})