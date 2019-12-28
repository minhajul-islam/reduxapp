import axios from 'axios';
import UtilFunction from "../src/utils/UtilFunction";
import {SYNC} from "../redux/Constants";
import {fetchLoginFailure, fetchLoginRequest, fetchLoginSuccess} from "../redux/actions/auth_action";
import {Alert } from "react-native";

function fetchLogin(userName,password) {
    return (dispatch, getState) => {
        const syncTime = getState().authReducer.syncTime;
        if (UtilFunction.sycTimeCheck(syncTime, SYNC.AUTH)) {
            dispatch(fetchLoginRequest());
            axios.get('https://my-json-server.typicode.com/minhajul-islam/demo/auth')
                .then(response => {
                     // Alert.alert("",JSON.stringify(response));
                    dispatch(fetchLoginSuccess(response.data));
                })
                .catch(error => {
                    dispatch(fetchLoginFailure(error));
                });
        }
    }
}

export default fetchLogin;
