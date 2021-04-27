/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Main from './src';
import { name as appName } from './app.json';

import override from './override';

override();

AppRegistry.registerComponent(appName, () => Main);
