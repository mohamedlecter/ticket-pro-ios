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
import ReadNfc from "./ReadNfc";

import React, { useState } from "react";
// Get the window width
const windowWidth = Dimensions.get("window").width;

// Calculate the width for the image inside img view
const imgWidth = windowWidth - 39; // Assuming a margin of 20 on each side of the ticketCard

const ActivateTicket = ({ navigation }) => {
  const [showNFCWidget, setShowNFCWidget] = useState(false);

  const handleButtonPress = () => {
    navigation.navigate("Read Nfc");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <MaterialIcons
          name="chevron-left"
          size={30}
          onPress={() => navigation.navigate("Ticket")}
        />
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
        />
        <MaterialIcons name="search" size={30} />
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
              <Text style={[styles.text, { fontWeight: "700" }]}>
                البوليفارد ، الرياض
              </Text>
              <Text style={(styles.text, { marginVertical: 8 })}>24 ابريل</Text>
              <Text style={[styles.text, { fontWeight: "700" }]}>6 تذاكر</Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <Button
              title="فعل التذكرة"
              loading={false}
              loadingProps={{ size: "small", color: "#3D0087" }}
              buttonStyle={{
                backgroundColor: "#19E578",
                borderRadius: 15,
                padding: 10,
              }}
              titleStyle={{
                fontWeight: "bold",
                fontSize: 16,
                color: "#3D0087",
              }}
              containerStyle={{
                width: 300,
                marginVertical: 10,
              }}
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
  },
  
  headingTextContainer:{
    alignItems:"flex-end"
  }
});
