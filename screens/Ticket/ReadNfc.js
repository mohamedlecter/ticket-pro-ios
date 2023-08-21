// // NFCWidget.js

// import React, { useEffect, useState } from "react";
// import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
// import { Button } from "@rneui/themed";

// const ReadNfc = ({ onClose }) => {
//   const [tag, setTag] = useState(null);
//   const { height, width } = Dimensions.get("screen");

//   const handleFinishButtonPress = () => {
//     onClose();
//   };
//   return (
//     <View
//       style={{
//         position: "absolute",
//         width: width - 30,
//         alignSelf: "center",
//         borderRadius: 8,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#fff",
//         paddingVertical: 20,
//         top: 130,
//       }}
//     >
//       <View
//         style={{
//           justifyContent: "center",
//           alignItems: "center",
//           padding: 20,
//         }}
//       >
//         <Text
//           style={{
//             textAlign: "center",
//             color: "#0C001B",
//             marginBottom: 40,
//             fontSize: 22,
//           }}
//         >
//           جاهز للمسح
//         </Text>
//         <Image
//           source={require("../../assets/scan.png")}
//           style={{
//             marginBottom: 40,
//           }}
//         />
//         <Text
//           style={{
//             textAlign: "center",
//             color: "#0C001B",
//             marginBottom: 40,
//             fontSize: 16,
//           }}
//         >
//           قرب جهازك من جهاز المنظم
//         </Text>
//         <View style={styles.btnContainer}>
//           <Button
//             title="إلغاء التفعيل"
//             loading={false}
//             loadingProps={{ size: "small", color: "#3D0087" }}
//             buttonStyle={{
//               backgroundColor: "#EDECEE",
//               borderRadius: 15,
//               padding: 10,
//             }}
//             titleStyle={{
//               fontWeight: "bold",
//               fontSize: 16,
//               color: "#212022",
//             }}
//             containerStyle={{
//               width: 300,
//             }}
//             onPress={handleFinishButtonPress}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default ReadNfc;

// const styles = StyleSheet.create({
//   btnContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NfcManager, { NfcTech } from "react-native-nfc-manager";

const ReadNfc = () => {
  const [nfcEnabled, setNfcEnabled] = useState(false);
  const [tag, setTag] = useState(null);

  useEffect(() => {
    NfcManager.start();
    return () => {
      NfcManager.stop();
    };
  }, []);

  const handleNfcStateChange = async () => {
    try {
      const isEnabled = await NfcManager.isEnabled();
      setNfcEnabled(isEnabled);
    } catch (error) {
      console.error("Error checking NFC state:", error);
    }
  };

  const handleNfcDiscovery = async () => {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      setTag(tag);
    } catch (error) {
      console.error("Error reading NFC tag:", error);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NFC Page</Text>
      <TouchableOpacity style={styles.button} onPress={handleNfcStateChange}>
        <Text style={styles.buttonText}>Check NFC State</Text>
      </TouchableOpacity>
      <Text style={styles.status}>
        NFC is {nfcEnabled ? "enabled" : "disabled"}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleNfcDiscovery}>
        <Text style={styles.buttonText}>Scan NFC Tag</Text>
      </TouchableOpacity>
      {tag && (
        <View style={styles.tagContainer}>
          <Text style={styles.tagText}>Tag UID: {tag.id}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3D0087",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
  },
  tagContainer: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#3D0087",
  },
  tagText: {
    fontSize: 16,
  },
});

export default ReadNfc;
