import { Text } from "native-base";
import React from "react";
import { View } from "react-native";

import NavigationButtons from "./NavigationButtons";

const SendForm = (props) => {
  const { back } = props;

  const goBack = () => {
    back();
  };

  return (
    <View>
      <Text>Checkout Form</Text>
      <NavigationButtons onPressBack={goBack} renderNext={false} />
    </View>
  );
};

export default SendForm;
