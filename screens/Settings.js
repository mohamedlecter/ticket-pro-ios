import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/users"; // Import your logout action
import { Button } from "@rneui/themed";


export default function Settings({navigation}) {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout()); // Dispatch your logout action here
    navigation.navigate("OnBoarding");
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Button
          title="تسجيل خروج"
          loading={false}
          loadingProps={{ size: "small", color: "#3D0087" }}
          buttonStyle={styles.loginButton}
          titleStyle={styles.loginButtonText}
          containerStyle={styles.loginButtonContainer}
          onPress={handleSignOut}
          />
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 600,
  },
  loginButton: {
    backgroundColor: "#19E578",
    borderRadius: 16,
    padding:12
  },
  loginButtonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#3D0087",
    fontFamily: "IBMPlexSans-Regular", // Adjust font family name

  },
  loginButtonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 350,
    marginVertical: 10,
  },
  
});
