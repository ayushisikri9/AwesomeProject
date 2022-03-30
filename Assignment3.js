import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
    Button,
    Image,
    Table,
    Row,
    TouchableOpacity,
} from 'react-native';

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
        <ScrollView style={styles.body}>
            <View style={{ flexDirection: "row", backgroundColor: "#EBEAEA" }}>
                <Image resizeMode='contain' source={require("./HamMenu.png")} style={{ width: 14, marginLeft: 12, alignSelf: "center" }} />
                <View style={{ alignSelf: "center", flex: 1, }}>
                    <Image resizeMode='contain' source={require("./Logo.png")} style={{ alignSelf: "center", resizeMode: "contain", width: 50 }} />
                </View>
            </View>
            <View style={{ borderBottomColor: '#279C30', borderBottomWidth: 2, }}></View>

            <View style={{ width: "100%", height: 130 }}><Image source={require("./Banner.png")} style={{
                flex: 1, width: "100%", height: undefined
            }} />
            </View>
            <View><Text style={{ color: "#279C30", alignSelf: "center", fontSize: 18 }}>Account Levels</Text></View>
            <Text style={{ alignSelf: "center", fontSize: 12 }}>Original Documents required at verfication</Text>
            <View style={styles.card1}>
                <Text style={{ color: "#FF9F46", alignSelf: "center", margin: 5 }}>LEVEL 2</Text>
                <Text style={{ alignSelf: "center" }}>Monthly Cash in limit:</Text>
                <Text style={{ color: "#FF9F46", alignSelf: "center", fontSize: 18, }}><Image resizeMode='contain' source={require("./Coin.png")} style={{ resizeMode: 'contain', }} /> 200,000</Text>
                <Text style={{ alignSelf: "center" }}>Daily Wager limit : $ 100,000</Text>
                <View style={{ flexDirection: "row", alignSelf: "center", margin: 10 }}>
                    <View style={{ alignSelf: "center", flexDirection: "column", marginRight: 10 }}>
                        <Image resizeMode='contain' source={require("./tick.png")} style={styles.cardListCol1} />
                        <Image resizeMode='contain' source={require("./tick.png")} style={styles.cardListCol1} />
                        <Image resizeMode='contain' source={require("./tick.png")} style={styles.cardListCol1} />
                        <Image resizeMode='contain' source={require("./tick.png")} style={styles.cardListCol1} />
                        <Image resizeMode='contain' source={require("./tick.png")} style={styles.cardListCol1} />
                        <Image resizeMode='contain' source={require("./star.png")} style={styles.cardListCol1} />
                        <Image resizeMode='contain' source={require("./star.png")} style={styles.cardListCol1} />
                        <Image resizeMode='contain' source={require("./star.png")} style={styles.cardListCol1} />
                    </View>

                    <View style={{ alignSelf: "center", flexDirection: "column", marginLeft: 2 }}>
                        <Text style={styles.cardListCol2}>Name</Text>
                        <Text style={styles.cardListCol2}>Gender</Text>
                        <Text style={styles.cardListCol2}>Nationality</Text>
                        <Text style={styles.cardListCol2}>Date of Birth</Text>
                        <Text style={styles.cardListCol2}>Address</Text>
                        <Text style={styles.cardListCol2}>TRN</Text>
                        <Text style={styles.cardListCol2}>Photo ID</Text>
                        <Text style={styles.cardListCol2}>Proof of Income</Text>
                    </View>
                </View>
            </View>

            <View style={styles.card2}>
                <Text style={{ alignSelf: "center", color: "#279C30", }}>List of approved documents</Text>
                <Text style={{ fontSize: 11 }}>If you have privacy concerns around uploading your proof of address or proff of income, you may upload a blank picture. if you do that, however , you will be assigned to a LEVEL 1 Account.</Text>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>The approved Proof of Address are:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{'\u2022'}</Text>
                    <Text style={{ flex: 1, paddingLeft: 5, fontSize: 12 }}>Current Utility Bill</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{'\u2022'}</Text>
                    <Text style={{ flex: 1, paddingLeft: 5, fontSize: 12 }}>Bank Statement</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{'\u2022'}</Text>
                    <Text style={{ flex: 1, paddingLeft: 5, fontSize: 12 }}>Postmarked Envelope</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{'\u2022'}</Text>
                    <Text style={{ flex: 1, fontSize: 12, paddingLeft: 5 }}>Stamped JP Letter</Text>
                </View>

                <Text style={{ fontWeight: "bold", fontSize: 12 }}>The approved Proof of Income are:</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Text>{'\u2022'}</Text>
                    <Text style={{ flex: 1, paddingLeft: 5, fontSize: 12 }}>Pay Slip</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{'\u2022'}</Text>
                    <Text style={{ flex: 1, paddingLeft: 5, fontSize: 12 }}>Job Letter</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{'\u2022'}</Text>
                    <Text style={{ flex: 1, paddingLeft: 5, fontSize: 12 }}>Bank Statement</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{'\u2022'}</Text>
                    <Text style={{ flex: 1, paddingLeft: 5, fontSize: 12 }}>Remittance</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{'\u2022'}</Text>
                    <Text style={{ flex: 1, paddingLeft: 5, fontSize: 12 }}>Pension</Text>
                </View>
            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({

    body: {
        backgroundColor: '#F5FDFF',
        flex: 1
    },
    card1: {
        borderColor: "#FF9F46",
        borderWidth: 2,
        borderRadius: 5,
        margin: 12,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 15,
        backgroundColor: "white",
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
    },
    cardListCol1: {
        resizeMode: 'contain',
        marginBottom: 5
    },
    cardListCol2: {
    },
    card2: {
        borderColor: "lightgrey",
        borderWidth: 1,
        borderRadius: 5,
        margin: 12,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 15,
        backgroundColor: "white",
        padding: 10,
    },

});

export default App;
