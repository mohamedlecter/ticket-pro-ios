import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ticket from "../screens/Ticket/Ticket";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import TicketStack from "./TicketStack";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <>
    <Tab.Navigator
      initialRouteName="HomeTab"
      barStyle={{  margin:10 }} //This is where you can manipulate its look. 
      screenOptions={({ route }) => ({
        tabBarStyle: {
          borderTopWidth: 0, // Remove top border
          height: 100, // Adjust the overall height of the tab bar
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconSource;
          // Determine the icon source based on the route name
          switch (route.name) {
            case "SettingsTab":
              iconSource = require("../assets/settingNav.png");
              break;
            case "ProfileTab":
              iconSource = require("../assets/profileNav.png");
              break;
            case "TicketTab":
              iconSource = require("../assets/ticketNav.png");
              break;
            case "HomeTab":
              iconSource = require("../assets/homeNav.png");
              break;
            default:
              iconSource = null;
          }
          const tintColor = focused ? "#3D0087" : "#A39EA9";
          return <Image source={iconSource} style={{ tintColor }} />;
        },
        
      })}
    >
      <Tab.Screen name="SettingsTab" component={Settings} />
      <Tab.Screen name="ProfileTab" component={Profile} />
      <Tab.Screen name="TicketTab" component={TicketStack} />
      <Tab.Screen name="HomeTab" component={HomeStack} />
    </Tab.Navigator>
  </>
  );
};

export default BottomTabs;
