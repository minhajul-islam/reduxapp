import React from 'react';
import {Provider} from 'react-redux';
import Application from './src/index';
import reduxStore from "./redux/reduxStore";
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Image, ScrollView, StatusBar, View} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import {AlertHelper} from './component/AlertHelper';
import {colors, dimensions} from './src/common/style';
import asyncStore from 'react-native-simple-store';
import {LANGUAGE ,TOKEN_KEY} from './api/Constants';
import UtilFunction from './src/utils/UtilFunction';
import NavigationService from './src/navigation/NavigationService';
import {APP_START_STATUS} from "./src/utils/Constants";

const HomeStack = createStackNavigator({
    APPLICATION: Application,
});

const LogInStack = createStackNavigator({
    APPLICATION: Application,
});


let Navigation = createAppContainer(HomeStack);
let NavigationLogin = createAppContainer(LogInStack);


// Render the app container component with the provider around it
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedInStatus: APP_START_STATUS.SPLASH,
        };

    }

    componentDidMount() {
        this.getLanguageLocal();
        this.getToken();
    }

    getToken = () => {
        asyncStore.get(TOKEN_KEY)
            .then(value => {
                if (value.length > 50) {
                    this.setState({
                        loggedInStatus: APP_START_STATUS.HOME,
                    });
                } else {
                    this.setState({
                        loggedInStatus: APP_START_STATUS.LOGIN,
                    });
                }

            })
            .catch(error => {
                this.setState({
                    loggedInStatus: APP_START_STATUS.LOGIN,
                });
            });
    };

    getLanguageLocal = () => {
        asyncStore.get(LANGUAGE)
            .then(value => {
                UtilFunction.onSetLanguage(value != null ? value : {
                    'id': 1,
                    'name': 'English',
                    'code': 'en',
                });

            })
            .catch(error => {
                dispatch(error(error.message || 'ERROR'));
                return Promise.resolve();
            });
    };

    render() {
        return (
            <Provider store={reduxStore}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#293656',
                }}>
                    {this.state.loggedInStatus === APP_START_STATUS.SPLASH &&
                    <View style={{
                        height: dimensions.fullHeight,
                        width: dimensions.fullWidth,
                        backgroundColor: colors.background,
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                    </View>
                    }

                    {this.state.loggedInStatus === APP_START_STATUS.HOME &&
                    <Navigation theme="dark"
                                ref={navigatorRef => {
                                    NavigationService.setTopLevelNavigator(navigatorRef);
                                }}
                    />
                    }
                    {this.state.loggedInStatus === APP_START_STATUS.LOGIN &&
                    <NavigationLogin theme="dark"
                                     ref={navigatorRef => {
                                         NavigationService.setTopLevelNavigator(navigatorRef);
                                     }}
                    />
                    }

                    <DropdownAlert
                        defaultContainer={{padding: 8, paddingTop: StatusBar.currentHeight, flexDirection: 'row'}}
                        ref={ref => AlertHelper.setDropDown(ref)}
                        onClose={() => AlertHelper.invokeOnClose()}
                    />
                </View>


            </Provider>
        );
    }
}
