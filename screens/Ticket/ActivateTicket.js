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
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import React, { useState, useEffect } from "react";
import NfcProxy from "../../nfcProxy";
import { ScrollView } from "react-native";
import { TextEncoder, TextDecoder } from "react-native";
// Get the window width
const windowWidth = Dimensions.get("window").width;

const ActivateTicket = ({ navigation, route }) => {
  const { ticket } = route.params;
  const ticketText = `Event Name: ${ticket.eventName}\nEvent Date: ${ticket.selectedDate.month} ${ticket.selectedDate.date}\nTicket Count: ${ticket.ticketCount} \nTicket Status: ${ticket.eventStatus} \nTicket ID: ${ticket.id} `;
  console.log("ticket", ticketText);

  useEffect(() => {
    // Initialize NFC manager
    NfcProxy.init();
  }, []);

  const handleNFCButtonPress = async () => {
    try {
      // Prepare the ticket data as a text record
      const ticketText = `Event Name: ${ticket.eventName}\nEvent Date: ${ticket.selectedDate.month} ${ticket.selectedDate.date}\nTicket Count: ${ticket.ticketCount} \nTicket Status: ${ticket.eventStatus} \nTicket ID: ${ticket.id}`;
      // Write the ticket data as a text record to the NFC tag
      const result = await NfcProxy.writeNdef({
        type: "TEXT", // Set the type to 'TEXT' for a text record
        value: ticketText,
      });

      if (result) {
        // NFC write was successful
        console.log("NFC Write Successful");
        // You can add further logic here after a successful NFC write.
      } else {
        // NFC write failed
        console.log("NFC Write Failed");
        // You can handle the failure scenario here.
      }
    } catch (ex) {
      console.warn("ex", ex);
      // Handle the NFC error here.
      console.warn(ex); // Log the exception
      handleException(ex); // Use the handleException function to handle the exception
    }
  };

  return (
    <ScrollView style={styles.container}>
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
            <Image
              source={ticket.eventImage}
              style={{
                width: 345,
                height: 345,
                borderTopRightRadius: 16,
                borderTopLeftRadius: 16,
                resizeMode: "stretch",
              }}
            />
          </View>
          <View style={styles.ticketCardTextContainer}>
            <View>
              <Image source={require("../../assets/groupProfile.png")} />
            </View>
            <View style={{ alignItems: "flex-end", marginLeft: 100 }}>
              <Text style={[styles.text, { fontWeight: "700" }]}>
                {ticket.eventName}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={(styles.text, { marginVertical: 8 })}>
                  {" "}
                  {ticket.selectedDate.month}
                </Text>
                <Text style={(styles.text, { marginVertical: 8 })}>
                  {ticket.selectedDate.date}
                </Text>
              </View>

              <Text style={[styles.text, { fontWeight: "700" }]}>
                {ticket.ticketCount} تذاكر
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
              onPress={handleNFCButtonPress}
            />
          </View>
        </View>
      </View>
    </ScrollView>
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
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
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
    marginVertical: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Dubai-Medium",
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
    fontFamily: "Dubai-Medium",
  },
  ButtonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 300,
    marginVertical: 10,
  },
});
