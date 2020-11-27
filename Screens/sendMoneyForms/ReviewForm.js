import { Content, Text } from "native-base";
import React from "react";
import { View } from "react-native";

import NavigationButtons from "./NavigationButtons";
import theme from "../../Theme";
import globalStyles from "../../styles";

const { COLORS } = theme;

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
    <Content style={{ backgroundColor: COLORS.DEFAULT, height: "100%" }}>
      <View style={{ paddingVertical: 4, paddingHorizontal: 10 }}>
        <Text style={{ ...globalStyles.sendMoneyFormTitle, backgroundColor: COLORS.WHITE, borderRadius: 8, marginTop: 8 }}>
          Reason
        </Text>
        <Text>Review Form</Text>
        <NavigationButtons onPressNext={nextStep} onPressBack={goBack} />
      </View>
    </Content>
  );
};

export default SendForm;
