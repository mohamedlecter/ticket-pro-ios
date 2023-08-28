import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import SvgUri from "react-native-svg-uri";

import React, { useState } from "react";
// Get the window width
const windowWidth = Dimensions.get("window").width;

// Calculate the width for the image inside img view
const imgWidth = windowWidth - 39; // Assuming a margin of 20 on each side of the ticketCard

const ActivateTicket = ({ navigation, route }) => {
  const [showNFCWidget, setShowNFCWidget] = useState(false);
  const handleButtonPress = () => {
    navigation.navigate("Read Nfc");
  };

  const { title, date, ticketCount, imageSource } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <SvgUri
          source={require("../../assets/notification.svg")}
          fill="black" // Use fill to set the SVG color
        />
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
        />
        <SvgUri
          source={require("../../assets/search-normal.svg")}
          fill="black" // Use fill to set the SVG color
        />
      </View>
      <View style={styles.TicketsContainer}>
        <View style={styles.headingTextContainer}>
          <Text style={{ fontSize: 16, fontWeight: "400" }}>تفعيل التذاكر</Text>
        </View>
        <View style={styles.ticketCard}>
          <View style={styles.img}>
            <Image source={require("../../assets/TicketPhoto.png")} />
          </View>
          <View style={styles.ticketCardTextContainer}>
            <View>
              <Image source={require("../../assets/groupProfile.png")} />
            </View>
            <View style={{ alignItems: "flex-end", marginLeft: 100 }}>
              <Text style={[styles.text, { fontWeight: "700" }]}>{title}</Text>
              <Text style={(styles.text, { marginVertical: 8 })}>{date}</Text>
              <Text style={[styles.text, { fontWeight: "700" }]}>
                {ticketCount} تذاكر
              </Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <Button
              title="فعل التذكرة"
              loading={false}
              loadingProps={{ size: "small", color: "#3D0087" }}
              buttonStyle={styles.Button}
              titleStyle={styles.ButtonText}
              containerStyle={styles.ButtonContainer}
              onPress={handleButtonPress}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActivateTicket;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    paddingRight: 10,
    paddingLeft: 5,
  },
  TicketsContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  ticketCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  ticketCardTextContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 16,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "IBMPlexSans-Regular",
  },

  headingTextContainer: {
    alignItems: "flex-end",
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 20,
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
    fontFamily: "IBMPlexSans-Regular",
  },
  ButtonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 300,
    marginVertical: 10,
  },
});
