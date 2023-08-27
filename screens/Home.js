import React from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import ImageCarousel from "../components/Slider";
import GridView from "../components/GridView";
import FilterOptions from "../components/FilterOptions";
import { useDispatch, useSelector } from "react-redux";
import TopNav from "../components/TopNav";
import HomeAdmin from "../components/admin/HomeAdmin";

export default function Home({ navigation }) {
  const { user, isAdmin } = useSelector((state) => state.userReducer);

  let isTicketPage = false;

  const carouseImages = [
    require("../assets/event1.png"),
    require("../assets/event1.png"),
    require("../assets/event1.png"),
    require("../assets/event1.png"),
  ];

  return isAdmin ? (
    <HomeAdmin />
  ) : (
    <ScrollView style={styles.container}>
      <TopNav isTicketPage={isTicketPage} navigation={navigation} />
      <View style={styles.contentContainer}>
        <View style={styles.carouselContainer}>
          <ImageCarousel images={carouseImages} navigation={navigation} />
        </View>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.headerContainer}>
          <FilterOptions />
        </View>

        <View style={styles.eventsContainer}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.imagesContainer}>
              <Image source={require("../assets/event2.png")} />
              <Image source={require("../assets/event3.png")} />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image source={require("../assets/event4.png")} />
            </View>
            <View style={styles.imagesContainer}>
              <Image source={require("../assets/event5.png")} />
              <Image source={require("../assets/event6.png")} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginTop: -135,
    height: 250,
  },
  headerContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },

  carouselContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  eventsContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "right",
    marginTop: 16,
    width: 350,
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    width: 350,
  },
});
