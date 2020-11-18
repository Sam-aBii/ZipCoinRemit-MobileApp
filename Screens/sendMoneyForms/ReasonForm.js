import { Text } from "native-base";
import React from "react";
import { View } from "react-native";

import NavigationButtons from "./NavigationButtons";

const SendForm = (props) => {
  const { next, saveState, back } = props;
  const nextStep = () => {
    // Save state for use in other steps
    saveState({});

    // Go to next step
    next();
  };

  const goBack = () => {
    back();
  };

  return (
    <View>
      <Text>Reason Form</Text>
      <NavigationButtons onPressNext={nextStep} onPressBack={goBack} />
    </View>
  );
};

export default SendForm;
