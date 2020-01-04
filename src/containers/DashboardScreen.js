import {Component} from 'react';
import React from 'react';
import {TouchableHighlight,TouchableOpacity, View, Image, Alert} from 'react-native';
import {dimensions} from "../common/style";
import {connect} from "react-redux";
import {fetchLogout} from "../../redux/actions/auth_action";
import {getToken} from "../../redux/reducers/auth_reducer";

class HomeScreen extends Component {

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            headerLeft: (
                <View>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image
                            source={require('../assets/icon/ic_user_image.png')}
                            style={{height: 35,width: 35}}
                        />
                    </TouchableOpacity>
                </View>
            ),
            headerRight:params.isLogin?null: (
                <View>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image
                            source={require('../assets/icon/ic_user_image.png')}
                            style={{height: 35,width: 35}}
                        />
                    </TouchableOpacity>
                </View>
            ),

        };
    };

    componentWillMount(){
        this.props.navigation.setParams({
            isLogin: this.props.token==="",
        });
          Alert.alert("",JSON.stringify(this.props.token));
    }




    render() {
        return (
            <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() => {
                    this.props.navigation.navigate('FLIGHT_LIST');
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


