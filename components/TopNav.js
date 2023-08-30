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
import SvgUri from 'react-native-svg-uri';


const windowWidth = Dimensions.get("window").width;

const TopNav = ({ isTicketPage, navigation }) => {
  const renderLeftIcon = () => {
    if (isTicketPage) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
         <SvgUri
          source={require("../assets/arrow-left.svg")}
          fill="black" // Use fill to set the SVG color
        />
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={{paddingLeft:8}}>

      <SvgUri
          source={require("../assets/notification.svg")}
          fill="black" // Use fill to set the SVG color
        />
        </View>

      )
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

        <SvgUri
        source={require("../assets/search-normal.svg")}
        fill="black" // Use fill to set the SVG color
      />
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
    paddingRight:10,
    
  },
});

export default TopNav;
