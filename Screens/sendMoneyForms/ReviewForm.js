import React, { useContext } from "react";
import { Content, Text } from "native-base";
import { View, StyleSheet } from "react-native";

import NavigationButtons from "./NavigationButtons";
import globalStyles from "../../styles";
import theme from "../../Theme";
import { SendMoneyContext } from "../../store/contexts/sendMoneyContext";

const { COLORS } = theme;

const SendForm = (props) => {
  const { next, saveState, back } = props;

  const {
    state: {
      youSend,
      benefGets,
      ourFee,
      processingFee,
      includeFee,
      fxRate,
      sendingCurrency,
      receivingCurrency,
      paymentMethod,
    },
  } = useContext(SendMoneyContext);

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
      <View style={{ paddingVertical: 4, paddingHorizontal: 10 }}>
        <Text style={globalStyles.sendMoneyFormTitle}>Review</Text>
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Transaction details</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.detail}>
              <Text style={styles.detailKey}>You send</Text>
              <Text style={styles.detailValue}>{`${youSend} ${sendingCurrency.toUpperCase()}`}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailKey}>{`Fee (${includeFee ? "Included" : "Excluded"})`}</Text>
              <Text style={styles.detailValue}>{`${ourFee} ${sendingCurrency.toUpperCase()}`}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailKey}>{`Processing fee (${includeFee ? "Included" : "Excluded"})`}</Text>
              <Text style={styles.detailValue}>{`${processingFee} ${sendingCurrency.toUpperCase()}`}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailKey}>Total payable</Text>
              <Text style={styles.detailValue}>
                {`${
                  includeFee ? Number(youSend) + Number(ourFee) + Number(processingFee) : youSend
                } ${sendingCurrency.toUpperCase()}`}
              </Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailKey}>Amount will convert</Text>
              <Text style={styles.detailValue}>
                {`${
                  includeFee ? youSend : Number(youSend) - Number(ourFee) + Number(processingFee)
                } ${sendingCurrency.toUpperCase()}`}
              </Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailKey}>Fx conversion rate</Text>
              <Text style={styles.detailValue}>
                {`1 ${sendingCurrency.toUpperCase()} = ${fxRate} ${receivingCurrency.split(" - ")[0].toUpperCase()}`}
              </Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailKey}>Beneficiary gets</Text>
              <Text style={styles.detailValue}>{`${benefGets} ${receivingCurrency.split(" - ")[0].toUpperCase()}`}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailKey}>Payment method</Text>
              <Text style={styles.detailValue}>{paymentMethod}</Text>
            </View>
          </View>
          <View style={{ marginTop: 12, ...styles.detailsSection }}>
            <Text style={styles.sectionTitle}>Beneficiary details</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.detail}>
                <Text style={styles.detailKey}>Name</Text>
                <Text style={styles.detailValue}>Kim</Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.detailKey}>Email</Text>
                <Text style={styles.detailValue}>Kim@kebab.com</Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.detailKey}>Phone</Text>
                <Text style={styles.detailValue}>+263265482648</Text>
              </View>
            </View>
          </View>
        </View>
        <NavigationButtons onPressNext={nextStep} onPressBack={goBack} />
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    color: COLORS.PLACEHOLDER,
    marginBottom: 4,
    fontSize: 18,
  },
  detailsContainer: {
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    paddingVertical: 8,
    ...globalStyles.shadow1,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  detailKey: {
    color: COLORS.DEFAULT,
  },
  detailValue: {
    color: COLORS.DEFAULT,
  },
});

export default SendForm;
