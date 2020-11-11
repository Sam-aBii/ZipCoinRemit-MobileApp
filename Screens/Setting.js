import * as React from "react";
import { View, Text, Button } from "react-native";

const SettingScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Setting Screen</Text>
    <Button title="Go to Home Screen" onPress={() => navigation.navigate("Home")} />
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>
);

export default SettingScreen;
