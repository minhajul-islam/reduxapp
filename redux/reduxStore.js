import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import reducers from './reducers/index';
import { composeWithDevTools } from 'remote-redux-devtools';

const middleware = [thunk];
let reduxStore = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
));

export default reduxStore;
