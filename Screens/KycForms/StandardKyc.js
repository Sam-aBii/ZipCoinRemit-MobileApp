import React from "react";
import { Button, Icon } from "native-base";

import { View, StyleSheet, Text } from "react-native";

import Typograpghy from "../../Theme";
const { COLORS } = Typograpghy;

const StandardKyc = ({ navigation }) => {
  return (
    <View style={styles.Header}>
      <Button transparent>
        <Icon
          name="menu"
          onPress={() => navigation.openDrawer()}
          style={styles.DrawerIcon}
        />
        <Text style={styles.HeaderText}>Advance KYC</Text>
      </Button>
    </View>
  );
};

export default StandardKyc;

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
});
