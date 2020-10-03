import * as React from 'react';
import { View,Text,Button } from 'react-native'


const DashboardScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Dashboard</Text>
        <Button
          title="Go to Setting Screen"
          onPress={() => navigation.navigate("Setting")}
        />
      </View>
    );
  }
  

export default DashboardScreen;
