import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Platform,
    Dimensions,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
const deviceHeight = Dimensions.get("window").height;


class NavigationMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: false,
            starCount: 0,
            isLoading: false
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.drawerCover}/>
                <ScrollView style={styles.itemDiv}>
                    <TouchableOpacity onPress={() => {
                        // this.props.navigation.navigate('WEB_VIEW', {
                        //     webLink: URL.URL_HELP,
                        // })
                    }}>
                        <View style={styles.item}>
                            <Text style={styles.text}>{"ABOUT"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('FLIGHT_LIST', {
                            hideTabBar: true
                        });
                    }}>
                        <View style={styles.item}>
                            <Text style={styles.text}>{"ABOUT"}</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    drawerCover: {
        alignSelf: "stretch",
        height: deviceHeight / 3.5,
        width: null,
        position: "relative",
        marginBottom: 20
    },
    itemDiv: {
        height: deviceHeight - deviceHeight / 3.5 - 60,
        flexDirection: 'column'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    icon: {
        resizeMode: 'contain',
        marginLeft: 20,
        width: 24,
        height: 24,
    },
    text: {
        fontWeight: "400",
        alignItems: 'center',
        fontSize: 16,
        marginLeft: 16,
        paddingTop: Platform.OS === 'ios' ? 15 : 0,
        height: 50,
        textAlignVertical: "center",
    },
});

export default NavigationMenu;
