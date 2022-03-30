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
            <View style={styles.card}>
                <Image source={require("./Logo.png")} style={{ resizeMode: "contain", height: 45, width: 45, alignSelf: "flex-end" }} />
                <Image source={require("./ThankYouGraphic.png")} style={{ alignSelf: "center", height: 200, width: 200, }} />
                <Text style={{ textAlign: 'center', marginTop: 11, color: "#279C30" }}>Hi, Dorthy!</Text>
                <Text style={{ fontSize: 10, margin: 5 }}>Your top up transaction of amount $ 7350.00 is <Text style={{ color: "#279C30" }}>SUCCESSFUL.</Text> Your current balance is $ 7400.00. Please find the transaction details below.</Text>


                <View style={{ borderWidth: 1, borderColor: "#EBEAEA", margin: 5, padding: 5 }}>
                    <Text style={{ color: "#279C30", textAlign: "center", fontSize: 12, }}>PAYMENT DETAILS</Text>
                    <View style={{ flexDirection: "column", }}>

                        <View style={{ flexDirection: "row", alignSelf: "center", }}>
                            <View style={{ flexDirection: "column", }}>
                                <Text style={styles.tableColumn1}>Card Number</Text>
                                <Text style={styles.tableColumn1}>Order Date</Text>
                                <Text style={styles.tableColumn1}>Order ID</Text>
                                <Text style={styles.tableColumn1}>Order Amount</Text>
                                <Text style={styles.tableColumn1}>Status</Text>
                                <Text style={styles.tableColumn1}>Method</Text>
                            </View>
                            <View style={{ flexDirection: "column", }}>
                                <Text style={styles.tableColumn2}>512345xxxxxx2346</Text>
                                <Text style={styles.tableColumn2}>12-06-2020 12:30PM</Text>
                                <Text style={styles.tableColumn2}>5347856</Text>
                                <Text style={styles.tableColumn2}>$ 7350.00</Text>
                                <Text style={styles.tableColumn2}>Successful</Text>
                                <Text style={styles.tableColumn2}>MasterCard</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: "#EBEAEA", margin: 5, padding: 5 }}>
                    <Text style={{ color: "#279C30", textAlign: "center", fontSize: 13 }}>PERSONAL DETAILS</Text>
                    <View style={{ flexDirection: "column", }}>

                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                            <View style={{ flexDirection: "column", }}>
                                <Text style={styles.tableColumn1}>First Name</Text>
                                <Text style={styles.tableColumn1}>Middle Name</Text>
                                <Text style={styles.tableColumn1}>Last Name</Text>
                                <Text style={styles.tableColumn1}>Mobile Number</Text>
                            </View>
                            <View style={{ flexDirection: "column", }}>
                                <Text style={styles.tableColumn2}>Dorthy</Text>
                                <Text style={styles.tableColumn2}>Johns</Text>
                                <Text style={styles.tableColumn2}>Williams</Text>
                                <Text style={styles.tableColumn2}>(876)525-2525</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ alignSelf: 'flex-end' }}>
                    <Text style={{ fontSize: 8, }}>Kind Regards</Text>
                    <Text style={{ fontSize: 8, color: "#279C30" }}>Supreme Game Team</Text>
                </View>
            </View >


            <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Image resizeMode='contain' source={require("./Logo.png")} style={{ resizeMode: "contain", width: 50 }} />
                <Text style={{ fontSize: 16, color: "#279C30", alignSelf: "center", padding: 5, }}>Supreme Games</Text>
            </View>
            <Text style={{ fontSize: 11, color: "grey", paddingTop: 0, padding: 10, alignSelf: "center" }}>For further details please contact us at info@supremegames.com | 1 876 754-6526</Text>

            <View style={{ flexDirection: "row", alignSelf: "center", flex: 1 }}>
                <Image resizeMode='contain' source={require("./Facebook.png")} style={{ margin: 5, height: "100%" }} />
                <Image resizeMode='contain' source={require("./Instagram.png")} style={{ resizeMode: "contain", margin: 5, height: "100%" }} />
                <Image resizeMode='contain' source={require("./Twitter.png")} style={{ resizeMode: "contain", margin: 5, height: "100%" }} />
            </View>
            <Text style={{ fontSize: 10, color: "grey", alignSelf: "center", padding: 5, }}>supremeventures.com</Text>
        </ScrollView >
    )
};

const styles = StyleSheet.create({

    body: {
        flexDirection: "column",
        backgroundColor: '#F5FDFF',
        flex: 1
    },
    card: {
        borderColor: "#279C30",
        borderWidth: 2,
        borderRadius: 5,
        margin: 12,
        marginTop: 25,
        backgroundColor: "white",
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
    },
    tableColumn1: {
        margin: 1,
        color: "lightgrey",
        fontSize: 10,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1
    },
    tableColumn2: {
        margin: 1,
        fontSize: 10,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1
    },

});

export default App;
