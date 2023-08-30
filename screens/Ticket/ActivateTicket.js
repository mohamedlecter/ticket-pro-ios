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
// Get the window width
const windowWidth = Dimensions.get("window").width;

// Calculate the width for the image inside img view
const imgWidth = windowWidth - 39; // Assuming a margin of 20 on each side of the ticketCard

const ActivateTicket = ({ navigation, route }) => {
  const { ticket } = route.params;

  useEffect(() => {
    // Initialize NFC manager
    NfcManager.start();

    return () => {
      // Clean up when the component unmounts
      NfcManager.stop();
    };
  }, []);

  const handleNFCButtonPress = async () => {
    try {

      // You can create the NFC payload using the ticket data
      const nfcPayload = JSON.stringify(ticket);

      // Wait for NFC to become available
      await NfcManager.requestTechnology(NfcTech.Ndef);

      // Write NFC payload to a tag
      const tag = await NfcManager.getNdefMessage();
      await NfcManager.writeNdefMessage([NfcTech.Ndef], [tag], [
        { type: NfcTech.Ndef, data: nfcPayload },
      ]);

      // Display success message or perform further actions
      console.log("NFC Scanned:", ticket);

    } catch (ex) {
      console.warn(ex);
      // Handle errors
    } finally {
      setShowNFCWidget(false);
      await NfcManager.cancelTechnologyRequest();
    }
  };


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
            <Image source={ticket.eventImage} style={{width:345, height:345, borderTopRightRadius:16, borderTopLeftRadius:16, resizeMode:"stretch"}} />
          </View>
          <View style={styles.ticketCardTextContainer}>
            <View>
              <Image source={require("../../assets/groupProfile.png")} />
            </View>
            <View style={{ alignItems: "flex-end", marginLeft: 100 }}>
              <Text style={[styles.text, { fontWeight: "700" }]}>{ticket.eventName}</Text>
              <View style={{flexDirection:"row"}}>
              <Text style={(styles.text, { marginVertical: 8 })}> {ticket.selectedDate.month}</Text>
              <Text style={(styles.text, { marginVertical: 8 })}>{ticket.selectedDate.date}</Text>

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
    borderTopRightRadius:16, 
    borderTopLeftRadius:16,
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
