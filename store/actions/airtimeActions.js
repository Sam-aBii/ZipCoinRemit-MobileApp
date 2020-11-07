export const getCountries = (state, action) => {
  return { ...state, countries: action.payload };
};

export const getProviders = (state, action) => {
  return { ...state, providers: action.payload };
};

export const getProducts = (state, action) => {
  return { ...state, products: action.payload };
};

export const setSendAmount = (state, action) => {
  return { ...state, sendAmount: action.payload };
};

export const handleAirtimeChange = (state, action) => {
  const { name, value } = action.payload;
  return { ...state, [name]: value };
};

export const handleAirtimePaymentMethod = (state, action) => {
  const { name, value } = action.payload;
  return { ...state, [name]: value };
};
