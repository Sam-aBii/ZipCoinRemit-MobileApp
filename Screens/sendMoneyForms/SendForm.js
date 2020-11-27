import React, { useContext, useEffect, useCallback } from "react";
import { View, Text, Content, Icon } from "native-base";
import { Alert, StyleSheet } from "react-native";
import { useFormContext } from "react-hook-form";
import Axios from "axios";

import NavigationButtons from "./NavigationButtons";
import CustomTextInput from "../../components/shared/TextInput";
import CustomSelectInput from "../../components/shared/SelectInput";
import CustomCheckbox from "../../components/shared/CustomCheckbox";
import { GlobalContext } from "../../store/contexts/globalContext";
import { SendMoneyContext } from "../../store/contexts/sendMoneyContext";
import { HANDLE_SEND_MONEY_CHANGE, SET_PAYMENT_METHODS } from "../../store/actionTypes";
import globalStyles from "../../styles";
import theme from "../../Theme";
import config from "../../config";

const { SERVER_BASE_URL } = config;

const { COLORS } = theme;

const SendForm = (props) => {
  const { next, saveState } = props;

  const {
    state: { countries: globalCountries },
  } = useContext(GlobalContext);

  const {
    state: {
      fxRate,
      sendingCurrency,
      receivingCurrency,
      includeFee,
      youSend,
      paymentMethod,
      paymentMethods,
      ourFee,
      processingFee,
      promoCode,
    },
    dispatch,
  } = useContext(SendMoneyContext);

  const { control, errors, setValue, getValues } = useFormContext();

  useEffect(() => {
    dispatch({ type: SET_PAYMENT_METHODS, payload: { sendingCurrency } });
  }, [sendingCurrency, dispatch]);

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
        const { data } = await Axios.get(
          `${SERVER_BASE_URL}/fxRate?sourceCurrency=${sendingCurrency}&quoteCurrency=${receivingCurrency.split(" - ")[0]}`
        );
        onChangeHandler("fxRate", data);
        const recValue = includeFee ? youSend * data + Number(ourFee) + Number(processingFee) : youSend * data;
        onChangeHandler("benefGets", recValue.toFixed(2).toString());
      };
      getFxRate();
    } catch (e) {
      Alert.alert("Error", "Something went wrong", [{ text: "OK" }], { cancelable: false });
    }
  }, [onChangeHandler, sendingCurrency, receivingCurrency, youSend, includeFee, ourFee, processingFee]);

  useEffect(() => {
    let fee;
    switch (sendingCurrency) {
      case "zar":
        if (youSend > 0 && youSend <= 50) {
          fee = 20;
          break;
        } else if (youSend > 50 && youSend <= 7500) {
          fee = 80;
          break;
        } else {
          fee = youSend * (1.5 / 100);
          break;
        }
      default:
        if (youSend > 0 && youSend <= 50) {
          fee = 0;
          break;
        } else if (youSend > 50 && youSend <= 7500) {
          fee = 4.99;
          break;
        } else {
          fee = youSend * (1 / 100);
          break;
        }
    }
    onChangeHandler("ourFee", fee.toFixed(1));
  }, [sendingCurrency, onChangeHandler, youSend]);

  useEffect(() => {
    let procFee;
    switch (paymentMethod) {
      case "E-Mail payment":
        if (youSend > 0 && youSend < 799) {
          procFee = 0;
          break;
        } else {
          procFee = 1;
          break;
        }
      case "INTERAC online":
        if (youSend > 0 && youSend < 799) {
          procFee = 0;
          break;
        } else {
          procFee = 1;
          break;
        }
      case "Debit/credit card":
        procFee = Number(youSend) * 0.045;
        break;
      default:
        procFee = 0;
    }
    onChangeHandler("processingFee", procFee.toFixed(1));
  }, [paymentMethod, onChangeHandler, youSend]);

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
          value={youSend.toString()}
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
        <View style={styles.fxRateContainer}>
          <CustomCheckbox
            checked={includeFee}
            onPress={() => onChangeHandler("includeFee", !includeFee)}
            label="Include fee"
            control={control}
            errors={errors}
            name="includeFee"
          />
          <Text style={globalStyles.textDanger}>{`Fx Rate: ${Number(fxRate).toFixed(4)}`}</Text>
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
          onChange={(value) => onChangeHandler("receivingCurrency", value)}
          requiredMessage="Please select a receiving currency"
        />
        <CustomSelectInput
          iosHeader="Select a payment method"
          items={paymentMethods.map((method) => ({ name: method, id: method }))}
          control={control}
          errors={errors}
          name="paymentMethod"
          label="Payment method"
          selectedValue={paymentMethod}
          onChange={(value) => onChangeHandler("paymentMethod", value)}
          requiredMessage="Please select a payment method"
        />
        <CustomTextInput
          control={control}
          name="promoCode"
          label="Promo code(Optional)"
          errors={errors}
          setValue={onChangeHandler}
          value={promoCode}
        />
      </View>
      <View style={styles.detailsSection}>
        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <View style={styles.detailKey}>
              <Icon style={styles.detailKeyIcon} name="chevrons-right" type="Feather" />
              <Text>Our fee</Text>
            </View>
            <Text style={styles.detailValue}>{`${ourFee} ${sendingCurrency.toUpperCase()}`}</Text>
          </View>
          <View style={styles.detail}>
            <View style={styles.detailKey}>
              <Icon style={styles.detailKeyIcon} name="chevrons-right" type="Feather" />
              <Text>Fee</Text>
            </View>
            <Text style={styles.detailValue}>{`${processingFee} ${sendingCurrency.toUpperCase()}`}</Text>
          </View>
          <View style={styles.detail}>
            <View style={styles.detailKey}>
              <Icon style={styles.detailKeyIcon} name="chevrons-right" type="Feather" />
              <Text>Total fee</Text>
            </View>
            <Text style={styles.detailValue}>
              {`${Number(ourFee) + Number(processingFee)} ${sendingCurrency.toUpperCase()}`}
            </Text>
          </View>
          <View style={styles.detail}>
            <View style={styles.detailKey}>
              <Icon style={styles.detailKeyIcon} name="chevrons-right" type="Feather" />
              <Text>Amount to be charged</Text>
            </View>
            <Text style={styles.detailValue}>
              {`${
                includeFee ? youSend : Number(youSend) + Number(ourFee) + Number(processingFee)
              } ${sendingCurrency.toUpperCase()}`}
            </Text>
          </View>
        </View>
      </View>
      <NavigationButtons renderBack={false} onPressNext={nextStep} />
    </Content>
  );
};

const styles = StyleSheet.create({
  fxRateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inputBorderColor,
    marginBottom: 4,
  },
  detailsSection: {
    backgroundColor: COLORS.DEFAULT,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  detailsContainer: {
    borderRadius: 30,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
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
