import React, {Component} from 'react';
import {View, ActivityIndicator, Text, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');


export default props=>{
    return (
        <View style={{width, height, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.8)', top: 0, left: 0, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: 80, width: 80, borderRadius: 2}}>
                <ActivityIndicator size={"large"}/>
            </View>
        </View>
    )
}
