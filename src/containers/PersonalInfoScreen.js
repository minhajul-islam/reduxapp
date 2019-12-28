import {Component} from 'react';
import React from 'react';
import {StatusBar, TouchableHighlight, View, Image, Platform
    , Alert} from 'react-native';
import {dimensions} from "../common/style";

class PersonalInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '01940356540',
        };
    }


    static navigationOptions = ({navigation}) => ({
        header:null,
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
                        this.props.navigation.navigate('PaymentModeScreen');}

                        }>
                <View style={{backgroundColor: 'white'}}>
                <Image
                    style={{
                        height: dimensions.fullHeight,
                        marginTop: 0,
                        width: dimensions.fullWidth,
                    }}
                    source={require('../assets/image/personal_info.png')}/>
                </View>
            </TouchableHighlight>


        );
    }
}

export default PersonalInfoScreen;

