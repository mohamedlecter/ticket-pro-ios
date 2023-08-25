import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import SvgUri from 'react-native-svg-uri';


const data = [
  {
    time: "قبل 3 دقائق",
    name: "سيف العتيبي",
    phoneNumber: "9665541*****",
    eventName: "راسيل مينيا ، جدة",
    eventDate: "24 مارس",
    numerOfTickets: "6",
    status: "مفعلة",
  },
];

const TicketInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
      <SvgUri
          source={require("../../assets/arrow-left.svg")}
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

      <View style={styles.content}>
        <View style={styles.headingTextContainer}>
          <Text style={styles.text}>تفاصيل التذكرة</Text>
        </View>

        <View style={styles.ticketContainer}>
          {data.map((item, index) => (
            <ListItem key={index} item={item} navigation={navigation} />
          ))}
        </View>
      </View>
    </View>
  );
};

const ListItem = ({ item, navigation }) => {
  const {
    time,
    name,
    phoneNumber,
    eventName,
    eventDate,
    numerOfTickets,
    status,
  } = item;

  return (
    <View style={styles.listItem}>
      <View style={styles.rowContainer}>
        <Text style={styles.timeText}>{time}</Text>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <View style={styles.phoneNumberContainer}>
        <Text style={styles.timeText}>{phoneNumber}</Text>
      </View>

      <View style={styles.eventContainer}>
        <View style={styles.eventNameTextContainer}>
          <Text style={styles.eventNameText}>{eventName}</Text>
        </View>
        <View style={([styles.eventNameTextContainer], { marginTop: 0 })}>
          <Text style={styles.eventDateText}>{eventDate}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{status}</Text>
          <Text style={styles.ticketCountText}>{numerOfTickets} تذاكر</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    paddingRight:15,
  },
  logo: {
    width: 80,
    height: 80,
  },
  content: {
    marginTop: 38,
    marginHorizontal: 16,
  },
  headingTextContainer: {
    alignItems: "flex-end",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
  },
  ticketContainer: {
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 16,
  },
  listItem: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeText: {
    color: "#413F44",
    fontSize: 11,
    fontWeight: "400",
    fontFamily: "IBMPlexSans-Regular" 

  },
  nameText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "IBMPlexSans-Regular" 

  },
  eventContainer: {
    marginVertical: 16,
  },
  eventNameText: {
    color: "#3D0087",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "right",
    fontFamily: "IBMPlexSans-Regular" 

  },
  eventDateText: {
    fontSize: 14,
    textAlign: "right",
    fontFamily: "IBMPlexSans-Regular" 

  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 8,
  },
  statusText: {
    fontSize: 11,
    textAlign: "right",
    fontFamily: "IBMPlexSans-Regular" 

  },
  ticketCountText: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "right",
    fontFamily: "IBMPlexSans-Bold" 

  },
  phoneNumberContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 4,
  },
  eventNameTextContainer: {
    marginVertical: 8,
    alignItems: "flex-end",
  },
});

export default TicketInfo;
