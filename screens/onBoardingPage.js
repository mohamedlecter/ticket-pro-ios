import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@rneui/themed";

const OnBoarding = ({ navigation }) => {
  const handleSignupPress = () => {
    navigation.navigate("Signup");
  };

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  const handleAdminLoginPress = () => {
    navigation.navigate("AdminLogin");
  };

  return (
    <LinearGradient
      colors={["#170036", "#7D21CF"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.imgContainer}>
        <Image source={require("../assets/loginPic1.png")} style={styles.img} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>تذاكر رقمية</Text>
        <Text style={styles.text}>لكل فعاليات الترفيه الأولى</Text>
        <Text style={styles.text}>من نوعها</Text>
      </View>

      <Button
        title="حساب جديد"
        loading={false}
        loadingProps={{ size: "small", color: "#3D0087" }}
        buttonStyle={styles.signupButton}
        titleStyle={styles.signupButtonText}
        containerStyle={styles.signupButtonContainer}
        onPress={handleSignupPress}
      />

      <TouchableOpacity style={styles.signUp} onPress={handleLoginPress}>
        <Text style={[styles.loginText]}> سجل دخولك</Text>
        <Text style={[styles.loginText, { color: "#F6F5F6" }]}>عندك حساب؟</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{marginBottom:-50}} onPress={handleAdminLoginPress}>
        <Text style={styles.adminLoginText}>سجل دخولك كمنظم</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    marginTop:70
  },
  img: {
    width: 250,
    height: 250,
  },
  textContainer: {
    marginTop: 50,
    width: 343,
    height: 150,
    alignItems: "stretch",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 29,
    fontWeight: "bold",
    lineHeight: 40,
    letterSpacing: 1,
    textAlign: "right",
    fontFamily: "IBMPlexSans-Regular", // Add this line to set the font family
  },
  signupButton: {
    backgroundColor: "#19E578",
    borderRadius: 16,
    padding:12
  },
  signupButtonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#3D0087",
    fontFamily: "IBMPlexSans-Regular"
  },
  signupButtonContainer: {
    width: 350,
    marginBottom:16
  },

  loginText: {
    color: "#19E578",
    fontSize: 15,
    fontFamily: "IBMPlexSans-Regular"
  },
  signUp: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
  },
  adminLoginText: {
    color: "#F6F5F6",
    fontSize: 15,
    fontFamily: "IBMPlexSans-Regular"

  },
});

export default OnBoarding;
