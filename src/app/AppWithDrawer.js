import {
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';

import { Image } from "react-native";
import DashboardScreen from "../containers/DashboardScreen";
import FlightListScreen from "../containers/FlightListScreen";
import PaymentScreen from "../containers/PaymentScreen";
import SearchFlightScreen from "../containers/SearchFlightScreen";
import React from "react";
import NavigationMenu from "../navigation/NavigationMenu";
import TabBarComponent from "../navigation/TabBarComponent";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";
import { createDrawerNavigator} from 'react-navigation-drawer';

const Home = createStackNavigator({
    HOME: DashboardScreen,
    FLIGHT_LIST: FlightListScreen,
});

Home.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    let drawerLockMode = 'unlocked';
    if (navigation.state.index > 0) {
        tabBarVisible = false;
        drawerLockMode = 'locked-closed';
    }
    return {
        tabBarVisible,
        drawerLockMode
    };
};


const Inbox = createStackNavigator({
    INBOX: FlightListScreen,

});
Inbox.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    let drawerLockMode = 'unlocked';
    if (navigation.state.index > 0) {
        tabBarVisible = false;
        drawerLockMode = 'locked-closed';
    }
    return {
        tabBarVisible,
        drawerLockMode
    };
};

const History = createStackNavigator({
    HISTORY: PaymentScreen,
});
History.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    let drawerLockMode = 'unlocked';
    if (navigation.state.index > 0) {
        tabBarVisible = false;
        drawerLockMode = 'locked-closed';
    }
    return {
        tabBarVisible,
        drawerLockMode
    };
};

const Offers = createStackNavigator({
    OFFERS: SearchFlightScreen,
});
Offers.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    let drawerLockMode = 'unlocked';

    if (navigation.state.index > 0) {
        tabBarVisible = false;
        drawerLockMode = 'locked-closed';
    }
    return {
        tabBarVisible,
        drawerLockMode
    };
};



const HomeStack = createBottomTabNavigator({
    HOME: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home'
        }
    },
    HISTORY: {
        screen: History,
        navigationOptions: {
            tabBarLabel: 'History'
        }
    },
    INBOX: {
        screen: Inbox,
        navigationOptions: {
            tabBarLabel: 'Inbox'
        }
    },
    OFFERS: {
        screen: Offers,
        navigationOptions: {
            tabBarLabel: 'Offers'
        }
    },
}, {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            if (routeName === 'HOME') {
                return <Image source={require('../assets/icon/ic_user_image.png')}
                              style={{
                                  tintColor: tintColor, height: 18, width: 18, resizeMode: 'contain',
                              }} />
            } else if (routeName === 'HISTORY') {
                return <Image source={require('../assets/icon/ic_user_image.png')}
                              style={{
                                  tintColor: tintColor, height: 18, width: 18, resizeMode: 'contain',
                              }} />
            } else if (routeName === 'INBOX') {
                return <Image source={require('../assets/icon/ic_user_image.png')}
                              style={{
                                  tintColor: tintColor, height: 18, width: 18, resizeMode: 'contain',
                              }} />
            } else if (routeName === 'OFFERS') {
                return <Image source={require('../assets/icon/ic_user_image.png')}
                              style={{
                                  tintColor: tintColor, height: 18, width: 18, resizeMode: 'contain',
                              }} />
            }
        },
    }),
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'white',
        labelStyle: {
            fontSize: 12,
        },
        iconStyle: {},
        tabStyle: {
            paddingVertical: 7,
        },
        style: {
            height: 54,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'blue',
            borderTopWidth: .4,
            borderTopColor: 'red'
        }
    },
    animationEnabled: false,
    swipeEnabled: true,
    lazy: true,
    tabBarComponent: TabBarComponent
});


const Drawer = createDrawerNavigator({
        HOME: HomeStack,
    }, {
        contentComponent: props =>
            < NavigationMenu
                {...
                    props
                }
            />,
    });

export default createAppContainer(Drawer);
