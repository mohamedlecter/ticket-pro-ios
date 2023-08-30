// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import NfcManager, { NfcTech } from "react-native-nfc-manager";

// const ReadNfc = () => {
//   const [nfcEnabled, setNfcEnabled] = useState(false);
//   const [tag, setTag] = useState(null);

//   useEffect(() => {
//     NfcManager.start();
//     return () => {
//       NfcManager.stop();
//     };
//   }, []);

//   const handleNfcStateChange = async () => {
//     try {
//       const isEnabled = await NfcManager.isEnabled();
//       setNfcEnabled(isEnabled);
//     } catch (error) {
//       console.error("Error checking NFC state:", error);
//     }
//   };

//   const handleNfcDiscovery = async () => {
//     try {
//       await NfcManager.requestTechnology(NfcTech.Ndef);
//       const tag = await NfcManager.getTag();
//       setTag(tag);
//     } catch (error) {
//       console.error("Error reading NFC tag:", error.message); // Log the actual error message
//     } finally {
//       NfcManager.cancelTechnologyRequest();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>NFC Page</Text>
//       <TouchableOpacity style={styles.button} onPress={handleNfcStateChange}>
//         <Text style={styles.buttonText}>Check NFC State</Text>
//       </TouchableOpacity>
//       <Text style={styles.status}>
//         NFC is {nfcEnabled ? "enabled" : "disabled"}
//       </Text>
//       <TouchableOpacity style={styles.button} onPress={handleNfcDiscovery}>
//         <Text style={styles.buttonText}>Scan NFC Tag</Text>
//       </TouchableOpacity>
//       {tag && (
//         <View style={styles.tagContainer}>
//           <Text style={styles.tagText}>Tag UID: {tag.id}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: "#3D0087",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
//   status: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   tagContainer: {
//     marginTop: 20,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 5,
//     borderColor: "#3D0087",
//   },
//   tagText: {
//     fontSize: 16,
//   },
// });

// export default ReadNfc;

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';

// Pre-step, call this before any NFC operations
NfcManager.start();

function App() {
  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={readNdef}>
        <Text>Scan a Tag</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
