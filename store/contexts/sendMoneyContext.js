import React, { createContext } from "react";
import { initialState } from "../reducers/sendMoneyReducer";

export const SendMoneyContext = createContext(initialState);

export const SendMoneyContextProvider = ({ children, value }) => (
  <SendMoneyContext.Provider value={value}>
    {children}
  </SendMoneyContext.Provider>
);
