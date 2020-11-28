import React, { useMemo, useReducer } from "react";
import AnimatedMultistep from "react-native-animated-multistep";
import { useForm, FormProvider } from "react-hook-form";
import { View } from "native-base";

import CustomHeader from "../components/shared/Header";
import useYupValidationResolver from "../utils/useYupValidationResolver";
import { sendMoneySchema } from "../utils/yupFormSchemas";
import sendMoneyForms from "./sendMoneyForms";
import { reducer, initialState } from "../store/reducers/sendMoneyReducer";
import { SendMoneyContextProvider } from "../store/contexts/sendMoneyContext";

const { SendForm, ReceiveForm, ReasonForm, ReviewForm, CheckoutForm } = sendMoneyForms;

/* Define your class */
const SendMoney = ({ navigation, route }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  state.navigation = navigation;

  const validationSchema = useMemo(() => sendMoneySchema, []);

  const methods = useForm({
    reValidateMode: "onChange",
    resolver: useYupValidationResolver(validationSchema),
    mode: "all",
    defaultValues: {
      youSend: "100",
      sendingCurrency: "cad",
      benefGets: null,
      receivingCurrency: "GHS - Ghana",
      includeFee: false,
      promoCode: null,
    },
  });

  const allSteps = [
    { name: "send", component: SendForm },
    { name: "receive", component: ReceiveForm },
    { name: "reason", component: ReasonForm },
    { name: "review", component: ReviewForm },
    { name: "checkout", component: CheckoutForm },
  ];
  // scroll to the step if coming from another screen. E.g in second step we may be routed to add beneficiary screen to come back direct to second step from add beneficiary screen this function will do the job.
  route?.params?.scrollToPreviouslyRenderedStep?.();

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
      <SendMoneyContextProvider value={{ state, dispatch }}>
        <FormProvider {...methods}>
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
        </FormProvider>
      </SendMoneyContextProvider>
    </View>
  );
};

export default SendMoney;
