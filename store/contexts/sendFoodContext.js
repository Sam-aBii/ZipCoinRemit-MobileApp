import React, { createContext } from "react";
import { initialState } from "../reducers/sendFoodReducer";

export const SendFoodContext = createContext(initialState);

export const SendFoodContextProvider = ({ children, value }) => (
  <SendFoodContext.Provider value={value}>{children}</SendFoodContext.Provider>
);
