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

const HomeStack = createStackNavigator();
const SettingStack = createStackNavigator();
const SendMoneyStack = createStackNavigator();
const SendFoodStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="DashboardScreen" style={{ backgroundColor: "#dba84e" }}>
    <Tab.Screen
      name="Dashboard"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Dashboard",
        tabBarColor: "#dba84e",
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Send Money"
      component={SendMoneyStackScreen}
      options={{
        tabBarLabel: "Send Money",
        tabBarColor: "#dba84e",
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cash-usd" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="AirTime Top Up"
      component={AirTimeTopStackScreen}
      options={{
        tabBarLabel: "AirTime TopUp",
        tabBarColor: "#dba84e",
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="application-export" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Send Food"
      component={SendFoodStackScreen}
      options={{
        tabBarLabel: "Send Food",
        tabBarColor: "#dba84e",
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="food" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={SettingStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#dba84e",
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
        backgroundColor: "#dba84e",
      },
      headerTintColor: "#fff",
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={DashboardScreen}
      options={{
        title: "Dashboard",
        headerLeft: () => (
          <Icon.Button name="navicon" size={25} backgroundColor="#dba84e" onPress={() => navigation.openDrawer()} />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const SettingStackScreen = ({ navigation }) => (
  <SettingStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#dba84e",
      },
      headerTintColor: "#fff",
    }}
  >
    <SettingStack.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        headerLeft: () => (
          <Icon.Button name="navicon" size={25} backgroundColor="#dba84e" onPress={() => navigation.openDrawer()} />
        ),
      }}
    />
  </SettingStack.Navigator>
);

const SendMoneyStackScreen = ({ navigation }) => (
  <SendMoneyStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#dba84e",
      },
      headerTintColor: "#fff",
    }}
  >
    <SendMoneyStack.Screen
      name="Send Money"
      component={SendMoneyScreen}
      options={{
        headerLeft: () => (
          <Icon.Button name="navicon" size={25} backgroundColor="#dba84e" onPress={() => navigation.openDrawer()} />
        ),
      }}
    />
  </SendMoneyStack.Navigator>
);

const AirTimeTopStackScreen = ({ navigation }) => (
  <SendFoodStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#dba84e",
      },
      headerTintColor: "#fff",
    }}
  >
    <SendFoodStack.Screen
      name="AirTime Top Up"
      component={AirTimeTopScreen}
      options={{
        headerLeft: () => (
          <Icon.Button name="navicon" size={25} backgroundColor="#dba84e" onPress={() => navigation.openDrawer()} />
        ),
      }}
    />
  </SendFoodStack.Navigator>
);

const SendFoodStackScreen = ({ navigation }) => (
  <SendFoodStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#dba84e",
      },
      headerTintColor: "#fff",
    }}
  >
    <SendFoodStack.Screen
      name="Send Food"
      component={SendFoodScreen}
      options={{
        headerLeft: () => (
          <Icon.Button name="navicon" size={25} backgroundColor="#dba84e" onPress={() => navigation.openDrawer()} />
        ),
      }}
    />
  </SendFoodStack.Navigator>
);
