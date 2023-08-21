import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tickt from "../screens/Ticket/Ticket";
import ActivateTicket from "../screens/Ticket/ActivateTicket";
import TicketInfo from "../components/admin/TicketInformation";
import ReadNfc from "../screens/Ticket/ReadNfc";

const Stack = createStackNavigator();

const TicketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ticket"
        component={Tickt}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Activate Ticket"
        component={ActivateTicket}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ticket Info"
        component={TicketInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Read Nfc"
        component={ReadNfc}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TicketStack;

const styles = StyleSheet.create({});
