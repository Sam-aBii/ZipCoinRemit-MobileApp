import {
  GET_AIRTIME_COUNTRIES,
  GET_AIRTIME_PROVIDERS,
  GET_AIRTIME_PRODUCTS,
  SET_AIRTIME_SEND_AMOUNT,
  HANDLE_AIRTIME_CHANGE,
  HANDLE_AIRTIME_PAYMENT_METHOD,
} from "../actionTypes";
import {
  getCountries,
  getProviders,
  getProducts,
  setSendAmount,
  handleAirtimeChange,
  handleAirtimePaymentMethod,
} from "../actions/airtimeActions";

export const initialState = {
  countries: [],
  providers: [],
  products: [],
  sendAmount: 0,
  bundles: [],
  bundleDisplayText: "",
  selectedBundle: {},
  selectedCountry: {},
  phone: "",
  getCarriers: false,
  filter: "",
  provider: {},
  loading: false,
  priceEstimate: {},
  toggleContents: "Select a country",
  transactionFee: 0,
  paymentMethod: "debit/credit card",
  fee: 1.5,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AIRTIME_COUNTRIES:
      return getCountries(state, action);
    case GET_AIRTIME_PROVIDERS:
      return getProviders(state, action);
    case GET_AIRTIME_PRODUCTS:
      return getProducts(state, action);
    case SET_AIRTIME_SEND_AMOUNT:
      return setSendAmount(state, action);
    case HANDLE_AIRTIME_CHANGE:
      return handleAirtimeChange(state, action);
    case HANDLE_AIRTIME_PAYMENT_METHOD:
      return handleAirtimePaymentMethod(state, action);
    default:
      return state;
  }
};
