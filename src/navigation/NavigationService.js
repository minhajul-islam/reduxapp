import {NavigationActions, StackActions} from 'react-navigation';
import {Routes} from "./Routes";


let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    if(routeName===Routes.HomeScreen){
        const resetAction = StackActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({routeName: Routes.HomeScreen}),
                NavigationActions.navigate({routeName: Routes.HomeScreen}),

            ], // back_to="A"
        });
        _navigator.dispatch(
            resetAction
        );
    }else {
        _navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        );
    }

}

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
};
