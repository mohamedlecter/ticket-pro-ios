import React from "react";
import { View, Text, Dimensions, Image, StyleSheet, Modal } from "react-native";
import { Button } from "@rneui/themed";

const AdminNfc = ({ onClose, visible }) => {
  const { height, width } = Dimensions.get("screen");

  const handleFinishButtonPress = () => {
    onClose();
  };

  return (

    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={handleFinishButtonPress}
    >
      <View style={styles.modalContainer}>
        <View style={[styles.container, { width: width - 30, top: height * 0.23 }]}>
          <View style={styles.content}>
            <Text style={styles.title}>جاهز للمسح</Text>
            <Image source={require("../../assets/scan.png")} style={styles.image} />
            <Text style={styles.description}>قرب جهازك من جهاز الزائر</Text>
            <View style={styles.btnContainer}>
              <Button
                title="إلغاء التفعيل"
                loading={false}
                loadingProps={{ size: "small", color: "#3D0087" }}
                buttonStyle={styles.Button}
                titleStyle={styles.ButtonText}
                containerStyle={styles.ButtonContainer}
                onPress={handleFinishButtonPress}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background behind the modal
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignSelf: "center",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
  },
  title: {
    textAlign: "center",
    color: "#0C001B",
    marginBottom: 40,
    fontSize: 22,
    fontFamily: "Dubai-Medium"
  },
  image: {
    marginBottom: 40,
  },
  description: {
    textAlign: "center",
    color: "#0C001B",
    marginBottom: 20,
    fontSize: 16,
    fontFamily: "Dubai-Medium"
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  Button: {
    backgroundColor: "#EDECEE",
    borderRadius: 16,
    padding:12
  },
  ButtonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#212022",
    fontFamily: "IBMPlexSans-Bold", // Adjust font family name

  },
  ButtonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 300,
    marginVertical: 10,
  },
});

export default AdminNfc;
