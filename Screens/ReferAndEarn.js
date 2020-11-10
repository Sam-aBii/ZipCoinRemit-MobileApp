import React from "react";
import { Button, Icon, CardItem, Card } from "native-base";
import { View, StyleSheet, Text, StatusBar, Image, ScrollView, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import ReferTable from "../utils/ReferTable";

import Typograpghy from "../Theme";

const { width } = Dimensions.get("window");
const height = width * 0.6;
const { COLORS } = Typograpghy;

const images = [
  "https://stormy-hamlet-40315.herokuapp.com/static/media/refer1.dd1c4939.png",
  "https://stormy-hamlet-40315.herokuapp.com/static/media/refer4.96c57111.png",
  "https://stormy-hamlet-40315.herokuapp.com/static/media/refer5.1f2a279d.png",
  "https://stormy-hamlet-40315.herokuapp.com/static/media/refer6.3b31fc84.jpg",
  "https://stormy-hamlet-40315.herokuapp.com/static/media/refer7.df6bb8d7.jpg",
];
const ReferAndEarnScreen = ({ navigation }) => (
  <ScrollView>
    <View style={styles.Header}>
      <StatusBar backgroundColor={COLORS.SECONDARY} barStyle="light-content" />
      <Button transparent>
        <Icon name="menu" onPress={() => navigation.openDrawer()} style={styles.DrawerIcon} />
        <Text style={styles.HeaderText}>Refer & Earn</Text>
      </Button>
    </View>
    <View style={styles.CourselHead}>
      <ScrollView showsHorizontalScrollIndicator={false} pagingEnabled horizontal style={{ width, height }}>
        {images.map((image, i) => (
          <Image key={i} source={{ uri: image }} style={styles.CourselImage} />
        ))}
      </ScrollView>
      <View style={styles.Pagination}>
        {images.map((i) => (
          <Text key={i} style={styles.PaginationDot}>
            ⬤
          </Text>
        ))}
      </View>
    </View>
    <Card>
      <Text style={styles.ReferalHeading}>Referral Highlights</Text>
      <CardItem>
        <TextInput placeholder="DQCRGH" disabled style={styles.TextInput} />
        <Button bordered warning style={styles.ButtonCopy}>
          <Text>COPY</Text>
        </Button>
      </CardItem>
      <Text style={styles.ReferalText}>
        Every 5th successful referral, your next money transfer is absolutely FREE ZIPCASH. So refer as many friends and earn
        unlimited FREE transactions.
      </Text>
    </Card>
    <View>
      <Button block rounded style={styles.ShareButton}>
        <Icon name="share" style={{ color: COLORS.WHITE }} />
        <Text style={styles.ButtonText}>SHARE</Text>
      </Button>
    </View>
    <View>
      <ReferTable />
    </View>
  </ScrollView>
);

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
  CourselHead: {
    marginTop: 7,
    width,
    height,
    paddingLeft: 5,
    paddingRight: 5,
  },
  CourselImage: {
    width,
    height,
    resizeMode: "cover",
  },
  Pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  PaginationDot: {
    color: COLORS.WHITE,
    margin: 3,
  },
  TextInput: {
    width: "80%",
    height: 50,
    borderRadius: 8,
  },
  ButtonCopy: {
    width: 65,
    margin: 5,
    paddingLeft: 12,
    borderRadius: 8,
    borderColor: COLORS.DEFAULT,
  },
  ReferalHeading: {
    fontSize: 22,
    paddingTop: 7,
    paddingLeft: 15,
    color: COLORS.DEFAULT,
  },
  ReferalText: {
    fontSize: 15,
    paddingLeft: 12,
    paddingBottom: 12,
    color: COLORS.DEFAULT,
  },
  ButtonText: {
    color: COLORS.WHITE,
  },
  ShareButton: {
    margin: 10,
    backgroundColor: COLORS.DEFAULT,
  },
  ReferTable: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
    borderWidth: 1,
    height: 30,
  },
  ReferTableText: {
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.DEFAULT,
    padding: 3,
    borderWidth: 1,
    height: 30,
  },
  ReferTableTextNormal: {
    paddingLeft: 20,
    color: COLORS.DEFAULT,
    padding: 3,
    height: 30,
  },
});
