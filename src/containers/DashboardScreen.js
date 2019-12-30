import {Component} from 'react';
import React from 'react';
import {TouchableHighlight, View, Image, Platform} from 'react-native';
import {dimensions} from "../common/style";
import {connect} from "react-redux";
import {fetchLogout} from "../../redux/actions/auth_action";

class HomeScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        header: null,

    });

    render() {
        return (
            <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() => {
                    this.props.fetchLogout();
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

export default connect(null, {fetchLogout})(HomeScreen);


