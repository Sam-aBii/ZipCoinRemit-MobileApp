import React from "react";
import { Item, Input, Button } from "native-base";
import { Table, Row, Rows } from "react-native-table-component";

import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomHeader from "../components/shared/Header";
import globalStyles from "../styles";

import Typograpghy from "../Theme";

const { COLORS } = Typograpghy;

const TranscationsScreen = ({ navigation }) => (
  <View>
    <CustomHeader screenTitle="Transcations" onPress={() => navigation.openDrawer()} />
    <View style={styles.TranscationHeader}>
      <Text style={styles.TranscationHeaderText}>All Transcations </Text>
    </View>
    <Item regular style={styles.Item}>
      <Input placeholder="Date Range" style={styles.Input} />
      <Input placeholder="Currency" style={styles.Input} />
      <Input placeholder="Type" />
    </Item>
    <Button style={{ ...globalStyles.btnPrimary, marginLeft: "auto", margin: 8 }}>
      <Text style={globalStyles.btnPrimaryText}>clear filter</Text>
    </Button>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Table borderStyle={{ borderWidth: 1 }} style={{ margin: 4 }}>
        <Row
          data={["Date", "TRANSID", "Amount", "Payment Method", "Transaction Type", "	Status", "	Payment Action"]}
          textStyle={{ fontWeight: "bold", padding: 10 }}
        />
        <Rows data={[]} textStyle={{ marginLeft: 4 }} />
        <Row data={["No data available"]} textStyle={{ padding: 10 }} />
        <Row data={["No data available"]} textStyle={{ padding: 10 }} />
        <Row data={["No data available"]} textStyle={{ padding: 10 }} />
        <Row data={["No data available"]} textStyle={{ padding: 10 }} />
      </Table>
    </ScrollView>
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
