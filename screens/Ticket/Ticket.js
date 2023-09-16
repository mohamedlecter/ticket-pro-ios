import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { useDispatch, useSelector } from "react-redux";
import AdminTicket from "../../components/admin/AdminTicket";
import SvgUri from "react-native-svg-uri";
import { ScrollView } from "react-native";

export default function Ticket({ navigation }) {
  const { isAdmin } = useSelector((state) => state.userReducer);
  const { bookedTickets } = useSelector((state) => state.ticketsReducer); // Update the selector to match your store structure
  console.log(bookedTickets.bookingId);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topNav}>
        <SvgUri
          source={require("../../assets/notification.svg")}
          fill="black"
        />
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
        />
        <SvgUri
          source={require("../../assets/search-normal.svg")}
          fill="black"
        />
      </View>
      {isAdmin ? (
        <AdminTicket navigation={navigation} />
      ) : (
        <View style={styles.TicketsContainer}>
          <View style={styles.headingTextContainer}>
            <Text style={styles.text}>تذاكري</Text>
          </View>

          {bookedTickets.map((ticket, index) => (
            <TouchableOpacity
              key={index}
              style={styles.ticketCard}
              onPress={() =>
                navigation.navigate("Activate Ticket", {
                  ticket,
                })
              }
            >
              <View>
                <SvgUri
                  source={require("../../assets/arrow-left.svg")}
                  fill="black"
                />
              </View>

              <View style={styles.ticketCardTextContainer}>
                <View>
                  <View style={styles.headingTextContainer}>
                    <Text
                      style={[
                        styles.text,
                        { fontSize: 16, fontWeight: "bold" },
                      ]}
                    >
                      {ticket.eventName}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.headingTextContainer,
                      {
                        marginTop: 8,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      },
                    ]}
                  >
                    <Text style={{ fontSize: 14 }}>
                      {ticket.selectedDate.month}
                    </Text>
                    <Text style={{ fontSize: 14 }}>
                      {" "}
                      {ticket.selectedDate.date}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "space-between",
                      flexDirection: "row",
                      width: 160,
                      marginTop: 8,
                    }}
                  >
                    <Text style={[styles.text, { fontSize: 14 }]}>
                      {ticket.eventStatus}
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        { fontSize: 14, fontWeight: "bold" },
                      ]}
                    >
                      {ticket.ticketCount} تذاكر
                    </Text>
                  </View>
                </View>
              </View>
              <Image
                source={ticket.eventImage}
                style={{
                  width: 120,
                  height: 120,
                  borderTopRightRadius: 16,
                  borderBottomRightRadius: 16,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

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
    marginTop: 40,
    marginHorizontal: 10,
  },
  headingTextContainer: {
    alignItems: "flex-end",
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Dubai-Medium",
  },
  ticketCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  ticketCardTextContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
