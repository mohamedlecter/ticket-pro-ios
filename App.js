import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./screens/Home";
import OnBoarding from "./screens/onBoardingPage";
import LoginPage from "./screens/LoginPage";
import SignupPage from "./screens/SignupPage";
import CompletedPurchase from "./screens/Event/CompletedPurchase";
import BottomNav from "./navigations/BottomNav";
import AdminLogin from "./screens/AdminLogin";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Signup" component={SignupPage} />
          <Stack.Screen name="AdminLogin" component={AdminLogin} />
          <Stack.Screen name="Bottom Nav" component={BottomNav} />
          <Stack.Screen
            name="CompletedPurchase"
            component={CompletedPurchase}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
