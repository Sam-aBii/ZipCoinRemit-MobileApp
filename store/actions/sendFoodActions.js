import _ from "lodash";

const setLocalStorageItem = (key, value) => {
  // TODO: Make this function work with react native async storage
  return { key, value };
};

export const addHamperToCart = (state, action) => {
  const hamperIndex = _.findIndex(state.cart, (item) => item.hamperMeta.name === action.payload.hamperMeta.name);
  const newCart = [
    hamperIndex !== -1
      ? {
          ...state.cart[hamperIndex],
          qty: state.cart[hamperIndex].qty + 1,
        }
      : action.payload,
    ...state.cart.filter((h) => h.hamperMeta.name !== action.payload.hamperMeta.name),
  ];
  setLocalStorageItem("cart", newCart);
  return { ...state, cart: newCart };
};

export const handleAddToCheckout = (state, action) => {
  const newCart = state.cart.map((hamper) =>
    hamper.hamperMeta.name === action.payload.hamperName
      ? {
          ...hamper,
          addToCheckout: action.payload.target.checked,
        }
      : hamper
  );
  setLocalStorageItem("cart", newCart);
  return { ...state, cart: newCart };
};

export const changeHamperQty = (state, action) => {
  const hamper = state.cart.filter((h) => h.hamperMeta.name === action.payload.hamperMeta.name);
  const index = state.cart.findIndex(({ hamperMeta: { name } }) => name === hamper[0].hamperMeta.name);
  if (index >= 0) {
    hamper[0].qty = action.payload.target.value;
    const newCart = state.cart;
    // eslint-disable-next-line
    newCart[index] = hamper[0];
    setLocalStorageItem("cart", newCart);
    return { ...state, cart: newCart };
  }
  return { ...state };
};

export const deleteCartHamper = (state, action) => {
  const newCart = state.cart.filter((h) => h.hamperMeta.name !== action.payload.hamperMeta.name);
  setLocalStorageItem("cart", newCart);
  return { ...state, cart: newCart };
};

export const selectBeneficiary = (state, action) => {
  const { availableBenefs } = state;
  const selectedBenef = availableBenefs.filter((benef) => benef.name === action.payload.target.value)[0];
  return { ...state, selectedBenef };
};

export const handleBenefChange = (state, action) => {
  const { name, value } = action.payload.target;
  return { ...state, newBenef: { ...state.newBenef, [name]: value } };
};

export const toggleBenefType = (state, action) => ({ ...state, benefType: action.payload });

export const setFoodPaymentMethod = (state, action) => ({ ...state, foodPaymentMethod: action.payload });

export const setHamperAmountInCAD = (state, action) => ({ ...state, hamperAmountInCAD: action.payload });

export const setZWCities = (state, action) => ({ ...state, zwCities: action.payload });
