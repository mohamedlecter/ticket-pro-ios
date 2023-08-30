import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import SvgUri from 'react-native-svg-uri';
import { formatDistanceToNow } from 'date-fns';
import { ar } from 'date-fns/locale';



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

const TicketInfo = ({ navigation , route}) => {
  const { ticketData } = route.params;

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
          <ListItem item={ticketData} />
        </View>
      </View>
    </View>
  );
};

const ListItem = ({ item, navigation }) => {
  const {
    bookingTime,
    user,
    eventName,
    eventDate,
    ticketCount,
    eventStatus,
  } = item;

  return (
    <View style={styles.listItem}>
      <View style={styles.rowContainer}>
        <Text style={styles.timeText}>{bookingTime ? formatDistanceToNow(new Date(bookingTime), { addSuffix: true, locale: ar }): ''}</Text>
        <Text style={styles.nameText}>{user.name}</Text>
      </View>
      <View style={styles.phoneNumberContainer}>
        <Text style={styles.timeText}>{user.phone}</Text>
      </View>

      <View style={styles.eventContainer}>
        <View style={styles.eventNameTextContainer}>
          <Text style={styles.eventNameText}>{eventName}</Text>
        </View>
        <View style={([styles.eventNameTextContainer], { marginTop: 0 })}>
          <Text style={styles.eventDateText}>{eventDate}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{eventStatus}</Text>
          <Text style={styles.ticketCountText}>{ticketCount} تذاكر</Text>
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
    fontFamily: "Dubai-Medium" 

  },
  nameText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Dubai-Medium" 

  },
  eventContainer: {
    marginVertical: 16,
  },
  eventNameText: {
    color: "#3D0087",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "right",
    fontFamily: "Dubai-Medium" 

  },
  eventDateText: {
    fontSize: 14,
    textAlign: "right",
    fontFamily: "Dubai-Medium" 

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
    fontFamily: "Dubai-Medium" 

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
