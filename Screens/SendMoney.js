import React from "react";
import AnimatedMultistep from "react-native-animated-multistep";
import { View } from "native-base";

import CustomHeader from "../components/shared/Header";

/* Define the steps  */

import sendMoneyForms from "./sendMoneyForms";

const allSteps = [
  { name: "step 1", component: sendMoneyForms.SendForm },
  { name: "step 2", component: sendMoneyForms.ReceiveForm },
  { name: "step 3", component: sendMoneyForms.ReasonForm },
  { name: "step 4", component: sendMoneyForms.ReviewForm },
  { name: "step 5", component: sendMoneyForms.CheckoutForm },
];

/* Define your class */
const SendMoney = ({ navigation }) => {
  /* define the method to be called when you go on next step */

  const onNext = () => {
    // console.log("Next");
  };

  /* define the method to be called when you go on back step */

  const onBack = () => {
    // console.log("Back");
  };

  /* define the method to be called when the wizard is finished */
  // eslint-disable-next-line no-unused-vars
  const finish = (finalState) => {
    // console.log(finalState);
  };

  /* render MultiStep */
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader screenTitle="Send money" onPress={navigation.openDrawer} />
      <AnimatedMultistep
        steps={allSteps}
        onFinish={finish}
        onBack={onBack}
        onNext={onNext}
        comeInOnNext="fadeInRight"
        OutOnNext="fadeOutLeft"
        comeInOnBack="fadeInLeft"
        OutOnBack="fadeOutRight"
      />
    </View>
  );
};

export default SendMoney;
