import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Image,
    Table,
    Row,
    TouchableOpacity,
} from 'react-native';

import { TextInput } from 'react-native-paper';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { isLogBoxErrorMessage } from 'react-native/Libraries/LogBox/Data/LogBoxData';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <ScrollView style={{ ...styles.body, color: "red" }}>
            <View style={{ flexDirection: "row", backgroundColor: "#EBEAEA" }}>
                <Image resizeMode='contain' source={require("./HamMenu.png")} style={{ width: 14, marginLeft: 12, alignSelf: "center" }} />
                <View style={{ alignSelf: "center", flex: 1, }}>
                    <Image resizeMode='contain' source={require("./Logo.png")} style={{ alignSelf: "center", resizeMode: "contain", width: 50 }} />
                </View>
            </View>
            <View style={{ borderBottomColor: '#279C30', borderBottomWidth: 2, }}></View>

            <View style={{ width: "100%", height: 133 }}><Image resizeMode="contain" source={require("./Banner.png")} style={{
                width: "100%", flex: 1, height: "20%"
            }} />
            </View>

            <TextInput
                label="Name"
                mode="outlined"
                style={{
                    margin: 15, marginBottom: 2,
                }}
                theme={{ colors: { primary: 'green', text: "black" } }}
            />

            <TextInput
                label="Email Address"
                mode="outlined"
                style={{ margin: 15, marginBottom: 2, }}
                theme={{ colors: { primary: 'green', text: "black" } }}
            />

            <TextInput
                label="Subject"
                mode="outlined"
                // size="5"
                style={{ margin: 15, marginBottom: 2, }}
                theme={{ colors: { primary: 'green', text: "black" } }}
            />

            <TextInput
                label="Message"
                mode="outlined"
                style={{ margin: 15, }}
                multiline={true}
                numberOfLines={4}
                theme={{ colors: { primary: 'green', text: "black" } }}
            />



            <View style={{
                alignSelf: "center", backgroundColor: "#279C30", padding: 8, margin: 5, borderRadius: 5,
            }}><Text style={{ alignSelf: "center", color: "white", padding: 5, }}>Send Email</Text>
            </View>

        </ScrollView >
    )
};

const styles = StyleSheet.create({

    body: {
        backgroundColor: '#F5FDFF',
        flex: 1
    },
});

export default App;
