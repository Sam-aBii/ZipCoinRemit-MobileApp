import React from "react";
import { Button, Icon } from "native-base";

import { View, StyleSheet, Text } from "react-native";

import Typograpghy from "../Theme";
const { COLORS } = Typograpghy;

const ReferAndEarnScreen = ({ navigation }) => {
  return (
    <View style={styles.Header}>
      <Button transparent>
        <Icon
          name="menu"
          onPress={() => navigation.openDrawer()}
          style={styles.DrawerIcon}
        />
        <Text style={styles.HeaderText}>Refer & Earn</Text>
      </Button>
    </View>
    // <Container style={{ fontFamily: "Roboto" }}>
    //   <Header style={{ backgroundColor: "#dba84e" }}>
    //     <StatusBar backgroundColor="#dba84e" barStyle="light-content" />
    //     <Left>
    //       <Button transparent>
    //         <Icon name="menu" onPress={() => navigation.openDrawer()} />
    //       </Button>
    //     </Left>
    //     <Body>
    //       <Title>Refer & Earn</Title>
    //     </Body>
    //     <Right />
    //   </Header>
    //   <Content>
    //     <Text>This is Content Section</Text>
    //   </Content>
    // </Container>
  );
};

export default ReferAndEarnScreen;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: COLORS.SECONDARY,
  },
  DrawerIcon: {
    fontSize: 30,
    color: COLORS.WHITE,
  },
  HeaderText: {
    fontSize: 21,
    color: COLORS.WHITE,
  },
});
