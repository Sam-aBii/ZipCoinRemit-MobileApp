import React from "react";
import { Button, Icon } from "native-base";

import { View, StyleSheet, Text, StatusBar } from "react-native";

import Typograpghy from "../Theme";
const { COLORS } = Typograpghy;

const SendFoodScreen = () => {
  return <View style={styles.Header}></View>;
};

export default SendFoodScreen;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: COLORS.SECONDARY,
  },
  DrawerIcon: {
    fontSize: 30,
    color: COLORS.WHITE,
  },
  HeaderText: {
    fontSize: 21,
    color: COLORS.WHITE,
  },
});
