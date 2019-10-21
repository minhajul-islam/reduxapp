import React, {Component} from 'react';
import {View, StyleSheet, Alert} from 'react-native';

export default (title,message, options = { cancelable: false }) => {
    Alert.alert(
         title,
        message,
        [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        options
    )

}
