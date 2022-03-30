import * as React from 'react';
// import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Navigator from './routes/homeStack';
// import Home from './screens/home';
// import ReviewDetails from '../screens/reviewDetails';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function Practise() {
    return (
        //<Home/>
        // <Navigator />
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    title: 'Home a',
                    headerStyle: {
                        backgroundColor: "red",
                    },
                    headerTitleStyle: {
                        color: "white",
                        fontWeight: "bold"
                    },
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Click me"
                        />
                    ),

                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Practise;















// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, Alert } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const DATA = [
//     {
//         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//         title: 'First Item',
//     },
//     {
//         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//         title: 'Second Item',
//     },
//     {
//         id: '58694a0f-3da1-471f-bd96-145571e29d72',
//         title: 'Third Item',
//     },
// ];

// function DetailsScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//         </View>

//     );
// }

// const Stack = createNativeStackNavigator();

// const App = () => {
//     const handleClick = () => {
//         Alert.alert("ayushi ");
//         // (<Text style={{ height: 100, backgroundColor: "red", marginTop: 50 }}>Click !!!!</Text>)
//     };
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home">
//                 <Stack.Screen name="Home" component={HomeScreen} />
//                 {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
//             </Stack.Navigator>
//         </NavigationContainer>

//     );
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//         backgroundColor: '#f9c2ff',
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//     },
//     title: {
//         fontSize: 32,
//     },
// });

// export default App;