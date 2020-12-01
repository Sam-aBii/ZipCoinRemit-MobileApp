/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { AuthContext } from "../store/contexts/authContext";
import { SIGN_OUT } from "../store/actionTypes";

const DrawerContent = (props) => {
  const { dispatch } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "http://zipremit-user-admin-panel.surge.sh/static/media/profile.a4f71ae1.jpg",
                }}
                size={60}
              />
            </View>

            <View
              style={{
                marginLeft: 90,
                marginTop: -53,
                flexDirection: "column",
              }}
            >
              <Title style={styles.title}>Rana Abid</Title>
              <Caption style={styles.caption}>Awesome Customer</Caption>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Dashboard");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <MaterialCommunityIcons name="format-page-break" color={color} size={size} />}
              label="KYC Process"
              onPress={() => {
                props.navigation.navigate("KycProcessScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <MaterialCommunityIcons name="arrow-expand" color={color} size={size} />}
              label="Transcations"
              onPress={() => {
                props.navigation.navigate("TranscationsScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <MaterialCommunityIcons name="human-male-female" color={color} size={size} />}
              label="Customers"
              onPress={() => {
                props.navigation.navigate("CustomerScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <MaterialCommunityIcons name="cash-usd" color={color} size={size} />}
              label="Payments"
              onPress={() => {
                props.navigation.navigate("PaymentScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <MaterialCommunityIcons name="human-handsup" color={color} size={size} />}
              label="Beneficiaries"
              onPress={() => {
                props.navigation.navigate("BeneficiarieScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => <MaterialCommunityIcons name="hand-pointing-up" color={color} size={size} />}
              label="Refer & Earn"
              onPress={() => {
                props.navigation.navigate("ReferAndEarnScreen");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDraweSection}>
        <DrawerItem
          icon={({ color, size }) => <MaterialCommunityIcons name="exit-to-app" color={color} size={size} />}
          label="Sign Out"
          onPress={() => {
            props.navigation.closeDrawer();
            dispatch({ type: SIGN_OUT });
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDraweSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
