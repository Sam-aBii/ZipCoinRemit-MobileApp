import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome";

import DashboardScreen from "../Screens/Dashboard";
import SettingScreen from "../Screens/Setting";
import SendMoneyScreen from "../Screens/SendMoney";
import AirTimeTopScreen from "../Screens/AirTimeTopUp";
import SendFoodScreen from "../Screens/SendFood";
import theme from "../Theme";

const { COLORS } = theme;

const HomeStack = createStackNavigator();
const SettingStack = createStackNavigator();
const SendMoneyStack = createStackNavigator();
const SendFoodStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="DashboardScreen" style={{ backgroundColor: COLORS.SECONDARY }}>
    <Tab.Screen
      name="Dashboard"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Dashboard",
        tabBarColor: COLORS.SECONDARY,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Send Money"
      component={SendMoneyStackScreen}
      options={{
        tabBarLabel: "Send Money",
        tabBarColor: COLORS.SECONDARY,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cash-usd" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="AirTime Top Up"
      component={AirTimeTopStackScreen}
      options={{
        tabBarLabel: "AirTime TopUp",
        tabBarColor: COLORS.SECONDARY,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="application-export" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Send Food"
      component={SendFoodStackScreen}
      options={{
        tabBarLabel: "Send Food",
        tabBarColor: COLORS.SECONDARY,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="food" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={SettingStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: COLORS.SECONDARY,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-settings" color={color} size={26} />,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.SECONDARY,
      },
      headerTintColor: COLORS.WHITE,
      headerShown: false,
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={DashboardScreen}
      options={{
        title: "Dashboard",
        headerLeft: () => (
          <Icon.Button name="navicon" size={25} backgroundColor={COLORS.SECONDARY} onPress={() => navigation.openDrawer()} />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const SettingStackScreen = ({ navigation }) => (
  <SettingStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.SECONDARY,
      },
      headerTintColor: COLORS.WHITE,
      headerShown: false,
    }}
  >
    <SettingStack.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        headerLeft: () => (
          <Icon.Button name="navicon" size={25} backgroundColor={COLORS.SECONDARY} onPress={() => navigation.openDrawer()} />
        ),
      }}
    />
  </SettingStack.Navigator>
);

const SendMoneyStackScreen = ({ navigation }) => (
  <SendMoneyStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.SECONDARY,
      },
      headerTintColor: COLORS.WHITE,
      headerShown: false,
    }}
  >
    <SendMoneyStack.Screen
      name="Send Money"
      component={SendMoneyScreen}
      options={{
        headerLeft: () => (
          <Icon.Button name="navicon" size={25} backgroundColor={COLORS.SECONDARY} onPress={() => navigation.openDrawer()} />
        ),
      }}
    />
  </SendMoneyStack.Navigator>
);

const AirTimeTopStackScreen = ({ navigation }) => (
  <SendFoodStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.SECONDARY,
      },
      headerTintColor: COLORS.WHITE,
      headerShown: false,
    }}
  >
    <SendFoodStack.Screen
      name="AirTime Top Up"
      component={AirTimeTopScreen}
      options={{
        headerLeft: () => (
          <Icon.Button name="navicon" size={25} backgroundColor={COLORS.SECONDARY} onPress={() => navigation.openDrawer()} />
        ),
      }}
    />
  </SendFoodStack.Navigator>
);

const SendFoodStackScreen = ({ navigation }) => (
  <SendFoodStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.SECONDARY,
      },
      headerTintColor: COLORS.WHITE,
      headerShown: false,
    }}
  >
    <SendFoodStack.Screen
      name="Send Food"
      component={SendFoodScreen}
      options={{
        headerLeft: () => (
          <Icon.Button name="navicon" size={25} backgroundColor={COLORS.SECONDARY} onPress={() => navigation.openDrawer()} />
        ),
      }}
    />
  </SendFoodStack.Navigator>
);
