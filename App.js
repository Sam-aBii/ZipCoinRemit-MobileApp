/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { ActivityIndicator } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LogBox, View, Alert } from "react-native";
import axios from "axios";

import MainTabScreen from "./Navigators/MainTabScreen";
import DrawerContent from "./Navigators/DrawerContent";
import TranscationsScreen from "./Screens/Transcations";
import CustomerScreen from "./Screens/Customer";
import PaymentScreen from "./Screens/Payment";
import BeneficiarieScreen from "./Screens/Beneficiarie";
import ReferAndEarnScreen from "./Screens/ReferAndEarn";
import KycStackScreen from "./Screens/KycProcess";
import { GlobalContextProvider } from "./store/contexts/globalContext";
import { AuthContextProvider } from "./store/contexts/authContext";
import { reducer as globalReducer, initialState as globalInitialState } from "./store/reducers/globalReducer";
import { reducer as authReducer, initialState as authInitialState } from "./store/reducers/authReducer";
import { GET_GLOBAL_COUNTRIES_INFO } from "./store/actionTypes";
import RootStackScreen from "./Navigators/RootStackScreen";
import config from "./config";
import useAsyncReducer from "./utils/useAsyncReducer";

const { SERVER_BASE_URL } = config;

const Drawer = createDrawerNavigator();
const { useReducer, useEffect, useState } = React;

function App() {
  const [loadingAssets, setLoadingAssets] = useState(true);

  const [authState, authDispatch] = useAsyncReducer(authReducer, authInitialState);

  const [globalState, globalDispatch] = useReducer(globalReducer, globalInitialState);

  LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
        Roboto_medium: require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
      });
      setLoadingAssets(false);
    };
    loadFonts();
  }, []);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data: countries } = await axios.get(`${SERVER_BASE_URL}/countries`);
        globalDispatch({
          type: GET_GLOBAL_COUNTRIES_INFO,
          payload: countries,
        });
      };
      fetchData();
    } catch (e) {
      Alert.alert("Error", "Something went wrong", [{ text: "OK" }], { cancelable: true });
    }
  }, []);

  if (loadingAssets)
    return (
      <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="#dba84e" size="large" />
      </View>
    );

  return (
    <NavigationContainer>
      <AuthContextProvider value={{ state: authState, dispatch: authDispatch }}>
        <GlobalContextProvider value={{ state: globalState, dispatch: globalDispatch }}>
          <Drawer.Navigator
            screenOptions={{ header: (props) => <View {...props} headerShown={false} /> }}
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            {authState.isLoggedIn ? (
              <>
                <Drawer.Screen name="Dashboard" component={MainTabScreen} />
                <Drawer.Screen name="KycProcessScreen" component={KycStackScreen} />
                <Drawer.Screen name="TranscationsScreen" component={TranscationsScreen} />
                <Drawer.Screen name="CustomerScreen" component={CustomerScreen} />
                <Drawer.Screen name="PaymentScreen" component={PaymentScreen} />
                <Drawer.Screen name="BeneficiarieScreen" component={BeneficiarieScreen} />
                <Drawer.Screen name="ReferAndEarnScreen" component={ReferAndEarnScreen} />
              </>
            ) : (
              <Drawer.Screen name="Auth" component={RootStackScreen} />
            )}
          </Drawer.Navigator>
        </GlobalContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;
