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

import { StatusBar, StyleSheet, TouchableOpacity } from "react-native";

import Typograpghy from "../Theme";
const { COLORS } = Typograpghy;

const KycProcessScreen = ({ navigation }) => {
  const dataArray = [
    {
      title: "Basic KYC",
      content: (
        <Card style={styles.MainCard}>
          <CardItem>
            <Icon name="document" style={styles.BasicIcon} />
            <Text style={styles.SendLimitsBasic}>Send Limits</Text>
            <Text style={styles.KycCardNum}>$5.0 - $1,500.0</Text>
          </CardItem>
          <CardItem>
            <TouchableOpacity
              onPress={() => navigation.navigate('/#/KycForms/BasicKyc')}
            >
            <Text style={styles.SubmitKycBasic}>Submit Your KYC</Text>
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
            <Icon name="document" style={styles.StandardIcon} />
            <Text style={styles.SendLimitsAdvance}>Send Limits</Text>
            <Text style={styles.KycCardNum}>$1,501 - $9,999</Text>
          </CardItem>
          <CardItem>
            <TouchableOpacity>
              <Text style={styles.SubmitKycAdvance}>Submit Your KYC</Text>
            </TouchableOpacity>
          </CardItem>
        </Card>
      ),
    },
    {
      title: "Advanced KYC",
      content: (
        <Card style={styles.MainCard}>
          <CardItem>
            <Icon name="document" style={styles.AdvanceIcon} />
            <Text style={styles.SendLimitsStandard}>Send Limits</Text>
            <Text style={styles.KycCardNum}>$10,000.0+</Text>
          </CardItem>
          <CardItem>
            <TouchableOpacity>
              <Text style={styles.SubmitKycStandard}>Submit Your KYC</Text>
            </TouchableOpacity>
          </CardItem>
        </Card>
      ),
    },
  ];
  return (
    <Container>
      <Header style={styles.Header}>
        <StatusBar
          backgroundColor={COLORS.SECONDARY}
          barStyle="light-content"
        />
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
        <Text style={styles.ImpText}>
          * This is ONLY a one time KYC process completion.
        </Text>
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
    padding: 4,
  },
  kycBottomText: {
    fontSize: 14,
    color: "grey",
  },
  MainCard: {
    width: 340,
    height: 130,
  },
  KycCardNum: {
    marginLeft: 60,
    color: COLORS.DEFAULT,
  },
  SendLimitsBasic: {
    fontWeight: "bold",
    marginLeft: 10,
    color: "#93BE52",
  },
  SendLimitsAdvance: {
    fontWeight: "bold",
    marginLeft: 10,
    color: "#4680FF",
  },
  SendLimitsStandard: {
    fontWeight: "bold",
    marginLeft: 10,
    color: "#FC6180",
  },
  SubmitKycBasic: {
    color: "#93BE52",
  },
  SubmitKycAdvance: {
    color: "#4680FF",
  },
  SubmitKycStandard: {
    color: "#FC6180",
  },
  BasicIcon: {
    fontSize: 50,
    color: "#93BE52",
  },
  StandardIcon: {
    fontSize: 50,
    color: "#4680FF",
  },
  AdvanceIcon: {
    fontSize: 50,
    color: "#FC6180",
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
    marginTop: 15,
    marginBottom: 30,
  },
  ImpText: {
    padding: 20,
    fontWeight: "bold",
    color: COLORS.SECONDARY,
  },
});
