import { GET_GLOBAL_COUNTRIES_INFO, GET_USER_LOCATION_INFO, GET_USER_LOCATION_INFO_FAIL } from "../actionTypes";

import { getGlobalCountriesInfo, getUserLocationInfo, getUserLocationInfoFail } from "../actions/globalActions";

export const initialState = { userLocation: {}, error: "", countries: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LOCATION_INFO:
      return getUserLocationInfo(state, action);
    case GET_USER_LOCATION_INFO_FAIL:
      return getUserLocationInfoFail(state, action);
    case GET_GLOBAL_COUNTRIES_INFO:
      return getGlobalCountriesInfo(state, action);
    default:
      return state;
  }
};
