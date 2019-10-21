import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default ({text, onPress, disabled}) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={{
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                backgroundColor: 'red',
                elevation: 2,
            }}>
            <Text style={{fontSize: 22, color: '#FFF'}}>{text}</Text>
        </TouchableOpacity>
    )
}
