import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import ImageCarousel from "../components/Slider";
import GridView from "../components/GridView";
import FilterOptions from "../components/FilterOptions";
import { useDispatch, useSelector } from "react-redux";
import TopNav from "../components/TopNav";
import HomeAdmin from "../components/admin/HomeAdmin";
import data from "../data";

export default function Home({ navigation }) {
  const { user, isAdmin } = useSelector((state) => state.userReducer);

  let isTicketPage = false;

  // Get the eventImage of the first event
  const firstEventImage = data[0].eventImage;

  // Create an array with the same image repeated three times
  const carouselImages = [firstEventImage, firstEventImage, firstEventImage];

  return isAdmin ? (
    <HomeAdmin />
  ) : (
    <ScrollView style={styles.container}>
      <TopNav isTicketPage={isTicketPage} navigation={navigation} />
      <View style={styles.contentContainer}>
        <View style={styles.carouselContainer}>
          <ImageCarousel images={carouselImages} navigation={navigation} />
        </View>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.headerContainer}>
          <FilterOptions />
        </View>

        <View style={styles.eventsContainer}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.imagesContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EventInfo", { eventId: data[1].id })
                }
              >
                <Image source={data[1].eventImage} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EventInfo", { eventId: data[2].id })
                }
              >
                <Image source={data[2].eventImage} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EventInfo", { eventId: data[3].id })
                }
              >
                <Image source={data[3].eventImage} />
              </TouchableOpacity>
            </View>
            <View style={styles.imagesContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EventInfo", {
                    eventId: data[4].id,
                  })
                }
              >
                <Image source={data[4].eventImage} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EventInfo", { eventId: data[5].id })
                }
              >
                <Image source={data[5].eventImage} />
              </TouchableOpacity>
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
