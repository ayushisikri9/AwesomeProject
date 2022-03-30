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
        <ScrollView style={styles.body}>
            <View style={styles.header}>
                <Image resizeMode='contain' source={require("./HamMenu.png")} style={styles.imgHamMenu} />
                <View style={{ alignSelf: "center", flex: 1, }}>
                    <Image resizeMode='contain' source={require("./Logo.png")} style={{ alignSelf: "center", resizeMode: "contain", width: 50 }} />
                </View>
            </View>
            <View style={{ borderBottomColor: '#279C30', borderBottomWidth: 2, }}></View>

            <View style={{ width: "100%", height: 133 }}><Image resizeMode="contain" source={require("./Banner.png")} style={{
                width: "100%", flex: 1, height: "20%"
            }} />
            </View>

            <Text style={styles.locationsHeader}>Locations</Text>

            <View style={styles.verifHeader}>
                <Text style={styles.verifInnerHeader}>Verification Locations</Text>
                <Image source={require('./minus.png')} style={styles.imgMinus} />
            </View>

            <View style={styles.para1}>
                <Text style={styles.textHeader}>Prize Payment Centre</Text>
                <Text style={styles.textPara}>1st Floor, Sagicor Centre 28-48 Barbados Avenue, Kingston 5 1-876-454-6526</Text>

                <Text style={styles.textHeader}>Half Way Tree</Text>
                <Text style={styles.textPara}>15H Half Way Tree Road, State Mall, Kingston 5 1-876-906-8719</Text>

                <Text style={styles.textHeader}>Portmore</Text>
                <Text style={styles.textPara}>Shop #6, 2nd Floor McMaster's Centre Lot 18 Portmore Town Centre 1-876-622-1426</Text>

                <Text style={styles.textHeader}>Spanish Town</Text>
                <Text style={styles.textPara}>37, Young Street, Spanish Town St. Catherine 1-876-618-9384</Text>

                <Text style={styles.textHeader}>Savanna-La-Mar</Text>
                <Text style={styles.textPara}>Shop #16A, Hendon Mall Savanna-La-Mar, WestmoreLand 1-876-918-0233</Text>

                <Text style={styles.textHeader}>Montego Bay</Text>
                <Text style={styles.textPara}>25 St. James Street Shop #40 1-876-622-7783</Text>

                <Text style={styles.textHeader}>Ocho Rios</Text>
                <Text style={styles.textPara}>Shop GF #5 Island Shopping Plaza 1-876-630-7985</Text>

                <Text style={styles.textHeader}>Lotto SuperStore</Text>
                <Text style={styles.textPara}>Shop #12 Clock Tower Plaza</Text>
            </View>

            <View style={styles.verifHeader}>
                <Text style={styles.verifInnerHeader}>Top Up Locations</Text>
                <Image source={require('./minus.png')} style={styles.imgMinus} />
            </View>


            <Text style={styles.textParaHeader}>Kingston and St. Andrew</Text>

            <Text style={styles.textHeader}>Circles Bar and Gaming</Text>
            <Text style={styles.textPara}>143 old Hope Road Liguanea</Text>

            <Text style={styles.textHeader}>Bar and Games Limited</Text>
            <Text style={styles.textPara}>72 King Street Downtown, Kingston</Text>

            <Text style={styles.textHeader}>Suspect Services</Text>
            <Text style={styles.textPara}>8 Gordon Town Road Papine</Text>

            <Text style={styles.textHeader}>Jabra Marketing Engineering</Text>
            <Text style={styles.textPara}>Shop 35 DermansonPlaza Bernard Lodge</Text>

            <Text style={styles.textParaHeader}>Kingston and St. Andrew</Text>

            <Text style={styles.textHeader}>Clocktower lotto SuperStore</Text>
            <Text style={styles.textPara}>Clock Tower Plaza Half Way Tree</Text>

            <Text style={styles.textHeader}>Bar and Games Limited</Text>
            <Text style={styles.textPara}>8 Main Street Stony Hills</Text>

            <Text style={styles.textHeader}>M&M Wholesale</Text>
            <Text style={styles.textPara}>A Red Hills Road Red Hills garden</Text>

            <Text style={styles.textHeader}>Jenpow's Cosmetics</Text>
            <Text style={styles.textPara}>Shop 35, 20 Marlie Mount St. Old Harbour</Text>

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
        backgroundColor: "#EBEAEA"
    },
    imgHamMenu: {
        width: 14,
        marginLeft: 12,
        alignSelf: "center"
    },
    locationsHeader: {
        color: "#279C30",
        alignSelf: "center",
        fontSize: 20,
        margin: 5,
    },
    verifHeader: {
        backgroundColor: '#EDF7EE',
        padding: 5,
        flexDirection: "row"
    },
    verifInnerHeader: {
        color: "#279C30",
        alignSelf: "center",
        flex: 8,
        marginLeft: 30,
        textAlign: "center",
    },
    imgMinus: {
        marginRight: 10,
        alignSelf: "flex-end",
    },
    para1: {
        alignSelf: "center"
    },
    textHeader: {
        color: "#279C30",
        fontSize: 12,
        margin: 5,
        alignSelf: "center"
    },
    textPara: {
        fontSize: 11,
        margin: 8,
        marginLeft: 105,
        marginRight: 105,
        textAlign: "center",
    },
    textParaHeader: {
        color: "#279C30",
        fontSize: 16,
        margin: 10,
        alignSelf: "center",
        borderBottomWidth: 1,
        borderColor: "lightgrey"
    },

});

export default App;
