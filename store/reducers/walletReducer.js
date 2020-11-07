import {
  HANDLE_FUND_WALLET_CHANGE,
  SET_FUND_WALLET_PROC_TIME,
  SET_FUND_WALLET_FEE,
  HANDLE_CREDIT_CARD_CHANGE,
  HANDLE_WALLET_TRANSFER_CHANGE,
} from "../actionTypes";

import {
  handleFundWalletChange,
  setFundWalletProcTime,
  setFundWalletFee,
  handleCreditCardChange,
  handleTranfserChange,
} from "../actions/walletActions";

export const initialState = {
  fundSourceWallet: "usd zipcash",
  fundWalletPaymentMethod: "e-mail payment",
  fundAmount: "",
  fundFee: "",
  fundProcessingTime: "",
  cardNumber: "",
  cardExpiry: "",
  cvc: "",
  transferType: "yourself",
  transferSourceWallet: "usd zipcash",
  transferAmount: 0,
  searchUser: "",
  transferDestWallet: "usd zipcash",
  conversionRate: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FUND_WALLET_FEE:
      return setFundWalletFee(state, action);
    case SET_FUND_WALLET_PROC_TIME:
      return setFundWalletProcTime(state, action);
    case HANDLE_FUND_WALLET_CHANGE:
      return handleFundWalletChange(state, action);
    case HANDLE_CREDIT_CARD_CHANGE:
      return handleCreditCardChange(state, action);
    case HANDLE_WALLET_TRANSFER_CHANGE:
      return handleTranfserChange(state, action);
    default:
      return state;
  }
};
