export const getUserLocationInfo = (state, action) => ({
  ...state,
  userLocation: action.payload,
});

export const getUserLocationInfoFail = (state, action) => ({
  ...state,
  error: action.payload,
});

export const getGlobalCountriesInfo = (state, action) => ({
  ...state,
  countries: action.payload,
});
