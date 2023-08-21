import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import EventInfo from "../screens/Event/EventInfo";
import PickTicket from "../screens/Event/PickTicket";
import PickFriends from "../screens/Event/PickFriends";
import CompletePurchase from "../screens/Event/CompletePurchase";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EventInfo"
        component={EventInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickTicket"
        component={PickTicket}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickFriends"
        component={PickFriends}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompletePurchase"
        component={CompletePurchase}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
