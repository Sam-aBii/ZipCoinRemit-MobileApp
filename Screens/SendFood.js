import React from "react";
import {
  Button,
  Icon,
} from "native-base";

import { View, StyleSheet } from "react-native";

import Typograpghy from "../Theme";
const { COLORS } = Typograpghy;

const SendFoodScreen = ({ navigation }) => {
  return (
    <View style={styles.Header}>
        <Button transparent>
          <Icon name="menu" onPress={() => navigation.openDrawer()} style={styles.DrawerIcon} />
        </Button>


    </View>

  );
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
 
});


