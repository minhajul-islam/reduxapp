import React from 'react';
import {View,Alert} from 'react-native';
import {connect} from 'react-redux'
import {Loading} from '../component';
import {saveProfile, saveTransaction} from "../actions/app";
import {setShouldRedirectedToManagePage} from "../actions/io";
import {loadingEnd, loadingStart} from "../actions/io";
//import URL from "../api/url";
//import axios_request from "../api/axios_request";


class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getMoviesFromApiAsync();
    }

    getMoviesFromApiAsync = () => {
        this.props.loadingStart();
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.props.loadingEnd();
                Alert.alert("",JSON.stringify(responseJson.movies));
                return responseJson.movies;
            })
            .catch((error) => {
                this.props.loadingEnd();
                console.error(error);
            });
    };

    render() {
        const {loading} = this.props.__io;
        return (
            <View style={{flex: 1}}>
                {loading ? <Loading/> : null}
            </View>
        )
    }
}

function stateToProps(state) {
    return {
        __io: state.io,
    }
}

export default connect(stateToProps, {
    saveTransaction,
    setShouldRedirectedToManagePage,
    saveProfile,
    loadingStart,
    loadingEnd
})(App);
