import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import TopNav from "../../components/TopNav";
import { Button } from "@rneui/themed";
import SvgUri from "react-native-svg-uri";
import data from "../../data";

const EventInfo = ({ navigation, route }) => {
  const [desClicked, setDesClicked] = useState(false);
  const { eventId } = route.params; // Extract the eventId from the route params
  const event = data.find((item) => item.id === eventId); // Find the event based on eventId
  let isTicketPage = true;

  const handleDesClick = () => {
    setDesClicked(!desClicked);
  };

  return (
    <ScrollView>
      <TopNav isTicketPage={isTicketPage} navigation={navigation} />

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={event.eventImage} style={styles.image} />
        </View>

        <View style={styles.eventTitleContainer}>
          <View style={styles.eventHeading}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
            <SvgUri
              source={require("../../assets/location.svg")}
            />
              <Text style={styles.eventLocation}>{event.eventLocation}</Text>
            </View>
            <Text style={styles.eventTitle}>{event.eventName}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.eventDate}>{event.eventDate}</Text>
          <Text style={styles.price}>تبدأ من {event.eventMinPrice} ريال</Text>

          <Text style={styles.desc}>{event.eventWeeekDaysWorkingHours} </Text>
          <Text style={styles.desc}>{event.eventWeekendWorkingHours} </Text>
        </View>
        <View style={styles.eventDescContainer}>
          <TouchableOpacity onPress={handleDesClick}>
            <SvgUri
              source={require("../../assets/arrow-left.svg")}
              fill="black" // Use fill to set the SVG color
              style={{
                transform: [{ rotate: desClicked ? "90deg" : "-90deg" }],
              }}
            />
          </TouchableOpacity>

          <Text style={styles.eventDescHeading}>وصف الفعالية</Text>
        </View>

        {desClicked && (
          <View style={styles.eventDesc}>
            <Text style={styles.eventDescText}>{event.eventDescription}</Text>
          </View>
        )}

        <View style={styles.termsContainer}>
          <SvgUri
            source={require("../../assets/arrow-left.svg")}
            fill="black" // Use fill to set the SVG color
            style={{ transform: [{ rotate: "-90deg" }] }}
          />
          <Text style={styles.terms}>الشروط والأحكام</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="احجز تذكرتك"
            loading={false}
            loadingProps={{ size: "small", color: "#3D0087" }}
            buttonStyle={styles.Button}
            titleStyle={styles.ButtonText}
            containerStyle={styles.ButtonContainer}
            onPress={() => {
              navigation.navigate("PickTicket", { event });
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -115,
  },
  container: {
    marginHorizontal: 20,
  },
  eventTitleContainer: {
    marginTop: 35,
  },
  eventHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eventTitle: {
    fontSize: 22,
    color: "#0C001B",
    fontWeight: "400",
    lineHeight: 30,
    fontFamily: "IBMPlexSans-Bold", // Adjust font family name
  },
  eventLocation: {
    fontSize: 14,
    color: "#413F44",
    fontWeight: "400",
    lineHeight: 15,
    marginLeft: 5,
    fontFamily: "IBMPlexSans-Bold", // Adjust font family name
  },
  eventDate: {
    color: "#413F44",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "IBMPlexSans-Bold", // Adjust font family name
  },
  price: {
    color: "#0C001B",
    fontSize: 18,
    fontWeight: "800",
    marginVertical: 10,
    justifyContent: "center",
    fontFamily: "IBMPlexSans-Bold", // Adjust font family name
  },
  desc: {
    color: "#0C001B",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    fontFamily: "Dubai-Medium", // Adjust font family name
  },
  eventDescContainer: {
    marginTop: 35,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  termsContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  eventDescHeading: {
    color: "#0C001B",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Dubai-Medium", // Adjust font family name
  },
  eventDescText: {
    color: "#0C001B",
    fontSize: 14,
    fontWeight: "400",
    justifyContent: "center",
    textAlign: "right",
    fontFamily: "Dubai-Medium", // Adjust font family name
  },
  eventDesc: {
    alignItems: "flex-end",
  },
  terms: {
    color: "#0C001B",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Dubai-Medium", // Adjust font family name
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  floatingButtonContainer: {
    position: 'absolute',
    zIndex: 1, // Make sure it's above the content
    top:400,
    right:-50
  },
  Button: {
    backgroundColor: "#19E578",
    borderRadius: 16,
    padding: 12,
  },
  ButtonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#3D0087",
    fontFamily: "Dubai-Medium", // Adjust font family name
  },
  ButtonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 330,
    marginVertical: 16,
  },
  image:{
    width:335,
    height:220,
    borderRadius:16,
    resizeMode:"stretch"
  }
});

export default EventInfo;
