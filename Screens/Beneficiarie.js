import React from "react";
import { Button } from "native-base";
import { Table, Row, Rows } from "react-native-table-component";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import globalStyles from "../styles";
import AddABeneficiary from "./Beneficiaries/AddABeneficiary";
import CustomHeader from "../components/shared/Header";

const BeneficiaryStack = createStackNavigator();

const BeneficiarieScreen = ({ navigation }) => (
  <View>
    <CustomHeader screenTitle="Beneficiaires" onPress={() => navigation.openDrawer()} />
    <Table borderStyle={{ borderWidth: 1 }} style={{ margin: 4 }}>
      <Row data={["Date", "Name", "Country", "Mobile", "Actions"]} textStyle={{ fontWeight: "bold", padding: 4 }} />
      <Rows data={[]} textStyle={{ marginLeft: 4 }} />
    </Table>
    <Button
      style={{ ...globalStyles.btnPrimary, marginLeft: "auto", margin: 4 }}
      onPress={() => navigation.navigate("addABeneficiary")}
    >
      <Text style={globalStyles.btnPrimaryText}>Add a beneficiary</Text>
    </Button>
  </View>
);

const BeneficiaryStackNavigator = () => (
  <BeneficiaryStack.Navigator headerMode="none">
    <BeneficiaryStack.Screen name="beneficiaries" component={BeneficiarieScreen} />
    <BeneficiaryStack.Screen name="addABeneficiary" component={AddABeneficiary} />
  </BeneficiaryStack.Navigator>
);

export default BeneficiaryStackNavigator;
