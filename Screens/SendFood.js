import React from "react";

import { View, StyleSheet } from "react-native";

import Typograpghy from "../Theme";

const { COLORS } = Typograpghy;

const SendFoodScreen = () => <View style={styles.Header} />;

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
