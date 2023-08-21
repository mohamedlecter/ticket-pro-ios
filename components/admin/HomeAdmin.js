import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import AdminNfc from "./AdminNfc";

const windowWidth = Dimensions.get("window").width;

export default function HomeAdmin() {
  const [showNFCWidget, setShowNFCWidget] = useState(true);

  const handleButtonPress = () => {
    setShowNFCWidget(true);
  };
  return (
    <View>
      <View style={styles.topNavBackground}>
        <View style={styles.topNav}>
          <MaterialIcons name="notifications-none" size={30} />
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
          />
          <MaterialIcons name="search" size={30} />
        </View>
      </View>
      <View style={styles.justifyContent}>
        <View style={styles.contentContainer}>
          <View style={styles.numJustiftyContent}>
            <Text style={styles.text}>عدد الطلبات المقبولة</Text>
            <Text style={styles.numtext}>150</Text>
          </View>
        </View>
      </View>

      <View style={styles.heading}>
          <Text style={styles.text}>التذاكر المفعلة</Text>
        </View>
      <View style={styles.container}>


        <View style={styles.ticketsContainer}>
          <TouchableOpacity style={{ marginTop: 16 }}>
            <TicketCard
              time="قبل 3 دقائق"
              name="سيف العتيبي"
              phoneNumber="9665541*****"
            />
          </TouchableOpacity>
          <TicketCard
            time="قبل 5 دقائق"
            name="ماجد الجدعاني"
            phoneNumber="9665531*****"
          />
          <TicketCard
            time="قبل 10 دقائق"
            name="محمد التميمي"
            phoneNumber="9665055*****"
          />
          <View style={styles.arrowContainer}>
            <MaterialIcons name="keyboard-arrow-down" size={30} />
          </View>
        </View>
      </View>

      {showNFCWidget && <AdminNfc onClose={() => setShowNFCWidget(false)} />}
    </View>
  );
}

const TicketCard = ({ time, name, phoneNumber }) => (
  <View>
    <View style={styles.ticketCard}>
      <View>
        <Text style={[styles.smallText, styles.greycolor]}>{time}</Text>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.headingTextContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.headingTextContainer}>
          <Text style={[styles.smallText, styles.greycolor]}>
            {phoneNumber}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  topNavBackground: {
    backgroundColor: "#D8CCE7",
    width: windowWidth,
    height: 200,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 2,
  },
  contentContainer: {
    marginTop: -65,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    width: 350,
    borderColor: "#FFFFFF",
  },
  text: {
    color: "#000000",
    fontSize: 16,
    fontWeight: '400',
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
    marginLeft: 30,
  },
  ticketsContainer: {
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 16,
    width: 350,
  },
  ticketCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  ticketCardTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 16,
  },
  headingTextContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 4,
  },
  smallText: {
    color: "#000000",
    fontSize: 11,
    fontWeight: '400',
  },
  boldText: {
    fontWeight: '700',
  },
  arrowContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    margin: 16,
  },
  greycolor: {
    color: "#413F44",
  },
  heading: {
    marginTop: 24,
    marginBottom: 8,
    alignItems:"flex-end",
    justifyContent:"flex-end",
    marginHorizontal:16
  },
  numtext: {
    color: "#3D0087",
    fontSize: 37,
    fontWeight: '700',
  },
  justifyContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  numJustiftyContent: {
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 16,
  },
});
