import React from "react";
import { Button, Icon } from "native-base";

import { View, StyleSheet, Text, StatusBar } from "react-native";

import Typograpghy from "../Theme";

const { COLORS } = Typograpghy;

const PaymentScreen = ({ navigation }) => (
  <View style={styles.Header}>
    <StatusBar backgroundColor={COLORS.SECONDARY} barStyle="light-content" />
    <Button transparent>
      <Icon name="menu" onPress={() => navigation.openDrawer()} style={styles.DrawerIcon} />
      <Text style={styles.HeaderText}>Payment</Text>
    </Button>
  </View>
);

export default PaymentScreen;

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
