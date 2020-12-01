import { LOG_IN, SIGN_OUT } from "../actionTypes";

import { logIn, signOut } from "../actions/authActions";

export const initialState = { isLoggedIn: false };

export const reducer = async (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return logIn(state, action);
    case SIGN_OUT:
      return signOut(state);
    default:
      return state;
  }
};
