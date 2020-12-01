import React, { createContext } from "react";
import { initialState } from "../reducers/authReducer";

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children, value }) => (
  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
);
