import React, { useContext, useEffect, useCallback } from "react";
import { View, Text, Content, Icon } from "native-base";
import { Alert, Dimensions, StyleSheet } from "react-native";
import { useFormContext } from "react-hook-form";
import Axios from "axios";

import NavigationButtons from "./NavigationButtons";
import CustomTextInput from "../../components/shared/TextInput";
import CustomSelectInput from "../../components/shared/SelectInput";
import CustomCheckbox from "../../components/shared/CustomCheckbox";
import { GlobalContext } from "../../store/contexts/globalContext";
import { SendMoneyContext } from "../../store/contexts/sendMoneyContext";
import { HANDLE_SEND_MONEY_CHANGE } from "../../store/actionTypes";
import globalStyles from "../../styles";
import theme from "../../Theme";
import config from "../../config";

const { SERVER_BASE_URL } = config;

const { COLORS } = theme;
const windowWidth = Dimensions.get("window").width;

const SendForm = (props) => {
  const { next, saveState } = props;

  const {
    state: { countries: globalCountries },
  } = useContext(GlobalContext);

  const {
    state: { fxRate, sendingCurrency, receivingCurrency, inlcudeFee },
    dispatch,
  } = useContext(SendMoneyContext);

  const { control, errors, setValue, getValues } = useFormContext();

  const onChangeHandler = useCallback(
    (name, value) => {
      dispatch({ type: HANDLE_SEND_MONEY_CHANGE, payload: { name, value } });
      setValue(name, value);
    },
    [dispatch, setValue]
  );

  useEffect(() => {
    try {
      const getFxRate = async () => {
        const data = await Axios.get(
          `${SERVER_BASE_URL}/fxRate?sourceCurrency=${sendingCurrency}&quoteCurrency=${receivingCurrency.split(" - ")[0]}`
        );
        onChangeHandler("fxRate", data);
        onChangeHandler("benefGets", sendingCurrency * data);
      };
      getFxRate();
    } catch (e) {
      Alert("Something went wrong.");
    }
  }, [onChangeHandler, sendingCurrency, receivingCurrency]);

  const nextStep = () => {
    // Save state for use in other steps
    saveState(getValues());

    // Go to next step
    next();
  };

  return (
    <Content>
      <View style={{ padding: 4, paddingHorizontal: 20 }}>
        <Text style={globalStyles.sendMoneyFormTitle}>Send</Text>
        <CustomTextInput
          control={control}
          name="youSend"
          label="You send"
          errors={errors}
          requiredMessage="Please enter sending amount"
          setValue={onChangeHandler}
          keyboardType="decimal-pad"
        />
        <CustomSelectInput
          iosHeader="Select a sending currency"
          items={[
            { name: "CAD - Canada", id: "cad" },
            { name: "USD - United States", id: "usd" },
            { name: "GBP - Great Britain", id: "gbp" },
            { name: "EUR - Europe", id: "eur" },
            { name: "ZAR - South Africa", id: "zar" },
          ]}
          control={control}
          errors={errors}
          name="sendingCurrency"
          label="Sending currency"
          selectedValue={sendingCurrency}
          onChange={(value) => onChangeHandler("sendingCurrency", value)}
          requiredMessage="Please select a sending currency"
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: COLORS.inputBorderColor,
          }}
        >
          <CustomCheckbox
            checked={inlcudeFee}
            onPress={() => onChangeHandler("includeFee", !inlcudeFee)}
            lable="Include fee"
            control={control}
            errors={errors}
            name="includeFee"
          />
          <Text style={{ ...globalStyles.textDanger, flexGrow: 0 }}>{`Fx Rate: ${Number(fxRate).toFixed(4)}`}</Text>
        </View>
        <CustomTextInput
          control={control}
          name="benefGets"
          label="Beneficiary gets"
          errors={errors}
          requiredMessage="Receiving amount cannot be less then one"
          setValue={onChangeHandler}
          keyboardType="decimal-pad"
          editable={false}
        />
        <CustomSelectInput
          iosHeader="Select a receiving currency"
          items={globalCountries
            .filter((c) => c.isAcceptable)
            .map((country) => ({
              name: `${country.currency} - ${country.name}`,
              id: `${country.currency} - ${country.name}`,
            }))}
          control={control}
          errors={errors}
          name="receivingCurrency"
          label={globalCountries.length ? "Receiving currency" : "Loading receiving currencies"}
          selectedValue={receivingCurrency}
          onChange={(value) => onChangeHandler("sendingCurrency", value)}
          requiredMessage="Please select a receiving currency"
        />
        <CustomTextInput
          control={control}
          name="promoCode"
          label="Promo code(Optional)"
          errors={errors}
          setValue={onChangeHandler}
        />
      </View>
      <View style={styles.detailsSection}>
        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <View style={styles.detailKey}>
              <Icon style={styles.detailKeyIcon} name="chevrons-right" type="Feather" />
              <Text>Our fee</Text>
            </View>
            <Text style={styles.detailValue}>4.5 CAD</Text>
          </View>
          <View style={styles.detail}>
            <View style={styles.detailKey}>
              <Icon style={styles.detailKeyIcon} name="chevrons-right" type="Feather" />
              <Text>Fee</Text>
            </View>
            <Text style={styles.detailValue}>1.0 CAD</Text>
          </View>
          <View style={styles.detail}>
            <View style={styles.detailKey}>
              <Icon style={styles.detailKeyIcon} name="chevrons-right" type="Feather" />
              <Text>Total fee</Text>
            </View>
            <Text style={styles.detailValue}>5.5 CAD</Text>
          </View>
          <View style={styles.detail}>
            <View style={styles.detailKey}>
              <Icon style={styles.detailKeyIcon} name="chevrons-right" type="Feather" />
              <Text>Amount to be charged</Text>
            </View>
            <Text style={styles.detailValue}>100 CAD</Text>
          </View>
        </View>
      </View>
      <NavigationButtons renderBack={false} onPressNext={nextStep} />
    </Content>
  );
};

const styles = StyleSheet.create({
  detailsSection: {
    backgroundColor: COLORS.DEFAULT,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth,
    paddingVertical: 30,
  },
  detailsContainer: {
    borderRadius: 30,
    backgroundColor: COLORS.WHITE,
    width: windowWidth - 40,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
    ...globalStyles.shadow1,
  },
  detail: {
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: COLORS.inputLabelColor,
    paddingVertical: 16,
  },
  detailKey: {
    flex: 1,
    color: COLORS.inputLabelColor,
    flexDirection: "row",
    alignItems: "center",
  },
  detailKeyIcon: {
    color: COLORS.DEFAULT,
    fontSize: 22,
  },
  detailValue: {
    color: COLORS.DEFAULT,
  },
});

export default SendForm;
