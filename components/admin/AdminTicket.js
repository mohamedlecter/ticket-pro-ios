import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const data = [
  { time: "قبل 3 دقائق", name: "سيف العتيبي", phoneNumber: "9665541*****" },
  { time: "قبل 5 دقائق", name: "ماجد الجدعاني", phoneNumber: "9665541*****" },
  { time: "قبل 10 دقائق", name: "محمد التميمي", phoneNumber: "9665541*****" },
  { time: "قبل 15 دقيقة", name: "طلال المالكي", phoneNumber: "9665006*****" },
  { time: "قبل 15 دقيقة", name: "حمد الشيباني", phoneNumber: "9665936*****" },
  { time: "قبل ساعة", name: "موسى العصيمي", phoneNumber: "9665501*****" },
];

const AdminTicket = ({ navigation }) => {
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
        {data.map((item, index) => (
          <ListItem
            key={index}
            time={item.time}
            name={item.name}
            phoneNumber={item.phoneNumber}
            navigation={navigation}
          />
        ))}
      </View>
    </View>
  );
};

const ListItem = ({ time, name, phoneNumber, navigation }) => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 16,
    }}
    onPress={() => navigation.navigate("Ticket Info")}
  >
    <View>
      <Text
        style={{
          color: "#413F44",
          fontSize: 11,
          fontWeight: "400",
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
      <Text style={{ color: "#000000", fontSize: 16, fontWeight: "400" }}>
        {name}
      </Text>
      <Text
        style={{
          color: "#413F44",
          fontSize: 11,
          fontWeight: "400",
          marginTop: 4,
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
  },
});