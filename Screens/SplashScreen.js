import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Button, Icon } from "native-base";

import * as Animatable from "react-native-animatable";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#242e55" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Stay Connected</Text>
        <Text style={styles.text}>
          Send Money Online with comfort of your own home 24 * 7
        </Text>
        <TouchableOpacity>
          <Button
            block
            rounded
            iconRight
            style={{ backgroundColor: "#dba84e" }}
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          >
            <Text style={styles.textSign}>Get Started</Text>
            <Icon name="arrow-forward" />
          </Button>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242e55",
  },
  header: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#242e55",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
    fontSize: 15,
    paddingBottom: 50,
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
    marginRight: 20,
  },
});