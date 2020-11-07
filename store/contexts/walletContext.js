import React, { createContext } from "react";
import { initialState } from "../reducers/walletReducer";

export const WalletContext = createContext(initialState);

export const WalletContextProvider = ({ children, value }) => (
  <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
);
