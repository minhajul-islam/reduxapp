/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppRoot from './src/app/AppRoot';
import {name as appName} from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(AppRoot));
