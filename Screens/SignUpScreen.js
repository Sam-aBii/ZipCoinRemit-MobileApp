import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button, DatePicker } from "native-base";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import DatePickerExample from "../utils/DatePicker";

const SignUpScreen = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
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

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#242e55" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUp" style={styles.footer}>
        <View style={styles.action}>
          <FontAwesome name="user-circle" color="#dba84e" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Full Name"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color="#dba84e" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Email"
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="zoomIn">
              <Feather name="check-circle" color="#dba84e" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <View style={styles.action1}>
          <FontAwesome name="calendar" color="#dba84e" size={20} style={{marginTop: 14}} />
          <DatePicker
            defaultDate={new Date(2020, 4, 4)}
            minimumDate={new Date(1960, 1, 1)}
            maximumDate={new Date(2020, 12, 31)}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            placeHolderText="Select date of  Birth"
            textStyle={{ color: "#000" }}
            placeHolderTextStyle={{ color: "#A9A9A9" }}
          />
          {/* <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text> */}
        </View>

        <View style={styles.action}>
          <FontAwesome name="lock" color="#dba84e" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />

          <Animatable.View animation="zoomIn">
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="#dba84e" size={20} />
              ) : (
                <Feather name="eye" color="#dba84e" size={20} />
              )}
            </TouchableOpacity>
          </Animatable.View>
        </View>

        <View style={styles.action}>
          <FontAwesome name="lock" color="#dba84e" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />

          <Animatable.View animation="zoomIn">
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="#dba84e" size={20} />
              ) : (
                <Feather name="eye" color="#dba84e" size={20} />
              )}
            </TouchableOpacity>
          </Animatable.View>
        </View>
        <View style={styles.action}>
          <FontAwesome name="share-square-o" color="#dba84e" size={20} />
          <TextInput style={styles.textInput} placeholder="Referral Code" />
        </View>
        <View style={styles.button}>
          <Button rounded block style={{ backgroundColor: "#dba84e" }}>
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>Sign Up</Text>
          </Button>
        </View>
        <TouchableOpacity>
          <Button
            block
            bordered
            rounded
            style={{ marginTop: 20, borderColor: "#dba84e" }}
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          >
            <Text style={{ color: "#dba84e", fontWeight: "bold" }}>
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
    backgroundColor: "#242e55",
  },
  header: {
    flex: 0.5,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#242e55",
    fontSize: 18,
    paddingBottom: 15,
    marginTop: 12,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    paddingTop: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  action1: {
    flexDirection: "row",
    marginTop: 10,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    paddingTop: 5,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
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
