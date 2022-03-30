import * as React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
function home() {
    return (
        <View><Text>home screen</Text></View>
    );
}

export default home;