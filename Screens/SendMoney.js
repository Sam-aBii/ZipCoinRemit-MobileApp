import React, { useMemo } from "react";
import AnimatedMultistep from "react-native-animated-multistep";
import { useForm } from "react-hook-form";
import { View } from "native-base";

import CustomHeader from "../components/shared/Header";
import useYupValidationResolver from "../utils/useYupValidationResolver";
import { sendMoneySchema } from "../utils/yupFormSchemas";
import sendMoneyForms from "./sendMoneyForms";

const { SendForm, ReceiveForm, ReasonForm, ReviewForm, CheckoutForm } = sendMoneyForms;

/* Define your class */
const SendMoney = ({ navigation }) => {
  const validationSchema = useMemo(() => sendMoneySchema, []);

  const useFormParams = useForm({
    reValidateMode: "onChange",
    resolver: useYupValidationResolver(validationSchema),
  });

  const allSteps = [
    { name: "send", component: (props) => <SendForm useFormParams={useFormParams} {...props} /> },
    { name: "receive", component: (props) => <ReceiveForm useFormParams={useFormParams} {...props} /> },
    { name: "reason", component: (props) => <ReasonForm useFormParams={useFormParams} {...props} /> },
    { name: "review", component: (props) => <ReviewForm useFormParams={useFormParams} {...props} /> },
    { name: "checkout", component: (props) => <CheckoutForm useFormParams={useFormParams} {...props} /> },
  ];

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
