import React from "react";
import { Button, Icon } from "native-base";

import { View, StyleSheet, Text, TextInput, Platform } from "react-native";

import Typograpghy from "../../Theme";

const { COLORS } = Typograpghy;

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
      </View>
      <View style={styles.action}>
        <TextInput style={styles.textInput} placeholder="Enter Email Address" autoCapitalize="none" />
      </View>
      <View>
        <TextInput />
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
