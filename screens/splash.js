import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Onboarding");
  };

  return (
    <View style={styles.container}>
      <Text>test</Text>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={require("../assets/logo.png")}
          resizeMode="center"
          style={{ width: 150, height: 150 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
