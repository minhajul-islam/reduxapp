import React from 'react';
import {Provider} from 'react-redux';
import {reduxStore, persistor} from "../../redux/reduxStore";
import { StatusBar, View} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import {AlertHelper} from '../../component/AlertHelper';
import {PersistGate} from 'redux-persist/integration/react';
import App from "./AppWithDrawer";

export default class AppRoot extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={reduxStore}>
                <PersistGate loading={null} persistor={persistor}>
                    <View style={{flex: 1}}>
                        <App/>
                        <DropdownAlert
                            defaultContainer={{padding: 8, paddingTop: StatusBar.currentHeight, flexDirection: 'row'}}
                            ref={ref => AlertHelper.setDropDown(ref)}
                            onClose={() => AlertHelper.invokeOnClose()}/>
                    </View>
                </PersistGate>
            </Provider>
        );
    }
}
