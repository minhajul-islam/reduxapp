import React from 'react';
import {View, Image, Alert,StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import {Loading} from '../component';

import {bindActionCreators} from 'redux';
import fetchLoginAction from '../api/fetchLogin';
import {getToken, getAuthPending, redirectToHome, redirectToLogin} from '../redux/reducers/auth_reducer';
import {APP_START_STATUS} from "./utils/Constants";
import {dimensions} from "./common/style";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {Routes, RoutesWithLogin} from "./navigation/Routes";
import NavigationService from "./navigation/NavigationService";

let Navigation = createAppContainer(createStackNavigator(Routes));
let NavigationLogin = createAppContainer(createStackNavigator(RoutesWithLogin));

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showSplash: true,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showSplash:false
            })
        }, 1000);
    }

    render() {
        return (
            <View style={{flexDirection: 'column', flex: 1}}>

                {(!this.state.showSplash && this.props.redirectToHome) &&
                <Navigation
                    theme="dark"
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}/>
                }

                {(!this.state.showSplash && !this.props.redirectToHome) &&
                <NavigationLogin
                    theme="dark"
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}/>
                }

                { this.state.showSplash &&
                <Image
                    style={styles.splash_screen}
                    source={require('./assets/image/splash.png')}/>
                }

                { this.props.pending &&
                    <Loading/>

                }

            </View>
        )
    }
}

const mapStateToProps = state => ({
    token: getToken(state.authReducer),
    pending: getAuthPending(state.authReducer),
    redirectToHome: redirectToHome(state.authReducer),
    redirectToLogin: redirectToLogin(state.authReducer)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchLogin: fetchLoginAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


const styles = StyleSheet.create({
    splash_screen: {
        height: dimensions.fullHeight,
        width: dimensions.fullWidth,
    }
});
