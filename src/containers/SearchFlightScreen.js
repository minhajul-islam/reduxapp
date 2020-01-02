import {Component} from 'react';
import React from 'react';
import {StatusBar, TouchableHighlight, View, Image, Platform
    , Alert} from 'react-native';
import {dimensions} from "../common/style";
import {getToken} from "../../redux/reducers/auth_reducer";
import {connect} from "react-redux";
import {fetchLogout} from "../../redux/actions/auth_action";

class SearchFlightScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '01940356540',
        };
    }


    static navigationOptions = ({navigation}) => ({
        header:null,
    });

    componentDidMount() {
        Alert.alert("Necessary for search", JSON.stringify(this.props.data));
    }


    render() {
        return (
            <TouchableHighlight
                    underlayColor={'transparent'}
                    onPress={() => {
                        this.props.navigation.navigate('FlightListScreen');}

                        }>
                <View style={{backgroundColor: 'white'}}>
                <Image
                    style={{
                        height: dimensions.fullHeight,
                        marginTop: 0,
                        width: dimensions.fullWidth,
                    }}
                    source={require('../assets/image/search_flight.png')}/>
                </View>
            </TouchableHighlight>


        );
    }
}

const mapStateToProps = state => ({
    token: getToken(state.authReducer),
    data: state.app,
});

export default connect(
    mapStateToProps,
    {fetchLogout}
)(SearchFlightScreen);


