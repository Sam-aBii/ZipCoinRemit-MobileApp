export const setFundWalletFee = (state, action) => ({ ...state, fundFee: action.payload });

export const setFundWalletProcTime = (state, action) => ({ ...state, fundProcessingTime: action.payload });

export const handleFundWalletChange = (state, action) => {
  const { name, value } = action.payload;
  return { ...state, [name]: value };
};

export const handleCreditCardChange = (state, action) => {
  const { name, value } = action.payload;
  return { ...state, [name]: value };
};

export const handleTranfserChange = (state, action) => {
  const { name, value } = action.payload;
  return { ...state, [name]: value };
};
