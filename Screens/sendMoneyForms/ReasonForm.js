import React, { useContext, useCallback } from "react";
import { Content, Text } from "native-base";
import { useFormContext } from "react-hook-form";
import { View } from "react-native";

import NavigationButtons from "./NavigationButtons";
import globalStyles from "../../styles";
import CustomSelectInput from "../../components/shared/SelectInput";
import { SendMoneyContext } from "../../store/contexts/sendMoneyContext";
import { HANDLE_SEND_MONEY_CHANGE } from "../../store/actionTypes";
import { relations, reasons } from "../../utils/sendMoney";

const SendForm = (props) => {
  const { next, saveState, back } = props;
  const {
    state: { reason, relation },
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
    saveState({ reason, relation });

    // Go to next step
    next();
  };

  const goBack = () => {
    back();
  };

  return (
    <Content>
      <View style={{ paddingVertical: 4, paddingHorizontal: 20 }}>
        <Text style={globalStyles.sendMoneyFormTitle}>Reason</Text>
        <CustomSelectInput
          iosHeader="Select a reason for sending money"
          items={reasons}
          control={control}
          errors={errors}
          name="reason"
          label="Select a reason for sending money"
          selectedValue={reason}
          onChange={(value) => onChangeHandler("reason", value)}
          requiredMessage="Please select a reason"
        />
        <CustomSelectInput
          iosHeader="Select a relation with the beneficiary"
          items={relations}
          control={control}
          errors={errors}
          name="relation"
          label="Select a relation with beneficiary"
          selectedValue={relation}
          onChange={(value) => onChangeHandler("relation", value)}
          requiredMessage="Please select a relation"
        />

        <NavigationButtons onPressNext={nextStep} onPressBack={goBack} />
      </View>
    </Content>
  );
};

export default SendForm;
