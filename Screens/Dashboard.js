import * as React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Card, CardItem, Body, Text, Thumbnail } from "native-base";
import { View } from "react-native-animatable";

import Typograpghy from "../Theme";

const { COLORS } = Typograpghy;

const DashboardScreen = () => (
  <Container>
    <Content style={styles.Content}>
      <View style={styles.header}>
        <Text style={styles.headerText}>AVAILABLE BALANCES</Text>
      </View>
      <Card style={styles.Card}>
        <CardItem style={styles.CardItems}>
          <Body>
            <Text style={styles.cardTitle}>CAD (Canadian Dollar)</Text>
            <Thumbnail style={styles.ThumbnailLogo} square source={require("../assets/Dashboard/canadian-dollar.png")} />
            <Text style={styles.cardText}>549.23</Text>
          </Body>
        </CardItem>
      </Card>
      <Card style={styles.Card}>
        <CardItem style={styles.CardItems}>
          <Body>
            <Text style={styles.cardTitle}>USD (United State Dollar)</Text>
            <Thumbnail style={styles.ThumbnailLogo} square source={require("../assets/Dashboard/dollar-coin.png")} />
            <Text style={styles.cardText}>549.23</Text>
          </Body>
        </CardItem>
      </Card>
      <Card style={styles.Card}>
        <CardItem style={styles.CardItems}>
          <Body>
            <Text style={styles.cardTitle}>GBP (British Pound)</Text>
            <Thumbnail style={styles.ThumbnailLogo} square source={require("../assets/Dashboard/pound-sterling.png")} />
            <Text style={styles.cardText}>549.23</Text>
          </Body>
        </CardItem>
      </Card>
      <Card style={styles.Card}>
        <CardItem style={styles.CardItems}>
          <Body>
            <Text style={styles.cardTitle}>EURO (Euro)</Text>
            <Thumbnail style={styles.ThumbnailLogo} square source={require("../assets/Dashboard/euro.png")} />
            <Text style={styles.cardText}>549.23</Text>
          </Body>
        </CardItem>
      </Card>
      <Card style={styles.Card}>
        <CardItem style={styles.CardItems}>
          <Body>
            <Text style={styles.cardTitle}>RAND (South Africian Rand)</Text>

            <Thumbnail
              style={styles.ThumbnailLogo}
              square
              color={COLORS.SECONDARY}
              source={require("../assets/Dashboard/south-african-rand.png")}
            />
            <Text style={styles.cardText}>549.23</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  </Container>
);

export default DashboardScreen;

const styles = StyleSheet.create({
  Content: {
    marginHorizontal: 8,
  },
  header: {
    padding: 15,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.DEFAULT,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.DEFAULT,
  },
  cardTitle: {
    fontWeight: "bold",
    color: COLORS.DEFAULT,
  },
  cardText: {
    paddingBottom: 20,
    color: COLORS.DEFAULT,
  },
  ThumbnailLogo: {
    width: 50,
    height: 50,
    marginStart: 250,
  },
  CardItems: {
    borderLeftWidth: 8,
    borderLeftColor: COLORS.SECONDARY,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: COLORS.CardBACKGROUND,
  },
  Card: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
});
