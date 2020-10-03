import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./Navigators/MainTabScreen";
import {DrawerContent} from "./Navigators/DrawerContent"

const Drawer = createDrawerNavigator();

import KycProcessScreen from "./Screens/KycProcess";

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Dashboard" component={MainTabScreen} />
        <Drawer.Screen name="KycProcessScreen" component={KycProcessScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
