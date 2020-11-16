import React, { useState, useEffect } from "react";
import { View } from "native-base";
import PropTypes from "prop-types";
import Axios from "axios";
import { Alert } from "react-native";
import { isEmpty } from "lodash";

import CustomTextInput from "./TextInput";
import CustomPhoneInput from "./PhoneInput";
import CustomPicker from "./SelectInput";
import config from "../../config";

const { SERVER_BASE_URL } = config;

const PaymentReceivingMethods = ({ control, errors, setValue, selectedCountry }) => {
  if (isEmpty(selectedCountry)) return null;

  const [banks, setBanks] = useState([]);
  const [bank, setBank] = useState("");
  const [mobileOperator, setMobileOperator] = useState("");
  const [agentLocation, setAgentLocation] = useState("");
  const [walletType, setWalletType] = useState("");

  useEffect(() => {
    if (selectedCountry.receivingMethods.includes("bank")) {
      try {
        const getBanks = async () => {
          const { data: fetchedBanks } = await Axios.get(`${SERVER_BASE_URL}/banks?country=${selectedCountry.iso3}`);
          setBanks(fetchedBanks);
        };
        getBanks();
      } catch (e) {
        Alert("Something went wrong");
      }
    }
  }, [selectedCountry.iso3]);

  return (
    <View>
      {selectedCountry.receivingMethods.includes("bank") && (
        <View>
          <CustomPicker
            errors={errors}
            requiredMessage="Please select a bank"
            control={control}
            name="bank"
            items={banks}
            iosHeader="Please select a bank"
            label="Select a bank"
            selectedValue={bank}
            onChange={(v) => {
              setBank(v);
              setValue("bank", v);
            }}
          />
          <CustomTextInput
            name="branchName"
            control={control}
            label="Branch name"
            errors={errors}
            setValue={setValue}
            requiredMessage="Branch name is required"
          />
          <CustomTextInput
            name="bankAccountNumber"
            control={control}
            label="Account number"
            errors={errors}
            setValue={setValue}
            requiredMessage="Bank account number is required"
          />
        </View>
      )}
      {selectedCountry.receivingMethods.includes("mobile") ||
        (selectedCountry.receivingMethods.includes("zipCash") && (
          <CustomPicker
            errors={errors}
            requiredMessage="Please select a mobile operator"
            control={control}
            name="mobileOperator"
            items={selectedCountry.mobileOperators.map((op) => ({ name: op, id: op }))}
            iosHeader="Please select a mobile operator"
            label="Select a mobile operator"
            selectedValue={mobileOperator}
            onChange={(v) => {
              setMobileOperator(v);
              setValue("mobileOperator", v);
            }}
          />
        ))}
      {selectedCountry.receivingMethods.includes("agent") && (
        <View>
          <CustomPicker
            errors={errors}
            requiredMessage="Please select an agent"
            control={control}
            name="agent"
            items={[{ name: "Kebab enterprise", id: "kebabEnterprise" }]}
            iosHeader="Please select an agent"
            label="Select an agent"
            selectedValue="kebabEnterprise"
            onChange={setValue}
          />
          <CustomPicker
            errors={errors}
            requiredMessage="Please select an agent location"
            control={control}
            name="agentLocation"
            items={[
              { name: "Newlands", id: "newlands" },
              { name: "Avondale", id: "avondale" },
              { name: "Borrowdale", id: "borrowdale" },
            ]}
            iosHeader="Please select an agent location"
            label="Select an agent location"
            selectedValue={agentLocation}
            onChange={(v) => {
              setAgentLocation(v);
              setValue("agentLocation", v);
            }}
          />
          <CustomTextInput
            name="agentEmail"
            control={control}
            label="Agent email address"
            errors={errors}
            setValue={setValue}
            requiredMessage="Agent email address is required"
          />
          <CustomPhoneInput
            name="agentMobile"
            control={control}
            label="Agent mobile number"
            errors={errors}
            setValue={setValue}
            requiredMessage="Agent mobile number is required"
          />
        </View>
      )}
      {selectedCountry.receivingMethods.includes("zipWallet") && (
        <View>
          <CustomPicker
            errors={errors}
            requiredMessage="Wallet type is required"
            control={control}
            name="walletType"
            items={[
              { name: "ZipCash", id: "zipCash" },
              { name: "CAD", id: "cad" },
              { name: "USD", id: "usd" },
              { name: "GBP", id: "gbp" },
              { name: "EUR", id: "eur" },
              { name: "ZAR", id: "zar" },
            ]}
            iosHeader="Select wallet type"
            label="Select wallet type"
            selectedValue={walletType}
            onChange={(v) => {
              setWalletType(v);
              setValue("walletType", v);
            }}
          />
          <CustomTextInput
            name="walletNumber"
            control={control}
            label="Wallet number"
            errors={errors}
            setValue={setValue}
            requiredMessage="Wallet number is required"
          />
        </View>
      )}
    </View>
  );
};

PaymentReceivingMethods.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  selectedCountry: PropTypes.shape({
    iso2: PropTypes.string.isRequired,
    iso3: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    receivingMethods: PropTypes.arrayOf(PropTypes.string),
    mobileOperators: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default PaymentReceivingMethods;
