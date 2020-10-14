import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Thumbnail,
} from "native-base";
import { View } from "react-native-animatable";

const DashboardScreen = ({ navigation }) => {
  return (
    <Container>
      <ScrollView>
        <Content>
          <View style={styles.header}>
            <Text style={styles.headerText}>AVAILABLE BALANCES</Text>
          </View>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>CAD (Canadian Dollar)</Text>
                <Thumbnail
                  style={styles.ThumbnailLogo}
                  square
                  source={require("../assets/Dashboard/cad.webp")}
                />
                <Text style={styles.cardText}>549.23</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>USD (United State Dollar)</Text>

                <Thumbnail
                  style={styles.ThumbnailLogo}
                  square
                  source={require("../assets/Dashboard/usd.png")}
                />
                <Text style={styles.cardText}>549.23</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>GBP (British Pound)</Text>

                <Thumbnail
                  style={styles.ThumbnailLogo}
                  square
                  source={require("../assets/Dashboard/GBP.png")}
                />
                <Text style={styles.cardText}>549.23</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>EURO (Euro)</Text>
                <Thumbnail
                  style={styles.ThumbnailLogo}
                  square
                  source={require("../assets/Dashboard/euro.jpeg")}
                />
                <Text style={styles.cardText}>549.23</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>RAND (South Africian Rand)</Text>

                <Thumbnail
                  style={styles.ThumbnailLogo}
                  square
                  color="#dba84e"
                  source={require("../assets/Dashboard/RAND.jpeg")}
                />
                <Text style={styles.cardText}>549.23</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardText: {
    paddingBottom: 20,
  },
  ThumbnailLogo: {
    width: 50,
    height: 50,
    marginStart: 270,
  },
});
