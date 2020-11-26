import { pullAll } from "lodash";

const handleSendMoneyChange = (state, action) => {
  const { name, value } = action.payload;
  return { ...state, [name]: value };
};

const setPaymentMethods = (state, action) => {
  const { sendingCurrency } = action.payload;
  const newMethods = ["E-Mail payment", "INTERAC online", "ZipWallet", "Debit/credit card"];
  if (sendingCurrency !== "cad") {
    return { ...state, paymentMethods: pullAll(newMethods, ["INTERAC online", "E-Mail payment"]) };
  }
  return { ...state, paymentMethods: newMethods };
};

export { handleSendMoneyChange, setPaymentMethods };
