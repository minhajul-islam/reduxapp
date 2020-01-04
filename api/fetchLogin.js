import UtilFunction from "../src/utils/UtilFunction";
import {SYNC} from "../redux/Constants";
import {fetchLoginFailure,fetchLoginSuccess} from "../redux/actions/auth_action";
import {loadingEnd, loadingStart} from "../redux/actions/io";
import NetworkClient from "./core/NetworkClient";

function fetchLogin(navigation,userName,password) {
    return (dispatch, getState) => {
        const syncTime = getState().authReducer.syncTime;
        if (UtilFunction.sycTimeCheck(syncTime, SYNC.AUTH)) {
            dispatch(loadingStart());
            NetworkClient.get('/auth', {}, '')
                .then(response => {
                    dispatch(fetchLoginSuccess(response.data));
                    navigation.navigate('DRAWER');
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
