import {
  ADD_TO_CART,
  HANDLE_ADD_TO_CHECKOUT,
  SET_QUANTITY,
  DELETE_CART_HAMPER,
  SELECT_BENEF,
  HANDLE_BENEF_CHANGE,
  TOGGLE_BENEF_TYPE,
  SET_FOOD_PAYMENT_METHOD,
  SET_HAMPER_AMOUNT_IN_CAD,
  SET_ZW_CITIES,
} from "../actionTypes";

import {
  addHamperToCart,
  handleAddToCheckout,
  changeHamperQty,
  deleteCartHamper,
  selectBeneficiary,
  handleBenefChange,
  toggleBenefType,
  setFoodPaymentMethod,
  setHamperAmountInCAD,
  setZWCities,
} from "../actions/sendFoodActions";

const benefState = {}; // TODO: Add properties into this object to work properly

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  foodPaymentMethod: {
    name: "Email payment",
    fee: 1,
  },
  ...benefState,
  benefCountry: { country_code: "zw" },
  agent: "kim-kebab",
  agentLoc: "newlands",
  agentPhone: "+263343848168761",
  newBenef: {
    ...benefState.newBenef,
    agent: "",
    agentLoc: "",
    agentPhone: "",
  },
  hamperAmountInCAD: 0,
  zwCities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addHamperToCart(state, action);

    case HANDLE_ADD_TO_CHECKOUT:
      return handleAddToCheckout(state, action);

    case SET_QUANTITY:
      return changeHamperQty(state, action);

    case DELETE_CART_HAMPER:
      return deleteCartHamper(state, action);

    case SELECT_BENEF:
      return selectBeneficiary(state, action);

    case HANDLE_BENEF_CHANGE:
      return handleBenefChange(state, action);

    case TOGGLE_BENEF_TYPE:
      return toggleBenefType(state, action);

    case SET_FOOD_PAYMENT_METHOD:
      return setFoodPaymentMethod(state, action);

    case SET_HAMPER_AMOUNT_IN_CAD:
      return setHamperAmountInCAD(state, action);

    case SET_ZW_CITIES:
      return setZWCities(state, action);

    default:
      return state;
  }
};

export { initialState, reducer };
