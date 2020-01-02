import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import reducers from './reducers/index';
import AsyncStorage from '@react-native-community/async-storage';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist';

// Middleware: Redux Persist Config
const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: [
        'authReducer',
    ],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [
        'io',
        'app'
    ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [thunk];
let reduxStore = createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(...middleware),
));
// Middleware: Redux Persist Persister
let persistor = persistStore(reduxStore);
export  {persistor,reduxStore};
