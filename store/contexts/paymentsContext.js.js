import React, { createContext } from "react";
import { initialState } from "../reducers/paymentsReducer";

export const PaymentsContext = createContext(initialState);

export const PaymentsContextsProvider = ({ children, value }) => (
  <PaymentsContext.Provider value={value}>{children}</PaymentsContext.Provider>
);
