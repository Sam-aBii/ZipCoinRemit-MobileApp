import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../Screens/SplashScreen";
import SignInScreen from "../Screens/SignInScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import ForgotPassword from "../Screens/ForgotPassword";

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
