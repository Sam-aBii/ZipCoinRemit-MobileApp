import React from "react";
import { Item, Input, Icon } from "native-base";
import { Table, Row, Rows } from "react-native-table-component";

import { View, ScrollView } from "react-native";
import CustomHeader from "../components/shared/Header";

import Typograpghy from "../Theme";

const { COLORS } = Typograpghy;

const CustomerScreen = ({ navigation }) => (
  <View>
    <CustomHeader screenTitle="Customer" onPress={() => navigation.openDrawer()} />
    <Item>
      <Icon name="ios-search" style={{ color: COLORS.SECONDARY }} />
      <Input placeholder="Search" />
      <Icon name="ios-people" style={{ color: COLORS.SECONDARY }} />
    </Item>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ margin: 4, paddingTop: 20 }}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={["Index", "Name", "Email", "Country", "Rem No", "	OS/Browser", "Phone", "IP Address", "Status", "Actions"]}
          textStyle={{ fontWeight: "bold", padding: 10 }}
        />
        <Rows data={[]} textStyle={{ marginLeft: 4 }} />
        <Row data={["No data available"]} textStyle={{ padding: 10 }} />
        <Row data={["No data available"]} textStyle={{ padding: 10 }} />
        <Row data={["No data available"]} textStyle={{ padding: 10 }} />
        <Row data={["No data available"]} textStyle={{ padding: 10 }} />
        <Row data={["No data available"]} textStyle={{ padding: 10 }} />
      </Table>
    </ScrollView>
  </View>
);

export default CustomerScreen;
