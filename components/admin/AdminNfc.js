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
            <Text style={styles.description}>قرب جهازك من جهاز المنظم</Text>
            <View style={styles.btnContainer}>
              <Button
                title="إلغاء التفعيل"
                loading={false}
                loadingProps={{ size: "small", color: "#3D0087" }}
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
                containerStyle={styles.buttonContainer}
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
    paddingBottom: 20,
    margin: 16,
  },
  title: {
    textAlign: "center",
    color: "#0C001B",
    marginBottom: 40,
    fontSize: 22,
  },
  image: {
    marginBottom: 40,
  },
  description: {
    textAlign: "center",
    color: "#0C001B",
    marginBottom: 40,
    fontSize: 16,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#EDECEE",
    borderRadius: 15,
    padding: 10,
  },
  buttonTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#212022",
  },
  buttonContainer: {
    width: 300,
  },
});

export default AdminNfc;
