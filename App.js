/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./Navigators/MainTabScreen";
import DrawerContent from "./Navigators/DrawerContent";

import TranscationsScreen from "./Screens/Transcations";
import CustomerScreen from "./Screens/Customer";
import PaymentScreen from "./Screens/Payment";
import BeneficiarieScreen from "./Screens/Beneficiarie";
import ReferAndEarnScreen from "./Screens/ReferAndEarn";
import KycStackScreen from "./Screens/KycProcess";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <RootStackScreen /> */}
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Dashboard" component={MainTabScreen} />
        <Drawer.Screen name="KycProcessScreen" component={KycStackScreen} />
        <Drawer.Screen name="TranscationsScreen" component={TranscationsScreen} />
        <Drawer.Screen name="CustomerScreen" component={CustomerScreen} />
        <Drawer.Screen name="PaymentScreen" component={PaymentScreen} />
        <Drawer.Screen name="BeneficiarieScreen" component={BeneficiarieScreen} />
        <Drawer.Screen name="ReferAndEarnScreen" component={ReferAndEarnScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
