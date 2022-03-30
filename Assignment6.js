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
import { RadioButton } from 'react-native-paper';
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

    const [checked, setChecked] = React.useState('first');
    const [color, setColor] = React.useState('grey');

    const function1 = (text) => {
        setChecked(text)
        // setColor('blue')
    };

    return (
        <ScrollView style={styles.body}>
            <View style={styles.header}>
                <Image resizeMode='contain' source={require("./arrowRoundBack.png")} style={{ width: 17, marginLeft: 12, alignSelf: "center" }} />
                <View style={{ alignSelf: "center", flex: 1, }}>
                    <Image resizeMode='contain' source={require("./unhinLogo.png")} style={styles.imgUnhinLogo} />
                </View>
                <Image resizeMode='contain' source={require("./nevisLogo.png")} style={{ alignSelf: "center", resizeMode: "contain", width: 50 }} />
            </View>
            <Text style={{ color: "#00B2D8", textAlign: "center" }}>Current Health Condition</Text>
            <Text style={{ color: "#9D9D9D", margin: 5, textAlign: "center" }}>Do you have any of the following life-threatening symptoms?</Text>

            <View>
                <View style={styles.radioBox}>
                    <Text style={{ flex: 5, color: "#9D9D9D" }}>Not experiencing any life threatening symptoms</Text>
                    <RadioButton
                        style={{ flex: 1 }}
                        color={color}
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => function1('first')

                        }
                    // onPress={() => setColor('')}
                    />
                </View>

                <View style={styles.radioBox}>
                    <Text style={{ flex: 5, color: "#9D9D9D" }}>Gasping for air or cannot talk without Catching your breath (extremely difficult breathing)</Text>
                    <RadioButton
                        style={{ flex: 1 }}
                        color="#00B2D8"
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}

                    />
                </View>

                <View style={styles.radioBox}>
                    <Text style={{ flex: 5, color: "#9D9D9D" }}>Severe and constant pain or pressure in the chest</Text>
                    <RadioButton
                        style={{ flex: 1 }}
                        color="#00B2D8"
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')}
                    />
                </View>

                <View style={styles.radioBox}>
                    <Text style={{ flex: 5, color: "#9D9D9D" }}>Severe and constant dizziness or Light-headedness</Text>
                    <RadioButton
                        style={{ flex: 1 }}
                        color="#00B2D8"
                        value="fourth"
                        status={checked === 'fourth' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('fourth')}
                    />
                </View>

                <View style={styles.radioBox}>
                    <Text style={{ flex: 5, color: "#9D9D9D" }}>Acting confused (new or worsening</Text>
                    <RadioButton
                        style={{ flex: 1 }}
                        color="#00B2D8"
                        value="fifth"
                        status={checked === 'fifth' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('fifth')}
                    />
                </View>

                <View style={styles.radioBox}>
                    <Text style={{ flex: 5, color: "#9D9D9D" }}>Unconscious or very difficult to wake up</Text>
                    <RadioButton
                        style={{ flex: 1 }}
                        color="#00B2D8"
                        value="sixth"
                        status={checked === 'sixth' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('sixth')}
                    />
                </View>
                <View style={styles.radioBox}>
                    <Text style={{ flex: 5, color: "#9D9D9D" }}>Slurred speech (new or worsening)</Text>
                    <RadioButton
                        style={{ flex: 1 }}
                        color="#00B2D8"
                        value="seventh"
                        status={checked === 'seventh' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('seventh')}
                    />
                </View>
                <View style={styles.radioBox}>
                    <Text style={{ flex: 5, color: "#9D9D9D" }}>New seizure or seizures that won't stop</Text>
                    <RadioButton
                        style={{ flex: 1 }}
                        color="#00B2D8"
                        value="eigth"
                        status={checked === 'eigth' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('eigth')}
                    />
                </View>
            </View>

            <View style={styles.buttonView}>
                <View style={styles.buttonInnerView}><Text style={styles.buttonCancel}>Cancel</Text>
                    <Text style={styles.buttonSave}>Save</Text>
                </View>
                <Text style={styles.buttonReset}>Reset</Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.footerHome}><Image source={require('./home.png')} />
                    <Text>Home</Text>
                </View>
                <View style={styles.footerMessage}><Image source={require('./email.png')} />
                    <Text>Messages</Text></View>
                <View style={styles.footerSettings}><Image source={require('./Settings.png')} />
                    <Text>Settings</Text></View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({

    body: {
        backgroundColor: '#F5FDFF',
        flex: 1
    },
    header: {
        flexDirection: "row",
        height: 50,
        backgroundColor: "white"
    },
    radioBox: {
        flexDirection: 'row',
        margin: 15,
        borderRadius: 5,
        borderWidth: 2,
        padding: 8,
        marginBottom: 2,
        borderColor: "lightgrey",
        backgroundColor: "white"
    },
    imgUnhinLogo: {
        alignSelf: "center",
        resizeMode: "contain",
        width: 90
    },
    buttonReset: {
        alignSelf: "center",
        color: "white",
        textAlign: "center",
        backgroundColor: "#9D9D9D",
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 5,
        width: 220,
    },
    buttonSave: {
        color: "white",
        backgroundColor: "#00B2D8",
        marginLeft: 5,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 5
    },
    buttonCancel: {
        backgroundColor: "#F85545",
        color: "white",
        marginRight: 5,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 5
    },
    buttonInnerView: {
        padding: 8,
        borderRadius: 5,
        flexDirection: "row"
    },
    buttonView: {
        margin: 8,
        flexDirection: "column",
        alignSelf: "center",
    },
    footer: {
        flexDirection: "row",
        flex: 2,
        margin: 5,
        backgroundColor: "white",

    },
    footerHome: {
        flexDirection: "row",
        flex: 1,
        borderRightWidth: 1,
        borderColor: "lightgrey",
        padding: 5,
        paddingRight: 1
    },
    footerMessage: {
        flexDirection: "row",
        flex: 1,
        padding: 5,
        paddingLeft: 10,
        borderRightWidth: 1,
        borderColor: "lightgrey",
    },
    footerSettings: {
        flexDirection: "row",
        flex: 1,
        padding: 5,
    }
});

export default App;
