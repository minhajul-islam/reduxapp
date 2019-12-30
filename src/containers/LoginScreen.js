import {Component} from 'react';
import React from 'react';
import { TouchableHighlight, View, Image, Platform} from 'react-native';
import {dimensions} from "../common/style";
import { redirectToHome} from "../../redux/reducers/auth_reducer";
import {bindActionCreators} from "redux";
import fetchLoginAction from "../../api/fetchLogin";
import {connect} from "react-redux";

class LoginScreen extends Component {
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
                        this.props.fetchLogin("minhajul@gmail.com", "root12345");
                    }}>
                <View style={{backgroundColor: 'white'}}>
                <Image
                    style={{
                        height: dimensions.fullHeight,
                        marginTop: 0,
                        width: dimensions.fullWidth,
                    }}
                    source={require('../assets/image/login.png')}/>
                </View>
            </TouchableHighlight>


        );
    }
}
const mapStateToProps = state => ({
    redirectToHome: redirectToHome(state.authReducer),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchLogin: fetchLoginAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);


