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
import { TouchableOpacity } from "react-native-gesture-handler";

const KycProcessScreen = ({ navigation }) => {
  const dataArray = [
    {
      title: "Basic KYC",
      content: (
        <Card style={styles.MainCard}>
          <CardItem>
            <Icon name="document" />
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
    <Container>
      <Header style={{ backgroundColor: "#dba84e" }}>
        <StatusBar backgroundColor="#dba84e" barStyle="light-content" />
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
        <View style={styles.headerkyc}>
          <Text style={styles.kycHeaderText}>Know Your Customer (KYC)</Text>
          <Text style={styles.kycBottomText}>
            For the safety of your information, please enter and review your
            personal information correctly and accurately. You will not be able
            to modify your personal information once the form has been
            submitted.
          </Text>
        </View>
        <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
      </Content>
    </Container>
  );
};

export default KycProcessScreen;

const styles = StyleSheet.create({
  headerkyc: {
    margin: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: "#dba84e",
    backgroundColor: "#fff",
  },
  kycHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#242e55",
    marginBottom: 15,
  },
  kycBottomText: {
    fontSize: 14,
    color: "grey",
  },
  MainCard: {
   width: 330, 
   height: 120
   },
  KycCardNum: {

  },
});
