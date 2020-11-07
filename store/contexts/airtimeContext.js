import React, { createContext } from "react";
import { initialState } from "../reducers/airtimeReducer";

export const AirtimeContext = createContext(initialState);

export const AirtimeContextProvider = ({ children, value }) => (
  <AirtimeContext.Provider value={value}>{children}</AirtimeContext.Provider>
);
