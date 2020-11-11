import { handleBenefChange, selectBeneficiary, toggleBenefType } from "../actions/sendFoodActions";
import {
  getBenefCountry,
  getBenefCountryFail,
  setStateCities,
  setStateCitiesFail,
  setCountryStates,
} from "../actions/sendMoneyActions";
import {
  YOU_SEND,
  BENEF_GETS,
  SET_FX_RATE,
  SET_RECV_CURRENCY,
  SET_SEND_CURRENCY,
  INCLUDE_FEE,
  SET_FEE,
  SET_PAYMENT_METHOD,
  SET_PROCESSING_FEE,
  SET_WALLET_PAYMENT_METHOD,
  SET_SEND_MONEY_REASON,
  SET_SEND_MONEY_RELATION,
  SET_SEND_MONEY_PAYMENT_METHOD,
  SELECT_BENEF,
  HANDLE_BENEF_CHANGE,
  TOGGLE_BENEF_TYPE,
  SET_RECEIVING_CURRENCIES,
  SET_BENEF_COUNNTRY,
  SET_BENEF_COUNNTRY_FAIL,
  SET_BENEF_CITIES,
  SET_BENEF_CITIES_FAIL,
  SET_COUNTRY_STATES,
} from "../actionTypes";

const benefState = {}; // TODO: Add required props into this object to make this work fine

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
  walletPaymentMethod: "emailpayment",
  reason: "Family maintanence",
  relation: "Parent",
  sendMoneyPaymentMethod: "Debit/Credit Card",
  receivingCurrencies: { showIcon: true, items: [] },
  benefCountry: {
    iso2: "GHA",
    countryCode: "GH",
    currency: "GHS",
    phoneCode: "233",
    image: "https://www.countryflags.io/gh/flat/64.png",
    label: "GHS - Ghana",
    name: "Ghana",
    value: "ghs-ghana",
  },
  benefCities: [],
  benefStates: [],
  ...benefState,
};

const reducer = (state, action) => {
  switch (action.type) {
    case YOU_SEND:
      return { ...state, youSend: action.payload };
    case BENEF_GETS:
      return { ...state, benefGets: action.payload };
    case SET_SEND_CURRENCY:
      return { ...state, sendingCurrency: action.payload };
    case SET_RECV_CURRENCY:
      return { ...state, receivingCurrency: action.payload };
    case SET_FX_RATE:
      return { ...state, fxRate: action.payload };
    case INCLUDE_FEE:
      return { ...state, includeFee: action.payload };
    case SET_FEE:
      return { ...state, fee: action.payload };
    case SET_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case SET_PROCESSING_FEE:
      return { ...state, processingFee: action.payload };
    case SET_WALLET_PAYMENT_METHOD:
      return { ...state, walletPaymentMethod: action.payload };
    case SET_SEND_MONEY_REASON:
      return { ...state, reason: action.payload };
    case SET_SEND_MONEY_RELATION:
      return { ...state, relation: action.payload };
    case SET_SEND_MONEY_PAYMENT_METHOD:
      return { ...state, sendMoneyPaymentMethod: action.payload.target.value };
    case SELECT_BENEF:
      return selectBeneficiary(state, action);
    case HANDLE_BENEF_CHANGE:
      return handleBenefChange(state, action);
    case TOGGLE_BENEF_TYPE:
      return toggleBenefType(state, action);
    case SET_RECEIVING_CURRENCIES:
      return { ...state, receivingCurrencies: action.payload };
    case SET_BENEF_COUNNTRY:
      return getBenefCountry(state, action);
    case SET_BENEF_COUNNTRY_FAIL:
      return getBenefCountryFail(state, action);
    case SET_COUNTRY_STATES:
      return setCountryStates(state, action);
    case SET_BENEF_CITIES:
      return setStateCities(state, action);
    case SET_BENEF_CITIES_FAIL:
      return setStateCitiesFail(state, action);
    default:
      return state;
  }
};

export { initialState, reducer };
