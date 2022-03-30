/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
// import TabNavigation from './TabNavigation';
// import Assignment2 from './Assignment2'
// import Assignment3 from './Assignment3'
// import Assignment4 from './Assignment4'
// import Assignment5 from './Assignment5'
// import Assignment6 from './Assignment6'
// import Flatlist from './Flatlist'
// import Practise from './Practise'
import DrawerNavigation from './DrawerNavigation';
// AppRegistry.registerComponent(appName, () => Assignment2);
// AppRegistry.registerComponent(appName, () => Flatlist);
// AppRegistry.registerComponent(appName, () => Practise);
// AppRegistry.registerComponent(appName, () => Assignment3);
// AppRegistry.registerComponent(appName, () => Assignment4);
// AppRegistry.registerComponent(appName, () => Assignment5);
// AppRegistry.registerComponent(appName, () => Assignment6);
// AppRegistry.registerComponent(appName, () => TabNavigation);
AppRegistry.registerComponent(appName, () => DrawerNavigation);



// If you are sure the module exists, try these steps:
//  1. Clear watchman watches: watchman watch-del-all
//  2. Delete node_modules and run yarn install
//  3. Reset Metro's cache: yarn start --reset-cache
//  4. Remove the cache: rm -rf /tmp/metro-*