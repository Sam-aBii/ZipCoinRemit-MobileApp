import React from "react";
import { View, Text } from "react-native";

import CustomHeader from "../../components/shared/Header";

const AddABeneficiary = ({ navigation }) => {
  return (
    <View>
      <CustomHeader
        showCancelBtn
        onCancel={() => navigation.goBack()}
        iconName="arrow-back"
        onPress={() => navigation.goBack()}
        screenTitle="Add a beneficiary"
      />
      <Text>Add A Beneficiary</Text>
    </View>
  );
};

export default AddABeneficiary;
