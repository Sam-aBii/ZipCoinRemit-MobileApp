import React from "react";
import { Button, Icon, Item, Input } from "native-base";

import { View, StyleSheet, Text, StatusBar } from "react-native";

import Typograpghy from "../Theme";

const { COLORS } = Typograpghy;

const TranscationsScreen = ({ navigation }) => (
  <View>
    <View style={styles.Header}>
      <StatusBar backgroundColor={COLORS.SECONDARY} barStyle="light-content" />
      <Button transparent>
        <Icon name="menu" onPress={() => navigation.openDrawer()} style={styles.DrawerIcon} />
        <Text style={styles.HeaderText}>Transcations</Text>
      </Button>
    </View>
    <View style={styles.TranscationHeader}>
      <Text style={styles.TranscationHeaderText}>All Transcations </Text>
    </View>
    <Item regular style={styles.Item}>
      <Input placeholder="Date Range" style={styles.Input} />
      <Input placeholder="Currency" style={styles.Input} />
      <Input placeholder="Type" />
    </Item>
  </View>
);

export default TranscationsScreen;

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
  TranscationHeader: {
    padding: 10,
    margin: 3,
  },
  TranscationHeaderText: {
    fontSize: 20,
    color: COLORS.DEFAULT,
  },
  Item: {
    borderColor: COLORS.DEFAULT,
    borderRadius: 8,
  },
  Input: {
    borderRightWidth: 1,
    borderRightColor: COLORS.DEFAULT,
  },
});
