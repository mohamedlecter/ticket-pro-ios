import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Button } from "@rneui/themed";
import Calender from "../../components/Calender";
import SvgUri from 'react-native-svg-uri';


const PickTicket = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => navigation.navigate("EventInfo")}>
        <SvgUri
          source={require("../../assets/arrow-left.svg")}
          fill="black" // Use fill to set the SVG color
        />
        </TouchableOpacity>
        <Text style={styles.bookText}>حجز الفعالية</Text>
        <SvgUri
        source={require("../../assets/search-normal.svg")}
        fill="black" // Use fill to set the SVG color
      />
      </View>

      <View style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../../assets/progreesBar1.png")} />

          <View style={styles.stepContainer}>
            <View style={styles.step}>
              <Text style={styles.unfinishedStep}>إتمام الشراء</Text>
              <Text style={styles.unfinishedStep}>اختيار الأصدقاء</Text>
              <Text style={styles.finishedStep}>اختيار التذاكر</Text>
              <Text style={styles.finishedStep}>تسجيل الدخول</Text>
            </View>
          </View>
        </View>
        <Calender />
        <View style={styles.pickTcketContainer}>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.pickTcketHeading}>اختر تذكرتك</Text>
          </View>
          <View style={styles.ticketOptions}>
            <View style={{ alignItems: "flex-end" }}>
              <Text styles={styles.quantityText}>
                تذكرة دخول (الحد الأقصى 6)
              </Text>
            </View>
            <View style={styles.ticketPriceContainer}>
              <View style={styles.quantity}>
                <Image
                  source={require("../../assets/minus-cirlce.png")}
                  style={{ marginHorizontal: 15 }}
                />
                <Text style={styles.quantityText}>5</Text>
                <Image
                  source={require("../../assets/add-circle.png")}
                  style={{ marginHorizontal: 15 }}
                />
              </View>
              <Text styles={styles.quantityText}>55.00 ريال</Text>
            </View>
          </View>
          <View style={styles.ticketOptions}>
            <View style={{ alignItems: "flex-end" }}>
              <Text styles={styles.quantityText}>
                تذكرة دخول مميزة (VIP) 4 أشخاص (الحد الأقصى 6)
              </Text>
            </View>
            <View style={styles.ticketPriceContainer}>
              <View style={styles.quantity}>
                <Image
                  source={require("../../assets/minus-cirlce.png")}
                  style={{ marginHorizontal: 15 }}
                />
                <Text style={styles.quantityText}>0</Text>
                <Image
                  source={require("../../assets/add-circle.png")}
                  style={{ marginHorizontal: 15 }}
                />
              </View>
              <Text styles={styles.quantityText}>300.00 ريال</Text>
            </View>
          </View>

          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>275.00 ريال</Text>
            <Text style={styles.totalText}>الإجمالي</Text>
          </View>
          <View style={styles.btnContainer}>
        <Button
          title="احجز تذكرتك"
          loading={false}
          loadingProps={{ size: "small", color: "#3D0087" }}
          buttonStyle={styles.Button}
          titleStyle={styles.ButtonText}
          containerStyle={styles.ButtonContainer}
          onPress={() => {
            navigation.navigate("PickFriends");
          }}
          />
      </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
    paddingRight:10,
  },
  bookText: {
    color: "#020004",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "IBMPlexSans-Regular", // Adjust font family name
  },
  container: {
    marginTop: 16,
  },
  stepContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  step: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -10,
  },
  finishedStep: {
    marginHorizontal: 10,
    color: "#0C001B",
    fontWeight: "400",
    fontSize: 12,
    fontFamily: "IBMPlexSans-Regular", // Adjust font family name

  },
  unfinishedStep: {
    marginHorizontal: 10,
    color: "#B5B1BA",
    fontWeight: "400",
    fontSize: 12,
    fontFamily: "IBMPlexSans-Regular", // Adjust font family name

  },
  pickTcketHeading: {
    justifyContent: "flex-end",
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "IBMPlexSans-Regular", // Adjust font family name

  },
  pickTcketContainer: {
    marginTop: 25,
    marginHorizontal: 20,
  },
  ticketOptions: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  ticketPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: "400",
    color: "#020004",
    fontFamily: "IBMPlexSans-Regular", // Adjust font family name

  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 45,
    borderTopWidth: 1,
    borderTopColor: "#A39EA9",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 10,
    color: "#020004",
    fontFamily: "IBMPlexSans-Regular", // Adjust font family name

  },
  btnContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  Button: {
    backgroundColor: "#19E578",
    borderRadius: 16,
    padding:12
  },
  ButtonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#3D0087",
    fontFamily: "IBMPlexSans-Regular", // Adjust font family name

  },
  ButtonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 350,
    marginVertical: 10,
  },
});

export default PickTicket;
