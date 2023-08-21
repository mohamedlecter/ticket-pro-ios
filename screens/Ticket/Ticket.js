import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { useDispatch, useSelector } from "react-redux";
import AdminTicket from "../../components/admin/AdminTicket";

export default function Ticket({ navigation }) {
  const { isAdmin } = useSelector((state) => state.userReducer);
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <MaterialIcons name="notifications-none" size={30} />
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
        />
        <MaterialIcons name="search" size={30} />
      </View>
      {isAdmin ? (
        <AdminTicket navigation={navigation} />
      ) : (
        <View style={styles.TicketsContainer}>
          <View style={styles.headingTextContainer}>
            <Text style={styles.text}>تذاكري</Text>
          </View>

          <TouchableOpacity
            style={styles.ticketCard}
            onPress={() => navigation.navigate("Activate Ticket")}
          >
            <View>
              <MaterialIcons name="chevron-left" size={30} />
            </View>

            <View style={styles.ticketCardTextContainer}>
              <View>
                <View style={styles.headingTextContainer}>
                  <Text
                    style={[styles.text, { fontSize: 16, fontWeight: "bold" }]}
                  >
                    راسيل مينيا ، جدة
                  </Text>
                </View>
                <View style={[styles.headingTextContainer, { marginTop: 8 }]}>
                  <Text style={{ fontSize: 14 }}>5 نوفمبر</Text>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    width: 160,
                    marginTop: 8,
                  }}
                >
                  <Text style={[styles.text, { fontSize: 14 }]}>غير مفعلة</Text>
                  <Text
                    style={[styles.text, { fontSize: 14, fontWeight: "bold" }]}
                  >
                    6 تذاكر
                  </Text>
                </View>
              </View>
            </View>
            <Image
              source={require("../../assets/event6.png")}
              style={{ width: 120, height: 120 }}
            />
          </TouchableOpacity>

          <View style={styles.ticketCard}>
            <View>
              <MaterialIcons name="chevron-left" size={30} />
            </View>

            <View style={styles.ticketCardTextContainer}>
              <View>
                <View style={styles.headingTextContainer}>
                  <Text
                    style={[styles.text, { fontSize: 16, fontWeight: "bold" }]}
                  >
                    الرويشد ، الرياض
                  </Text>
                </View>
                <View style={[styles.headingTextContainer, { marginTop: 8 }]}>
                  <Text style={{ fontSize: 14 }}>30 اكتوبر</Text>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    width: 160,
                    marginTop: 8,
                  }}
                >
                  <Text style={[styles.text, { fontSize: 14 }]}>مفعلة</Text>
                  <Text
                    style={[styles.text, { fontSize: 14, fontWeight: "bold" }]}
                  >
                    6 تذاكر
                  </Text>
                </View>
              </View>
            </View>
            <Image
              source={require("../../assets/event3.png")}
              style={{ width: 120, height: 120 }}
            />
          </View>

          <View style={styles.ticketCard}>
            <View>
              <MaterialIcons name="chevron-left" size={30} />
            </View>

            <View style={styles.ticketCardTextContainer}>
              <View>
                <View style={styles.headingTextContainer}>
                  <Text
                    style={[styles.text, { fontSize: 16, fontWeight: "bold" }]}
                  >
                    فيا رياض ، الرياض
                  </Text>
                </View>
                <View style={[styles.headingTextContainer, { marginTop: 8 }]}>
                  <Text style={{ fontSize: 14 }}>25 اكتوبر</Text>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    width: 160,
                    marginTop: 8,
                  }}
                >
                  <Text style={[styles.text, { fontSize: 14 }]}>مفعلة</Text>
                  <Text
                    style={[styles.text, { fontSize: 14, fontWeight: "bold" }]}
                  >
                    6 تذاكر
                  </Text>
                </View>
              </View>
            </View>
            <Image
              source={require("../../assets/event2.png")}
              style={{ width: 120, height: 120 }}
            />
          </View>
        </View>
      )}
    </View>
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
