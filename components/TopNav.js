import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

const TopNav = ({ isTicketPage, navigation }) => {
  const renderLeftIcon = () => {
    if (isTicketPage) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name="chevron-left" size={30} />
        </TouchableOpacity>
      );
    } else {
      return <MaterialIcons name="notifications-none" size={30} />;
    }
  };

  return (
    <View style={styles.topContainer}>
      <View style={styles.topNav}>
        {renderLeftIcon()}
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
        />

        <MaterialIcons name="search" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#EB5E28",
    width: windowWidth,
    height: 225,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 10,
  },
});

export default TopNav;
