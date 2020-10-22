import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "native-base";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Typograpghy from "../Theme";
const { COLORS } = Typograpghy;

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.DEFAULT} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Recover your password!</Text>
      </View>

      <Animatable.View animation="fadeInUp" style={styles.footer}>
        <View style={styles.action}>
          <FontAwesome name="mail-forward" color={COLORS.SECONDARY} size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Email"
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity>
          <Button
            block
            bordered
            rounded
            style={{ marginTop: 30, borderColor: COLORS.SECONDARY }}
          >
            <Text style={{ color: COLORS.SECONDARY, fontWeight: "bold" }}>
              Reset Link
            </Text>
          </Button>
        </TouchableOpacity>
        <View style={styles.forgot_password}>
          <Text style={styles.forgot_password_text}>
            Already have an account?{" "}
            <Text
              onPress={() => {
                navigation.navigate("SignInScreen");
              }}
              style={styles.forgot_password_textLink}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </Animatable.View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingTop: 150,
  },
  text_header: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 25,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_COLOR,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    paddingTop: 5,
    color: COLORS.DEFAULT,
  },
  forgot_password: {
    paddingLeft: 80,
    paddingTop: 20,
  },
  forgot_password_text: {
    color: "grey",
  },
  forgot_password_textLink: {
    color: COLORS.SECONDARY,
  },
});
