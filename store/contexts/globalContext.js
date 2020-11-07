import React, { createContext } from "react";
import { initialState } from "../reducers/globalReducer";

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children, value }) => (
  <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
);
