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
  Card,
  CardItem,
  Accordion,
} from "native-base";

import { StatusBar, View, StyleSheet } from "react-native";

import Typograpghy from "../Theme";
import { TouchableOpacity } from "react-native-gesture-handler";
const { COLORS } = Typograpghy;

const KycProcessScreen = ({ navigation }) => {
  const dataArray = [
    {
      title: "Basic KYC",
      content: (
        <Card style={styles.MainCard}>
          <CardItem>
            <Icon name="document" style={styles.Icon} />
            <Text style={styles.KycCardNum}>$5.0 - $1,500.0</Text>
            <TouchableOpacity>
              <Text>Submit Your KYC</Text>
            </TouchableOpacity>
          </CardItem>
        </Card>
      ),
    },
    {
      title: "Standard KYC",
      content: (
        <Card style={styles.MainCard}>
          <CardItem>
            <Text>//Your text here</Text>
          </CardItem>
        </Card>
      ),
    },
    {
      title: "Advanced KYC",
      content: (
        <Card style={styles.MainCard}>
          <CardItem>
            <Text>//Your text here</Text>
          </CardItem>
        </Card>
      ),
    },
  ];
  return (
    <Container >
      <Header style={styles.Header}>
        <StatusBar backgroundColor={COLORS.SECONDARY} barStyle="light-content" />
        <Left>
          <Button transparent>
            <Icon name="menu" onPress={() => navigation.openDrawer()} />
          </Button>
        </Left>
        <Body>
          <Title>KYC Process</Title>
        </Body>
        <Right />
      </Header>
      <Content>
      <Card style={styles.Card}>
          <CardItem style={styles.CardItems}>
            <Body>
            <Text style={styles.kycHeaderText}>Know Your Customer (KYC)</Text>  
            <Text style={styles.kycBottomText}>
              For the safety of your information, please enter and review your
              personal information correctly and accurately. You will not be
              able to modify your personal information once the form has been
              submitted.
            </Text>
            </Body>
          </CardItem>
        </Card>
        <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
      </Content>
    </Container>
  );
};

export default KycProcessScreen;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: COLORS.SECONDARY,
  },
  kycHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.DEFAULT,
    padding: 4
  },
  kycBottomText: {
    fontSize: 14,
    color: "grey",
  },
  MainCard: {
    width: 330,
    height: 120,
    },
  KycCardNum: {
    marginLeft: 20,
  },
  Icon: {
    fontSize: 50,
    color: COLORS.SECONDARY,
  },
  CardItems: {
    borderLeftWidth: 8,
    borderLeftColor: COLORS.SECONDARY,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: COLORS.WHITE,
  },
  Card: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 15
  },
});
