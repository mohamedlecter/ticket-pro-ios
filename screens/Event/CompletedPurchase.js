import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@rneui/base";

export default function CompletedPurchase({ navigation }) {
  return (
    <LinearGradient
      colors={["#7D21CF", "#170036"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={require("../../assets/close.png")} />
        </TouchableOpacity>
        <Image
          source={require("../../assets/logo.png")}
          resizeMode="center"
          style={{ width: 60, height: 60 }}
        />
        <Image source={require("../../assets/send.png")} />
      </View>
      <View style={styles.container}>
        <View>
          <Image source={require("../../assets/compledPurchaes.png")} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>تم شراء التذاكر</Text>
          <Text style={styles.text}>
            تقدر تشوف التفاصيل في صفحة تذاكري أو تشارك {"\n"}حماسك في تويتر.
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Button
            title="تذاكري"
            loading={false}
            loadingProps={{ size: "small", color: "#3D0087" }}
            buttonStyle={styles.Button}
            titleStyle={styles.ButtonText}
            containerStyle={styles.ButtonContainer}
            onPress={() => navigation.navigate("TicketTab")} // change to homepage
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    paddingRight:10,
  },
  container: {
    flex: 1,
  },

  textContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  text: {
    color: "#F6F5F6",
    fontSize: 15,
    fontWeight: "400",
    textAlign:"right",
    fontFamily: "IBMPlexSans-Regular"

  },
  heading: {
    color: "#F6F5F6",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "IBMPlexSans-Bold"

  },
  btnContainer: {
    alignItems: "center",
    marginTop: 6,
  },
  Button: {
    backgroundColor: "#19E578",
    borderRadius: 16,
    padding:15
  },
  ButtonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#3D0087",
    fontFamily: "IBMPlexSans-Regular"

  },
  ButtonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 350,
    marginVertical:10
  },
});
