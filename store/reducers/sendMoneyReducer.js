import { HANDLE_SEND_MONEY_CHANGE } from "../actionTypes";

const initialState = {
  youSend: 100,
  sendingCurrency: "cad",
  benefGets: "",
  receivingCurrency: "ghs",
  fxRate: "",
  includeFee: false,
  fee: 4.99,
  paymentMethod: "emailpayment",
  processingFee: 0,
  reason: "Family maintanence",
  relation: "Parent",
};

const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_SEND_MONEY_CHANGE:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};

export { initialState, reducer };
