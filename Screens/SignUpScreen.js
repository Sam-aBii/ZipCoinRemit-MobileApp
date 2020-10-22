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
import Feather from "react-native-vector-icons/Feather";

import Typograpghy from "../Theme";
const { COLORS } = Typograpghy;


const SignUpScreen = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
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
  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const ConfrmupdateSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.DEFAULT} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
        <Text style={styles.text_header1}>Simple & Easy</Text>
       

      </View>
      <Animatable.View animation="fadeInUp" style={styles.footer}>
        <View style={styles.action}>
          <FontAwesome name="user-circle" color={COLORS.SECONDARY} size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Full Name"
            autoCapitalize="none"
          />
        </View>

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

        <View style={styles.action}>
          <FontAwesome name="lock" color={COLORS.SECONDARY} size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
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

        <View style={styles.action}>
          <FontAwesome name="lock" color={COLORS.SECONDARY} size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />

          <Animatable.View animation="zoomIn">
            <TouchableOpacity onPress={ConfrmupdateSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <Feather name="eye-off" color={COLORS.SECONDARY} size={20} />
              ) : (
                <Feather name="eye" color={COLORS.SECONDARY} size={20} />
              )}
            </TouchableOpacity>
          </Animatable.View>
        </View>

        <View style={styles.action}>
          <FontAwesome name="share-square-o" color={COLORS.SECONDARY} size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Referral Code (Optional)"
          />
        </View>
        <View style={styles.button}>
          <Button rounded block style={{ backgroundColor: COLORS.SECONDARY }}>
            <Text style={{ color: COLORS.WHITE, fontWeight: "bold" }}>Sign Up</Text>
          </Button>
        </View>
        <TouchableOpacity>
          <Button
            block
            bordered
            rounded
            style={{ marginTop: 20, borderColor: COLORS.SECONDARY }}
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          >
            <Text style={{ color: COLORS.SECONDARY, fontWeight: "bold" }}>
              Sign In
            </Text>
          </Button>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT,
  },
  header: {
    flex: 0.7,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingTop: 10,
  },
  text_header: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 30,
  },
  text_header1: {
    color: COLORS.WHITE,
    fontSize: 20,
    color: COLORS.SECONDARY
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
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_COLOR,
    paddingBottom: 5,
  },
  action1: {
    flexDirection: "row",
    marginTop: 10,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_COLOR,
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
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
