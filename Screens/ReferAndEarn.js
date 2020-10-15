import React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from "native-base";

import { StatusBar } from "react-native";

const ReferAndEarnScreen = ({ navigation }) => {
  return (
    <Container style={{ fontFamily: "Roboto" }}>
      <Header style={{ backgroundColor: "#dba84e" }}>
        <StatusBar backgroundColor="#dba84e" barStyle="light-content" />
        <Left>
          <Button transparent>
            <Icon name="menu" onPress={() => navigation.openDrawer()} />
          </Button>
        </Left>
        <Body>
          <Title>Refer & Earn</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>This is Content Section</Text>
      </Content>
    </Container>
  );
};

export default ReferAndEarnScreen;
