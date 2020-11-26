import { handleSendMoneyChange, setPaymentMethods } from "../actions/sendMoneyActions";
import { HANDLE_SEND_MONEY_CHANGE, SET_PAYMENT_METHODS } from "../actionTypes";

const initialState = {
  youSend: 100,
  sendingCurrency: "cad",
  includeFee: false,
  fxRate: "",
  benefGets: "",
  receivingCurrency: "GHS - Ghana",
  paymentMethod: "Debit/credit card",
  promoCode: "",
  ourFee: 4.99,
  processingFee: 0,
  reason: "Family maintanence",
  relation: "Parent",
  paymentMethods: ["ZipWallet", "Debit/credit card"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_SEND_MONEY_CHANGE:
      return handleSendMoneyChange(state, action);
    case SET_PAYMENT_METHODS:
      return setPaymentMethods(state, action);
    default:
      return state;
  }
};

export { initialState, reducer };
