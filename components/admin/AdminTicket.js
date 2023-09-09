import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { formatDistanceToNow } from 'date-fns';
import { ar } from 'date-fns/locale';

const data = [
  { time: "قبل 10 دقائق", name: "محمد التميمي", phoneNumber: "9665541*****" },
  { time: "قبل 15 دقيقة", name: "طلال المالكي", phoneNumber: "9665006*****" },
  { time: "قبل 15 دقيقة", name: "حمد الشيباني", phoneNumber: "9665936*****" },
];

const AdminTicket = ({ navigation }) => {
  const bookedTickets = useSelector((state) => state.ticketsReducer.bookedTickets);

  return (
    <View style={{ marginTop: 38, marginHorizontal: 16 }}>
      <View style={styles.headingTextContainer}>
        <Text style={styles.text}>التذاكر المفعلة</Text>
      </View>
      <View
        style={{
          borderColor: "#FFFFFF",
          backgroundColor: "#FFFFFF",
          borderWidth: 1,
          borderRadius: 16,
          marginTop: 16,
        }}
      >
         {bookedTickets.filter((ticket) => ticket.eventStatus === "مفعلة").map((ticket, index) => (
            <ListItem
              key={index}
              time={ticket.bookingTime ? formatDistanceToNow(new Date(ticket.bookingTime), { addSuffix: true, locale: ar }): ''}
              name={ticket.user.name}
              phoneNumber={ticket.user.phone}
              ticketData={ticket}
              navigation={navigation}
            />
          ))}
      </View>
    </View>
  );
};

const ListItem = ({ time, name, phoneNumber, navigation, ticketData }) => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 16,
    }}
    onPress={() => navigation.navigate("Ticket Info", { ticketData })}
  >
    <View>
      <Text
        style={{
          color: "#413F44",
          fontSize: 11,
          fontWeight: "400",
          fontFamily: "Dubai-Medium" 
        }}
      >
        {time}
      </Text>
    </View>
    <View
      style={{
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#000000", fontSize: 16, fontWeight: "400" ,fontFamily: "Dubai-Medium" }}>
        {name}
      </Text>
      <Text
        style={{
          color: "#413F44",
          fontSize: 11,
          fontWeight: "400",
          marginTop: 4,
          fontFamily: "Dubai-Medium" 

        }}
      >
        {phoneNumber}
      </Text>
    </View>
  </TouchableOpacity>
);

export default AdminTicket;

const styles = StyleSheet.create({
  headingTextContainer: {
    alignItems: "flex-end",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Dubai-Medium" 

  },
});
