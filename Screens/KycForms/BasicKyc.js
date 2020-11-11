import React  from "react";
import { Button, Icon } from "native-base";
<<<<<<< HEAD
import { View, StyleSheet, Text, TextInput } from "react-native";
=======

import { View, StyleSheet, Text, TextInput, Platform } from "react-native";
>>>>>>> cacd7a7ef60ac20bdfe25c9e29ce6d4eb344d982

import Typograpghy from "../../Theme";

const { COLORS } = Typograpghy;

<<<<<<< HEAD
const BasicKyc = ({ navigation }) => {

  return (
    <View>
      <View style={styles.Header}>
        <Button transparent>
          <Icon
            name="menu"
            onPress={() => navigation.openDrawer()}
            style={styles.DrawerIcon}
          />
          <Text style={styles.HeaderText}>Basic KYC</Text>
        </Button>
=======
const BasicKyc = ({ navigation }) => (
  <View>
    <View style={styles.Header}>
      <Button transparent>
        <Icon name="menu" onPress={() => navigation.openDrawer()} style={styles.DrawerIcon} />
        <Text style={styles.HeaderText}>Basic KYC</Text>
      </Button>
    </View>

    <View style={styles.NotedText}>
      <Text>
        To continue with sending money, you need to verify one of the Know Your Customer (KYC) processes. Thank you.
      </Text>
    </View>
    <View style={styles.BasicKycForm}>
      <View style={styles.action}>
        <TextInput style={styles.textInput} placeholder="Enter Full Name" autoCapitalize="none" />
>>>>>>> cacd7a7ef60ac20bdfe25c9e29ce6d4eb344d982
      </View>
      <View style={styles.action}>
        <TextInput style={styles.textInput} placeholder="Enter Email Address" autoCapitalize="none" />
      </View>
<<<<<<< HEAD
      <View style={styles.BasicKycForm}>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Full Name"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email Address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.action}>
          {/* <TextInput
            style={styles.textInput}
            placeholder="Country"
            autoCapitalize="none"
            onChange={(e) => {
              const foundCountry = airtimeCountries.find(
                (country) => country.CountryIso === e.target.value
              );

              setSelectedCountry(foundCountry);
              setCountry(e.target.value);
            }}
            disabled={airtimeCountries.length < 1}
            name="country"
          />
          <option value="" disabled>
            {airtimeCountries.length > 0
              ? "Select a country"
              : "Loading countries..."}
          </option>
          {airtimeCountries.map((country) => (
            <option key={country.CountryIso} value={country.CountryIso}>
              {country.CountryName}
            </option>
          ))} */}
        </View>
=======
      <View>
        <TextInput />
>>>>>>> cacd7a7ef60ac20bdfe25c9e29ce6d4eb344d982
      </View>
    </View>
  </View>
);

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
});
