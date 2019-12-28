import {Component} from 'react';
import React from 'react';
import {
    StatusBar, TouchableHighlight, View, Image, Platform
    , Alert
} from 'react-native';
import {dimensions} from "../common/style";
import {getAuthPending, getToken, redirectToHome, redirectToLogin} from "../../redux/reducers/auth_reducer";
import {bindActionCreators} from "redux";
import fetchLoginAction from "../../api/fetchLogin";
import {connect} from "react-redux";
import {fetchLogout} from "../../redux/actions/auth_action";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '01940356540',
        };
    }


    static navigationOptions = ({navigation}) => ({
        header: null,
        headerStyle: {
            backgroundColor: 'white',
        },
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            marginRight: Platform.OS === 'ios' ? 0 : 56,
        },
        headerTintColor: 'red',
        tabBarVisible: false,
    });

    render() {
        return (
            <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() => {
                    setTimeout(() => {
                        this.props.fetchLogout();
                    }, 3000);
                }}>
                <View style={{backgroundColor: 'white'}}>
                    <Image
                        style={{
                            height: dimensions.fullHeight,
                            marginTop: 0,
                            width: dimensions.fullWidth,
                        }}
                        source={require('../assets/image/dashboard.png')}/>
                </View>
            </TouchableHighlight>


        );
    }
}

const mapStateToProps = state => ({
    redirectToLogin: redirectToLogin(state.authReducer)
});

export default connect(mapStateToProps, {fetchLogout})(HomeScreen);


