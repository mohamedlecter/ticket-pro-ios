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
      colors={["#7D21CF", "#170036"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.imgContainer}>
        <Image source={require("../assets/loginPic1.png")} style={styles.img} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>تذاكر رقمية</Text>
        <Text style={styles.text}> لكل فعاليات الترفيه الأولى</Text>
        <Text style={styles.text}>من نوعها</Text>
      </View>
      <View style={{marginTop:30, alignItems:"center"}}>

      <Button
        title="حساب جديد"
        loading={false}
        loadingProps={{ size: "small", color: "#3D0087" }}
        buttonStyle={styles.signupButton}
        titleStyle={styles.signupButtonText}
        containerStyle={styles.signupButtonContainer}
        onPress={handleSignupPress}
      />

      <TouchableOpacity style={styles.loginContainer} onPress={handleLoginPress}>
        <Text style={styles.loginText}> سجل دخولك</Text>
        <Text style={[styles.loginText, { color: "#F6F5F6" }]}>عندك حساب؟</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.adminLoginContainer} onPress={handleAdminLoginPress}>
        <Text style={styles.adminLoginText}>سجل دخولك كمنظم</Text>
      </TouchableOpacity>
      </View>

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
    marginTop: 70,
  },
  img: {
    width: 250,
    height: 250,
  },
  textContainer: {
    marginTop: 50,
    alignItems: "flex-end",
    marginLeft:60
  },
  text: {
    color: "#FFFFFF",
    fontSize: 29,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
    fontFamily: "Dubai-Medium",
  },
  signupButton: {
    backgroundColor: "#19E578",
    borderRadius: 16,
    padding: 12,
  },
  signupButtonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#3D0087",
    fontFamily: "Dubai-Medium",
  },
  signupButtonContainer: {
    width: 350,
    marginTop: 16,
  },
  loginContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  loginText: {
    color: "#19E578",
    fontSize: 15,
    fontFamily: "Dubai-Medium",
  },
  adminLoginContainer: {
    marginTop: 20,
  },
  adminLoginText: {
    color: "#F6F5F6",
    fontSize: 15,
    fontFamily: "Dubai-Medium",
  },
});

export default OnBoarding;
