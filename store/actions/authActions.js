import AsyncStorage from "@react-native-async-storage/async-storage";

export const logIn = async (state, action) => {
  await AsyncStorage.setItem("tokens", JSON.stringify(action.payload.tokens));
  return { ...state, isLoggedIn: true };
};

export const signOut = async (state) => {
  await AsyncStorage.removeItem("tokens");
  return { ...state, isLoggedIn: false };
};
