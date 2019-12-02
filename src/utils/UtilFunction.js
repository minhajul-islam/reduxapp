import {Alert, Share} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import String from '../assets/strings/String';
import asyncStore from 'react-native-simple-store';
import {REFRESH_TOKEN_KEY, TOKEN_KEY} from '../../api/Constants';
import {Routes} from "../navigation/Routes";

let moment = require('moment');
const date1 = (text) => {
    return moment(text).format('D MMMM YYYY');
};

let shareAp = () => {
    Share.share({
        message: 'String.invite_message',
        url: 'String.invite_url',
        title: 'String.apps_name',
        // }, {
        //   // Android only:
        //   dialogTitle: 'Share BAM goodness',
        //   // iOS only:
        //   excludedActivityTypes: [
        //     'com.apple.UIKit.activity.PostToTwitter'
        //   ]
    });
};

let onSetLanguage = (language) => {
    String.setLanguage(language.code);

};

let nextPageClearPrevious = (props, screen) => {
    const {navigation} = props;
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: screen})], // back_to="A"
    });
    navigation.dispatch(resetAction);
};

let nextPageWithDataClearPrevious = (props, screen, data) => {
    const {navigation} = props;
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: screen, params: data})], // back_to="A"
    });
    navigation.dispatch(resetAction);
};

let nextPageWithDataWithStack1 = (props, data) => {
    const {navigation} = props;
    const resetAction = StackActions.reset({
        index: 2,
        actions: [
            NavigationActions.navigate({routeName: Routes.ABOUT_ME, params: data}),
            NavigationActions.navigate({routeName: Routes.LOGIN, params: data}),
            NavigationActions.navigate({routeName: Routes.HELP_CENTER, params: data}),
        ], // back_to="A"
    });
    navigation.dispatch(resetAction);
};
let routErrorScreen = (props) => {
    const {navigation} = props;
    const resetAction = StackActions.reset({
        index: 1,
        actions: [
            NavigationActions.navigate({routeName: Routes.LOGIN}),
            NavigationActions.navigate({routeName: Routes.ERROR_SCREEN}),

        ], // back_to="A"
    });
    navigation.dispatch(resetAction);
};



let sycTimeCheck = (dateTime) => {
    if (dateTime === '' || dateTime == null) {
        return true;
    }
    var now = moment(new Date()); //todays date
    var end = moment(dateTime); // another date
    var duration = moment.duration(now.diff(end));
    var asSeconds = duration.asSeconds();
    return asSeconds > (180);
};

let saveTokenLocal=(token)=>{
    asyncStore
        .save(TOKEN_KEY, token).then(value => {

    })
        .catch(error => {
        });
};
let saveRefreshTokenLocal=(token)=>{
    asyncStore
        .save(REFRESH_TOKEN_KEY, token).then(value => {

    })
        .catch(error => {
        });
};

const UtilFunction = {
    date1,
    shareAp,
    nextPageClearPrevious,
    nextPageWithDataClearPrevious,
    nextPageWithDataWithStack1,
    sycTimeCheck,
    onSetLanguage,
    saveTokenLocal,
    saveRefreshTokenLocal,
    routErrorScreen
};

export default UtilFunction;
