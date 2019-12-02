import {StyleSheet, Dimensions} from 'react-native';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
};

export const colors = {
    primary: '#eba955',
    secondary: '#ad4d23',
    tertiary: '#c2afa1',
    disable: '#808080',
    font: '#606060',
    background: '#f5f6f8',
    line: '#e7e7e7',
    button1: '#eba955',
    button2: '#d26738',
    disableButton1: '#FBC8A0',
    disableButton2: '#EFB69A',
    error: '#f96f6f',
    success: '#90b364',
    white: '#FFFFFF',
};

export const padding = {
    p10: 10,
    p16: 16,
    p20: 20,
    p24: 24,
    p30: 30,
};

export const margin = {
    m10: 10,
    m16: 16,
    m20: 20,
    m24: 24,
    m30: 30,
};
export const size = {
    button_height48: 48,
    button_height56: 56,
    button_radius8: 8,
};

export const fontSize = {
    f12: 12,
    f14: 14,
    f16: 16,
    f18: 18,
    f20: 20,
    f24: 24,
    btn: 16,
    primary: 'Cochin',
};

export const baseStyles = {
    container: {
        paddingHorizontal: padding.p10,
        paddingVertical: padding.p24,
        width: dimensions.fullWidth,
    },
    letterSpacing38: {
        letterSpacing: 0.38,
    },
    letterSpacing22: {
        letterSpacing: 0.22,
    },

    SemiBold: {
        fontFamily: 'Poppins-SemiBold',
        letterSpacing: 0.34,
        fontWeight: "600",
        fontStyle: "normal",
    },
    Regular: {
        fontFamily: 'Poppins-Regular',
        letterSpacing: 0.34,
        fontWeight: "normal",
        fontStyle: "normal",
    },
    Medium: {
        fontFamily: 'Poppins-Medium',
        letterSpacing: 0.34,
        fontWeight: "500",
        fontStyle: "normal",
    },
    heading:{
        fontFamily: 'Poppins-Medium',
        letterSpacing: 0.34,
        fontWeight: "500",
        fontStyle: "normal",
        opacity: 0.57,
        fontSize: 14,
        marginLeft:16,
        color: "#606060"
    }

};
