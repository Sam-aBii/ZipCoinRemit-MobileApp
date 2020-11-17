import React from "react";
import * as yup from "yup";
import { Text } from "native-base";

import globalStyles from "../styles";

const commonFields = {
  fullname: yup.string().max(20).required("Name is required(Max length: 20)").nullable(true),
  email: yup.string().email().required("A valid email is required").nullable(true),
  country: yup.string().required("Please select a country").nullable(true),
  city: yup.string().max(64).required("Please select a city").nullable(true),
  address: yup.string().required("Please enter address").nullable(true),
  zip: yup.string().max(20).required("Please enter a zip code").nullable(true),
};

export const basicFormSchema = yup.object().shape({
  ...commonFields,
  birthDate: yup.string().required("Must provide a birth date"),
  gender: yup.string().required("Please select a gender"),
  comment: yup.string().notRequired(),
  isInfoValid: yup.boolean().required("Please check this box to continue"),
});

export const standardFormSchema = yup.object().shape({
  ...commonFields,
  birthDate: yup.string().required("Must provide a birth date"),
  gender: yup.string().required("Please select a gender"),
  comment: yup.string().notRequired(),
  docType: yup.string().required("Please select a document type"),
  docNumber: yup.string().required("A document number should be provided"),
  issueDate: yup.string().required("Please enter issuence date of the document"),
  expDate: yup.string().required("Please enter valid expiry date of the document"),
  docFrontPic: yup.string().required("Please select a photo of frontside of the document"),
  docBackPic: yup.string().required("Please select a photo of backside of the document"),
  isInfoValid: yup.boolean().required("Please check this box to continue"),
});

export const beneficiarySchema = yup.object().shape({
  ...commonFields,
  state: yup.string().max(64).required("Please select a state").nullable(),
  mobile: yup.string().max(64).required("Mobile number is required").nullable(),
  // isInfoValid: yup.boolean().required("Please check this box to continue"),
});

export const bankSchema = yup.object().shape({
  bank: yup.string().max(64).required("Please select a bank").nullable(),
  branchName: yup.string().max(64).required("Branch name is required").nullable(),
  bankAccountNumber: yup.string().max(64).required("Bank account number is required").nullable(),
});

export const mobileSchema = yup.object().shape({
  mobileOperator: yup.string().max(64).required("Please select a mobile operator").nullable(),
});

export const agentSchema = yup.object().shape({
  agent: yup.string().max(32).required("Please select an agent").nullable(),
  agentLocation: yup.string().max(64).required("Please select agent location").nullable(),
  agentEmail: yup.string().email("Email address is invalid").required("Agent email is required").nullable(),
  agentMobile: yup.string().max(64).required("Mobile number is required").nullable(),
});

export const walletSchema = yup.object().shape({
  walletType: yup.string().max(16).required("Please select a wallet").nullable(),
  walletNumber: yup.string().max(64).required("Wallet number is required").nullable(),
});

export const updateCountryInfoSchema = yup.object().shape(
  {
    fxMargin: yup.string().required(),
    isAcceptable: yup.boolean().when(["bank", "agent", "mobile", "zipCash", "zipWallet"], {
      is: (bank, agent, mobile, zipCash, zipWallet) => bank || agent || mobile || zipCash || zipWallet,
      then: yup.boolean().required("Must be able to receive money to have any payment receiving method"),
    }),
    bank: yup.boolean(),
    agent: yup.boolean(),
    mobile: yup.boolean(),
    zipCash: yup.boolean(),
    zipWallet: yup.boolean(),
  },
  ["bank", "agent", "mobile", "zipCash", "zipWallet"]
);

export const updateCurrencyInfoSchema = yup.object().shape({
  fxMargin: yup.string().required(),
});

export const errorRenderer = (errors, name) =>
  errors[name] && <Text style={globalStyles.textDanger}>{errors[name].message}</Text>;
