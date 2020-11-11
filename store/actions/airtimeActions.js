export const getCountries = (state, action) => ({ ...state, countries: action.payload });

export const getProviders = (state, action) => ({ ...state, providers: action.payload });

export const getProducts = (state, action) => ({ ...state, products: action.payload });

export const setSendAmount = (state, action) => ({ ...state, sendAmount: action.payload });

export const handleAirtimeChange = (state, action) => {
  const { name, value } = action.payload;
  return { ...state, [name]: value };
};

export const handleAirtimePaymentMethod = (state, action) => {
  const { name, value } = action.payload;
  return { ...state, [name]: value };
};
