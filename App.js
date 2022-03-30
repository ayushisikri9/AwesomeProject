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

  TouchableOpacity,
} from 'react-native';

import { TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
// import { Dropdown } from 'react-native-element-dropdown';

//import DateTimePicker from '@react-native-community/datetimepicker';
// import DateTimePickerModal from 'react-native-datepicker';
// import { DateTimePickerModal } from "react-native-modal-datetime-picker";




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

  const [selectedLanguage, setSelectedLanguage] = React.useState();
  const [selectedLanguage1, setSelectedLanguage1] = React.useState();
  const [selectedLanguage3, setSelectedLanguage3] = React.useState();

  // const [date, setDate] = React.useState(new Date(1598051730000));
  // const [mode, setMode] = React.useState('date');
  // const [show, setShow] = React.useState(false);

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // }

  // const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date) => {
  //   console.warn("A date has been picked: ", date);
  //   hideDatePicker();
  // };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image resizeMode='contain'
          source={require("./HamMenu.png")} style={styles.imgHam} />
        <View style={styles.imgLogoView}>
          <Image resizeMode='contain' source={require("./Logo.png")} style={styles.imgLogo} />
        </View>
      </View>
      <View style={{ borderBottomColor: '#279C30', borderBottomWidth: 2, }}></View>
      <View><Text style={styles.registerHead}>Registration</Text></View>

      <View style={styles.imgTickView}><Image source={require("./signup-4.png")} style={styles.imgTick} /></View>

      <View><Text style={styles.physicAddHeader}>Physical Address and Identification</Text></View>

      <TextInput
        label="Street Address"
        mode="outlined"
        height={40}
        style={styles.inputBoxStyling}
        activeOutlineColor="green"
      />

      <View><Text style={{ fontSize: 8, alignSelf: "flex-end", marginRight: 15, marginBottom: 0 }}>*Residential only, No PO Box</Text></View>

      <TextInput
        label="Apartment/Suite"
        mode="outlined"
        style={styles.inputBoxStyling}
        activeOutlineColor="green"
      />

      <View style={styles.dropdownView}>
        <Picker
          style={{ ...styles.dropdown }}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >

          <Picker.Item default label="City/Town" value="City/Town" style={{ color: "grey" }} />
          <Picker.Item label="Jamaica" value="Jamaica" style={{ color: "black" }} />
          <Picker.Item label="Parish" value="Parish" style={{ color: "black" }} />

        </Picker>
      </View>

      <View style={styles.dropdownView}>
        <Picker
          style={{ ...styles.dropdown }}
          selectedValue={selectedLanguage1}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage1(itemValue)
          }
        >

          <Picker.Item default label="Select Parish" value="Select Parish" style={{ color: "grey" }} />
          <Picker.Item label="Jamaica" value="Jamaica" style={{ color: "black" }} />
          <Picker.Item label="Parish" value="Parish" style={{ color: "black" }} />

        </Picker>
      </View>

      <TextInput
        label="Email Address"
        mode="outlined"
        height={50}
        style={styles.inputBoxStyling}
        activeOutlineColor="green"
      />

      <TextInput
        label="TRN Number"
        mode="outlined"
        secureTextEntry
        height={50}
        style={styles.inputBoxStyling}
        activeOutlineColor="green"
      />

      <View style={styles.dropdownView}>
        <Picker
          style={{ ...styles.dropdown }}
          selectedValue={selectedLanguage3}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage3(itemValue)
          }>
          <Picker.Item default label="ID Type" value="ID Type" style={{ color: "grey" }} />

          <Picker.Item label="Card" value="Card" style={{ color: "black" }} />
          <Picker.Item label="Paper" value="Paper" style={{ color: "black" }} />

        </Picker>
      </View>

      <TextInput
        label="ID Number"
        mode="outlined"
        height={50}
        style={styles.inputBoxStyling}
        activeOutlineColor="green"
      />

      <TextInput
        label="ID Expiration Date"
        mode="outlined"
        right={
          <TextInput.Icon
            name={require("./Calendar.png")}
            size={15}
            color="grey"
          />
        }
        height={50}
        style={styles.inputBoxStyling}
        activeOutlineColor="green"
      />

      {/* <View style={styles.dropdownView}>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View> */}



      <View style={styles.chooseImageView}>
        <Image resizeMode="contain" style={styles.chooseImage} source={require('./ChooseImageIcon.png')} />
        <Text style={styles.chooseImageText}>Choose Image</Text>
      </View>

      <Text style={styles.plzPara}>Please make sure the document is fully legible and entirely on the picture.</Text>

      <View style={styles.outerButtonView}>
        <View style={styles.buttonView1}>
          <Text style={styles.button1}>Back</Text>
        </View>
        <View style={styles.buttonView2}>
          <Text style={styles.button2}>Save and Continue</Text>
        </View>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FDFF',
    flex: 1
  },
  imgHam: {
    width: 14,
    marginLeft: 12,
    marginTop: 0,
    alignSelf: "center"
  },
  inputBoxStyling: {
    margin: 15,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#FFFFFF"
  },
  dropdownView: {
    borderWidth: 1,
    borderColor: "grey",
    margin: 15,
    marginTop: 8,
    marginBottom: 5,
    borderRadius: 4,
    // backgroundColor: "red"
  },
  dropdown: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "grey",
    backgroundColor: "#FFFFFF"
  },
  registerHead: {
    textAlign: "center",
    color: "#279C30",
    fontSize: 18,
  },
  physicAddHeader: {
    textAlign: "center",
    color: "#279C30",
    fontSize: 15,
    marginBottom: 10,
  },
  outerButtonView: {
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "center",
    resizeMode: "contain",
    flexDirection: "row",
  },
  buttonView1: {
    flex: 1,
    margin: 2,
    height: 30,
    color: "white",
    alignSelf: "center",
    resizeMode: "contain",
    borderRadius: 4,
    paddingTop: 4,
    backgroundColor: "#656565",
  },
  buttonView2: {
    margin: 5,
    flex: 1,
    height: 30,
    alignSelf: "center",
    resizeMode: "contain",
    color: "white",
    borderRadius: 4,
    paddingTop: 4,
    backgroundColor: "#279C30",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#EBEAEA"
  },
  imgLogoView: {
    alignItems: "center",
    flex: 1,
  },
  imgLogo: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 50
  },
  imgTick: {
    alignSelf: "center",
    resizeMode: "contain",
    width: "100%",
  },
  imgTickView: {
    paddingHorizontal: 20,
  },
  plzPara: {
    fontSize: 10,
    textAlign: "center",
    margin: 2,
    marginLeft: 25,
    marginRight: 25
  },
  button1: {
    color: "white",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 12
  },
  chooseImageView: {
    backgroundColor: "#FFFFFF",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
    // height: ,
    flexDirection: "row",
    margin: 15,
    marginTop: 5,
    marginBottom: 4,
  },
  chooseImage: {
    height: 25,
    width: 10,
    padding: 10,
    margin: 10,
  },
  chooseImageText: {
    flex: 5,
    padding: 10,
  },
  button2: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    alignSelf: "center",
  }
});

export default App;
