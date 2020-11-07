import {
  handleBenefChange,
  selectBeneficiary,
  toggleBenefType,
} from "./sendFoodActions";

export const getBenefCountry = (state, action) => ({
  ...state,
  benefCountry: action.payload,
});

export const getBenefCountryFail = (state, action) => ({
  ...state,
  error: action.payload,
});

export const setCountryStates = (state, action) => ({
  ...state,
  benefStates: action.payload,
});

export const setStateCities = (state, action) => ({
  ...state,
  benefCities: action.payload,
});

export const setStateCitiesFail = (state, action) => ({
  ...state,
  error: action.payload,
});

export { handleBenefChange, selectBeneficiary, toggleBenefType };
