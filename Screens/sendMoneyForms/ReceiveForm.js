import React, { useContext, useCallback } from "react";
import { Button, Content, Text } from "native-base";
import { useFormContext } from "react-hook-form";
import { View } from "react-native";

import NavigationButtons from "./NavigationButtons";
import globalStyles from "../../styles";
import CustomSelectInput from "../../components/shared/SelectInput";
import { SendMoneyContext } from "../../store/contexts/sendMoneyContext";
import { HANDLE_SEND_MONEY_CHANGE } from "../../store/actionTypes";
import theme from "../../Theme";

const SendForm = (props) => {
  const { next, saveState, back, getCurrentStep } = props;
  const {
    state: { beneficiary, navigation },
    dispatch,
  } = useContext(SendMoneyContext);

  const { control, errors, setValue } = useFormContext();

  const onChangeHandler = useCallback(
    (name, value) => {
      dispatch({ type: HANDLE_SEND_MONEY_CHANGE, payload: { name, value } });
      setValue(name, value);
    },
    [dispatch, setValue]
  );

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
    <Content>
      <View style={{ paddingVertical: 4, paddingHorizontal: 20 }}>
        <Text style={globalStyles.sendMoneyFormTitle}>Receive</Text>
        <CustomSelectInput
          iosHeader="Select a receiving currency"
          items={[
            { name: "Benef 1", id: "benef1" },
            { name: "Benef 2", id: "benef2" },
          ]}
          control={control}
          errors={errors}
          name="receivingCurrency"
          label="Select a beneficiary"
          selectedValue={beneficiary}
          onChange={(value) => onChangeHandler("receivingCurrency", value)}
          requiredMessage="Please select a receiving currency"
        />
        <Text style={{ fontSize: 32, textAlign: "center", color: theme.COLORS.DEFAULT }}>OR</Text>
        <Button
          block
          style={{ ...globalStyles.btnPrimary }}
          onPress={
            () =>
              navigation.navigate("BeneficiarieScreen", {
                screen: "addABeneficiary",
                params: {
                  onAddCallback: () =>
                    navigation.navigate("Send Money", {
                      params: {
                        scrollToPreviouslyRenderedStep: () => {
                          while (getCurrentStep() <= 2) {
                            nextStep();
                          }
                        },
                      },
                    }),
                },
              })
            // eslint-disable-next-line
          }
        >
          <Text style={globalStyles.btnPrimaryText}>Add a new beneficiary</Text>
        </Button>
        <NavigationButtons onPressNext={nextStep} onPressBack={goBack} />
      </View>
    </Content>
  );
};

export default SendForm;
