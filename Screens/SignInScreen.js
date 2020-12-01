import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Platform, Alert } from "react-native";
import { Button } from "native-base";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Axios from "axios";

import Typograpghy from "../Theme";
import config from "../config";
import { AuthContext } from "../store/contexts/authContext";
import { LOG_IN } from "../store/actionTypes";

const { SERVER_BASE_URL } = config;

const { COLORS } = Typograpghy;

const SignInScreen = ({ navigation }) => {
  const { dispatch } = useContext(AuthContext);

  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const signIn = async () => {
    try {
      const { data: userData } = await Axios.post(`${SERVER_BASE_URL}/auth/login`, {
        email: data.email,
        password: data.password,
      });
      await dispatch({ type: LOG_IN, payload: { tokens: userData.tokens } });
    } catch (e) {
      Alert.alert("error", "Something went wrong. Please try again.", null, { cancelable: true });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.DEFAULT} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome</Text>
        <Text style={styles.text_header1}>Fast.Secure.Low Cost</Text>
        <Text style={styles.text_header2}>&quot;A Service you can trust&quot;</Text>
      </View>
      <Animatable.View animation="fadeInUp" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={COLORS.SECONDARY} size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Email"
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="zoomIn">
              <Feather name="check-circle" color={COLORS.SECONDARY} size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={COLORS.SECONDARY} size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Password"
            secureTextEntry={!!data.secureTextEntry}
            onChangeText={(val) => handlePasswordChange(val)}
          />

          <Animatable.View animation="zoomIn">
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color={COLORS.SECONDARY} size={20} />
              ) : (
                <Feather name="eye" color={COLORS.SECONDARY} size={20} />
              )}
            </TouchableOpacity>
          </Animatable.View>
        </View>
        <View style={styles.button}>
          <Button rounded block style={{ backgroundColor: COLORS.SECONDARY }} onPress={signIn}>
            <Text style={{ color: COLORS.WHITE, fontWeight: "bold" }}>Sign In</Text>
          </Button>
        </View>
        <TouchableOpacity>
          <Button
            block
            bordered
            rounded
            style={{ marginTop: 30, borderColor: COLORS.SECONDARY }}
            onPress={() => {
              navigation.navigate("SignUpScreen");
            }}
          >
            <Text style={{ color: COLORS.SECONDARY, fontWeight: "bold" }}>Sign Up</Text>
          </Button>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
        >
          <View style={styles.forgot_password}>
            <Text style={styles.forgot_password_text}>Forgot Password?</Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 50,
    alignItems: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 30,
  },
  text_header1: {
    color: COLORS.WHITE,
    fontSize: 18,
    paddingBottom: 2,
  },
  text_header2: {
    color: COLORS.SECONDARY,
    fontSize: 15,
  },
  text_footer: {
    color: COLORS.DEFAULT,
    fontSize: 18,
    paddingBottom: 15,
    marginTop: 12,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_COLOR,
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    paddingTop: 5,
    color: COLORS.DEFAULT,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  forgot_password: {
    paddingLeft: 180,
    paddingTop: 20,
  },
  forgot_password_text: {
    color: COLORS.SECONDARY,
  },
});
