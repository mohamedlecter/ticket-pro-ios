import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Calender() {
  return (
    <View style={styles.calenderContainer}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.eventLocation}>بوليفارد الرياض</Text>
      </View>

      <View style={styles.calender}>
        <View style={styles.calenderBtn2}>
          <Text
            style={{
              color: "#0C001B",
              fontSize: 12,
              fontWeight: "400",
              marginVertical: 5,
            }}
          >
            اكتوبر
          </Text>
          <Text style={{ color: "#0C001B", fontSize: 16, fontWeight: "700" }}>
            29
          </Text>
          <Text
            style={{
              color: "#0C001B",
              fontSize: 12,
              fontWeight: "400",
              marginVertical: 5,
            }}
          >
            الاحد
          </Text>
        </View>

        <View style={styles.calenderBtn2}>
          <Text
            style={{
              color: "#0C001B",
              fontSize: 12,
              fontWeight: "400",
              marginVertical: 5,
            }}
          >
            اكتوبر
          </Text>
          <Text style={{ color: "#0C001B", fontSize: 16, fontWeight: "700" }}>
            28
          </Text>
          <Text
            style={{
              color: "#0C001B",
              fontSize: 12,
              fontWeight: "400",
              marginVertical: 5,
            }}
          >
            السبت
          </Text>
        </View>

        <View style={styles.calenderBtn2}>
          <Text
            style={{
              color: "#0C001B",
              fontSize: 12,
              fontWeight: "400",
              marginVertical: 5,
            }}
          >
            اكتوبر
          </Text>
          <Text style={{ color: "#0C001B", fontSize: 16, fontWeight: "700" }}>
            27
          </Text>
          <Text
            style={{
              color: "#0C001B",
              fontSize: 12,
              fontWeight: "400",
              marginVertical: 5,
            }}
          >
            الجمعة
          </Text>
        </View>

        <View style={styles.calenderBtn2}>
          <Text
            style={{
              color: "#0C001B",
              fontSize: 12,
              fontWeight: "400",
              marginVertical: 5,
            }}
          >
            اكتوبر
          </Text>
          <Text style={{ color: "#0C001B", fontSize: 16, fontWeight: "700" }}>
            26
          </Text>
          <Text
            style={{
              color: "#0C001B",
              fontSize: 12,
              fontWeight: "400",
              marginVertical: 5,
            }}
          >
            الخميس
          </Text>
        </View>

        <View style={styles.calenderBtn}>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 12,
              fontWeight: "400",
              marginVertical: 5,
            }}
          >
            اكتوبر
          </Text>
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "700" }}>
            25
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 12,
              fontWeight: "400",
              marginVertical: 5,
            }}
          >
            الاربعاء
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  eventLocation: {
    marginVertical: 16,
    color: "#0C001B",
    fontWeight: "400",
    fontSize: 20,
  },
  calender: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  calenderBtn: {
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#64339F",
    borderRadius: 10,
    width: 60,
    height: 70,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  calenderBtn2: {
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#3D0087",
    borderWidth: 1,
    borderRadius: 10,
    width: 60,
    height: 70,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  calenderText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 16,
  },
});
