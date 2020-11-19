import { View } from "react-native";
import { Text } from "native-base";
import React from "react";

import NavigationButtons from "./NavigationButtons";
// import CustomTextInput from "../../components/shared/TextInput";

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
      {/* <CustomTextInput /> */}
      <Text>Send Form</Text>
      <NavigationButtons renderBack={false} onPressNext={nextStep} />
    </View>
  );
};

export default SendForm;
