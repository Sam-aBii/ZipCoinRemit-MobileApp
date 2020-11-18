import { Text } from "native-base";
import React from "react";
import { View } from "react-native";

import NavigationButtons from "./NavigationButtons";

const SendForm = (props) => {
  const { next, saveState } = props;
  const nextStep = () => {
    // Save state for use in other steps
    saveState({});

    // Go to next step
    next();
  };

  return (
    <View>
      <Text>Send Form</Text>
      <NavigationButtons renderBack={false} onPressNext={nextStep} />
    </View>
  );
};

export default SendForm;
