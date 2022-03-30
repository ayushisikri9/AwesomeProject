import * as React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);