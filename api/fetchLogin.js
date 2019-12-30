import axios from 'axios';
import UtilFunction from "../src/utils/UtilFunction";
import {SYNC} from "../redux/Constants";
import {fetchLoginFailure,fetchLoginSuccess} from "../redux/actions/auth_action";
import {loadingEnd, loadingStart} from "../redux/actions/io";
import NetworkClient from "./core/NetworkClient";
import { Alert} from "react-native";

function fetchLogin(userName,password) {
    return (dispatch, getState) => {
        const syncTime = getState().authReducer.syncTime;
        if (UtilFunction.sycTimeCheck(syncTime, SYNC.AUTH)) {
            dispatch(loadingStart());
            NetworkClient.get('/auth', {}, '')
                .then(response => {
                    dispatch(fetchLoginSuccess(response.data));
                    dispatch(loadingEnd());
                })
                .catch(error => {
                    dispatch(fetchLoginFailure(error));
                    dispatch(loadingEnd());
                });
        }
    }
}

export default fetchLogin;
