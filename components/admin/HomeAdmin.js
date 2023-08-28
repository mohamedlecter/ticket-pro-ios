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
import SvgUri from 'react-native-svg-uri';
import { useSelector } from "react-redux";
import { formatDistanceToNow } from 'date-fns';
import { ar } from 'date-fns/locale';

const windowWidth = Dimensions.get("window").width;

export default function HomeAdmin() {
  const [showNFCWidget, setShowNFCWidget] = useState(true);
  const bookedTickets = useSelector((state) => state.ticketsReducer.bookedTickets);
  console.log(bookedTickets);
  const handleButtonPress = () => {
    setShowNFCWidget(true);
  };
  return (
    <View>
      <View style={styles.topNavBackground}>
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
      </View>
      <View style={styles.justifyContent}>
        <View style={styles.contentContainer}>
          <View style={styles.numJustiftyContent}>
            <Text style={[styles.text, { fontFamily: "IBMPlexSans-Regular"  } ]}>عدد الطلبات المقبولة</Text>
            <Text style={styles.numtext}>150</Text>
          </View>
        </View>
      </View>

      <View style={styles.heading}>
          <Text tyle={[styles.text, { fontFamily: "IBMPlexSans-Bold"  } ]}>التذاكر المفعلة</Text>
        </View>
      <View style={styles.container}>


        <View style={styles.ticketsContainer}>
          <View style={{marginTop:10}}>

        {bookedTickets.map((ticket, index) => (
            <TicketCard
              key={index}
              time={ticket.bookingTime ? formatDistanceToNow(new Date(ticket.bookingTime), { addSuffix: true, locale: ar }): ''}
              name={ticket.user.name}
              phoneNumber={ticket.user.phone}
            />
          ))}
          </View>

          <View style={styles.arrowContainer}>
          <SvgUri
              source={require("../../assets/arrow-left.svg")}
              fill="black" // Use fill to set the SVG color
              style={{ transform: [{ rotate: '-90deg' }] }}
              />
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
    paddingRight:10,
    paddingLeft:5,
    marginHorizontal: 5,
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
    fontFamily: "IBMPlexSans-Regular"
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
    fontFamily: "IBMPlexSans-Regular"

  },
  boldText: {
    fontWeight: '700',
    fontFamily: "IBMPlexSans-Bold"

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
    marginBottom: 16,
    alignItems:"flex-end",
    justifyContent:"flex-end",
    marginHorizontal:16,
    fontFamily: "IBMPlexSans-Regular"

  },
  numtext: {
    color: "#3D0087",
    fontSize: 37,
    fontWeight: '700',
    fontFamily: "IBMPlexSans-Regular"

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
