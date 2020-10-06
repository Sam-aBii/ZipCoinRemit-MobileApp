import React  from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import MainTabScreen from "../Navigators/MainTabScreen"


const KycProcessScreen = ({navigation}) => {
    return (
      <Container >
        <Header style={{backgroundColor: "#dba84e"}}>
          <Left>
            <Button transparent>
            <Icon
            name="menu"
            onPress={() => navigation.openDrawer()}
          />
            </Button>
          </Left>
          <Body>
            <Title>KYC Process</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <MainTabScreen />
      </Container>
    );
  }

export default KycProcessScreen;
