import {NavigationActions, StackActions} from 'react-navigation';
import String from '../assets/strings/String';
let moment = require('moment');

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



let sycTimeCheck = (dateTime,time) => {
    if (dateTime === '' || dateTime == null) {
        return true;
    }
    let now = moment(new Date()); //todays date
    let end = moment(dateTime); // another date
    let duration = moment.duration(now.diff(end));
    let asSeconds = duration.asSeconds();
    return asSeconds > (time);
};


const UtilFunction = {
    nextPageClearPrevious,
    nextPageWithDataClearPrevious,
    sycTimeCheck,
    onSetLanguage,
};

export default UtilFunction;
