import {Component} from 'react';
import React from 'react';
import {TouchableHighlight, View, Image, Alert} from 'react-native';
import {dimensions} from "../common/style";
import {connect} from "react-redux";
import {fetchLogout} from "../../redux/actions/auth_action";
import {getToken} from "../../redux/reducers/auth_reducer";

class HomeScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    componentDidMount() {
        Alert.alert("Token which is needed to call all other api call", JSON.stringify(this.props.token));
    }

    render() {
        return (
            <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() => {
                    this.props.navigation.navigate('SearchFlightScreen');
                }}>
                <View style={{backgroundColor: 'blue'}}>
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
    token: getToken(state.authReducer),
});

export default connect(
    mapStateToProps,
    {fetchLogout}
)(HomeScreen);


