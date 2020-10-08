import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./Navigators/MainTabScreen";
import {DrawerContent} from "./Navigators/DrawerContent"

import RootStackScreen from "./Navigators/RootStackScreen"
const Drawer = createDrawerNavigator();

import KycProcessScreen from "./Screens/KycProcess";
import SendFoodScreen from "./Screens/SendFood"
import TranscationsScreen from "./Screens/Transcations";
import CustomerScreen from "./Screens/Customer";
import PaymentScreen from "./Screens/Payment";
import BeneficiarieScreen from "./Screens/Beneficiarie"
import ReferAndEarnScreen from "./Screens/ReferAndEarn"


function App({navigation}) {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Dashboard" component={MainTabScreen} />
        <Drawer.Screen name="KycProcessScreen" component={KycProcessScreen} />
        <Drawer.Screen name="SendFoodScreen" component={SendFoodScreen} />
        <Drawer.Screen name="TranscationsScreen" component={TranscationsScreen} />
        <Drawer.Screen name="CustomerScreen" component={CustomerScreen} />
        <Drawer.Screen name="PaymentScreen" component={PaymentScreen} />
        <Drawer.Screen name="BeneficiarieScreen" component={BeneficiarieScreen} />
        <Drawer.Screen name="ReferAndEarnScreen" component={ReferAndEarnScreen} />

      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
