import {Component} from 'react';
import React from 'react';
import {StatusBar, TouchableHighlight, View, Image, Platform
    , Alert} from 'react-native';
import {dimensions} from "../common/style";

class PaymentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '01940356540',
        };
    }


    static navigationOptions = ({navigation}) => ({
        header:null,

    });

    render() {
        return (
            <TouchableHighlight
                    underlayColor={'transparent'}
                    onPress={() => {
                        this.props.navigation.navigate('SuccessScreen');}

                        }>
                <View style={{backgroundColor: 'white'}}>
                <Image
                    style={{
                        height: dimensions.fullHeight,
                        marginTop: 0,
                        width: dimensions.fullWidth,
                    }}
                    source={require('../assets/image/payment_page.png')}/>
                </View>
            </TouchableHighlight>


        );
    }
}

export default PaymentScreen;

