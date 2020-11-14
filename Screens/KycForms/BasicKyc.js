import React, { useState, useContext } from "react";
import { Picker, ListItem, CheckBox, Button } from "native-base";
import { View, StyleSheet, Text, TextInput, Platform, ScrollView } from "react-native";

import CustomHeader from "../../components/shared/Header";
import CustomPicker from "../../components/shared/SelectInput";
import { GlobalContext } from "../../store/contexts/globalContext";
import globalStyles from "../../styles";

import Typograpghy from "../../Theme";

const { COLORS } = Typograpghy;

const BasicKyc = ({ navigation }) => {
  const [Gender, setGender] = useState("Select Gender");
  const {
    state: { countries: globalCountries },
  } = useContext(GlobalContext);
  return (
    <ScrollView>
      <CustomHeader screenTitle="Basic KYC" onPress={navigation.goBack} showCancelBtn onCancel={navigation.goBack} />
      <View style={styles.NotedText}>
        <Text>
          To continue with sending money, you need to verify one of the Know Your Customer (KYC) processes. Thank you.
        </Text>
      </View>
      <View style={styles.BasicKycForm}>
        <View style={styles.action}>
          <TextInput style={styles.textInput} placeholder="Enter Full Name" autoCapitalize="none" />
        </View>
        <View style={styles.action}>
          <TextInput style={styles.textInput} placeholder="Enter Email Address" autoCapitalize="none" />
        </View>
        <View style={styles.Select}>
          <Picker note mode="dropdown" selectedValue={Gender} onValueChange={setGender} style={{ color: COLORS.DEFAULT }}>
            <Picker.Item label="Male" value="key0" />
            <Picker.Item label="Female" value="key1" />
            <Picker.Item label="Others" value="key2" />
          </Picker>
        </View>
        <View>
          <View style={styles.SelectCountry}>
            <CustomPicker items={globalCountries} iosHeader="Please select a country" />
          </View>
          <View style={styles.action}>
            <TextInput style={styles.textInput} placeholder="Enter City Name" autoCapitalize="none" />
          </View>
          <View style={styles.action}>
            <TextInput style={styles.textInput} placeholder="Postal/Zip code" autoCapitalize="none" />
          </View>
          <View style={styles.action}>
            <TextInput style={styles.textInput} placeholder="Enter Your Address" autoCapitalize="none" />
          </View>
          <View style={styles.action}>
            <TextInput style={styles.textInput} placeholder="Comments" autoCapitalize="none" />
          </View>
          <View style={styles.CheckBox}>
            <ListItem>
              <CheckBox checked={false} color={COLORS.SECONDARY} />
              <Text style={styles.CheckBoxText}>
                Please check the box to ensure your information is correct to the best of your knowledge, incomplete and
                inaccurate information may delay the approval process.
              </Text>
            </ListItem>
          </View>
        </View>
      </View>
      <Button style={{ ...globalStyles.btnPrimary, marginLeft: "auto", marginRight: 20, marginTop: 10 }}>
        <Text style={globalStyles.btnPrimaryText}>SUBMIT</Text>
      </Button>
    </ScrollView>
  );
};

export default BasicKyc;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: COLORS.SECONDARY,
  },
  DrawerIcon: {
    fontSize: 30,
    color: COLORS.WHITE,
  },
  HeaderText: {
    fontSize: 20,
    color: COLORS.WHITE,
  },
  NotedText: {
    borderWidth: 1,
    borderColor: COLORS.DEFAULT,
    padding: 7,
    margin: 10,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 5,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_COLOR,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    paddingTop: 5,
    color: COLORS.DEFAULT,
  },
  Select: {
    flexDirection: "row",
    paddingTop: 5,
    marginLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_COLOR,
    color: COLORS.BLACK,
  },
  SelectCountry: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_COLOR,
    color: COLORS.BLACK,
  },
  CheckBoxText: {
    paddingLeft: 10,
    color: COLORS.DEFAULT,
  },
});
