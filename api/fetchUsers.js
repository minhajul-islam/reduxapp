import axios from 'axios';
import {fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess} from "../redux/actions/users_action";
import UtilFunction from "../src/utils/UtilFunction";
import {SYNC} from "../redux/Constants";
function fetchUsers() {
    return (dispatch, getState) => {
        const syncTime = getState().usersReducer.syncTime;
        const users = getState().usersReducer.users;

        if (UtilFunction.sycTimeCheck(syncTime, SYNC.USERS)) {
            dispatch(fetchUsersRequest());
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    dispatch(fetchUsersSuccess(response.data));
                })
                .catch(error => {
                    dispatch(fetchUsersFailure(error));
                });
        }


    }
}

export default fetchUsers;
