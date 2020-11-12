/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import * as Font from "expo-font";
import axios from "axios";

import MainTabScreen from "./Navigators/MainTabScreen";
import DrawerContent from "./Navigators/DrawerContent";
import TranscationsScreen from "./Screens/Transcations";
import CustomerScreen from "./Screens/Customer";
import PaymentScreen from "./Screens/Payment";
import BeneficiarieScreen from "./Screens/Beneficiarie";
import ReferAndEarnScreen from "./Screens/ReferAndEarn";
import KycStackScreen from "./Screens/KycProcess";
import { reducer as globalReducer, initialState as globalInitialState } from "./store/reducers/globalReducer";
import { GlobalContextProvider } from "./store/contexts/globalContext";
import config from "./config";
import { GET_GLOBAL_COUNTRIES_INFO } from "./store/actionTypes";

const Drawer = createDrawerNavigator();
const { useReducer, useEffect } = React;
const { SERVER_BASE_URL } = config;

function App() {
  const [globalState, globalDispatch] = useReducer(globalReducer, globalInitialState);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
        Roboto_medium: require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
      });
    };
    loadFonts();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data: countries } = await axios.get(`${SERVER_BASE_URL}/countries`);
      globalDispatch({
        type: GET_GLOBAL_COUNTRIES_INFO,
        payload: countries,
      });
    };
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      {/* <RootStackScreen /> */}
      <GlobalContextProvider value={{ state: globalState, dispatch: globalDispatch }}>
        <Drawer.Navigator
          screenOptions={{ header: (props) => <View {...props} headerShown={false} /> }}
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="Dashboard" component={MainTabScreen} />
          <Drawer.Screen name="KycProcessScreen" component={KycStackScreen} />
          <Drawer.Screen name="TranscationsScreen" component={TranscationsScreen} />
          <Drawer.Screen name="CustomerScreen" component={CustomerScreen} />
          <Drawer.Screen name="PaymentScreen" component={PaymentScreen} />
          <Drawer.Screen name="BeneficiarieScreen" component={BeneficiarieScreen} />
          <Drawer.Screen name="ReferAndEarnScreen" component={ReferAndEarnScreen} />
        </Drawer.Navigator>
      </GlobalContextProvider>
    </NavigationContainer>
  );
}

export default App;
