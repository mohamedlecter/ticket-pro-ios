import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";
import { useState, useEffect } from "react";
import { Button } from "@rneui/themed";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../redux/actions/users";
import { MaterialIcons } from "@expo/vector-icons";
import SvgUri from "react-native-svg-uri";
import DatePicker from "@react-native-community/datetimepicker";

const AdminLogin = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { isAdmin } = useSelector((state) => state.userReducer);
  const [adminId, setAdminId] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [msg, setMsg] = useState(null);

  const handleLogin = async () => {
    if (adminId === "" || birthdate === "") {
      setMsg("Please enter all fields");
    }
    try {
      await dispatch(loginAdmin(adminId, birthdate));
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        setMsg(error.response.data.msg); // Set error message from server
      } else {
        setMsg("Invalid admin Id or Birth date");
      }
    }
  };
  useEffect(() => {
    if (isAdmin) {
      navigation.navigate("Bottom Nav");
    }
  }, [isAdmin, navigation]);

  useEffect(() => {
    if (msg) {
      Alert.alert("Error", msg);
      setMsg(null); // Clear the error message
    }
  }, [msg]);

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <SvgUri
          source={require("../assets/arrow-left.svg")}
          fill="black" // Use fill to set the SVG color
        />
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
        />
        <SvgUri
          source={require("../assets/search-normal.svg")}
          fill="black" // Use fill to set the SVG color
        />
      </View>
      <View style={styles.form}>
        <Text
          style={{
            color: "#0C001B",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "right",
            marginVertical: 10,
            fontFamily: "Dubai-Medium",
          }}
        >
          التسجيل كمنظم{" "}
        </Text>

        <View style={styles.inputView}>
          <TextInput
            placeholder="الهوية"
            style={styles.TextInput}
            placeholderTextColor="#180036"
            onChangeText={(text) => setAdminId(text)}
          />
        </View>

        <View
          style={[
            styles.inputView,
            { justifyContent: "center", alignItems: "flex-end" },
          ]}
        >
          <DatePicker
            style={styles.DatePicker}
            value={birthdate ? new Date(birthdate) : new Date()} // Use null or a valid date as the initial value
            mode="date"
            display="default"
            minimumDate={new Date("1930-01-01")}
            maximumDate={new Date()}
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || birthdate;
              setBirthdate(currentDate.toISOString().split("T")[0]);
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderRadius: 10,
              borderColor: "#DAD8DD",
              borderWidth: 1,
              padding: 10,
              width: "49%",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../assets/female.png")}
                style={styles.img}
              />
              <Text style={{ color: "#C8C5CB", fontSize: 14 }}>انثى</Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 10,
              borderColor: "#3D0087",
              borderWidth: 1,
              padding: 10,
              width: "49%",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../assets/male.png")}
                style={styles.img}
              />
              <Text style={{ color: "#180036", fontSize: 14 }}>ذكر</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 16, alignItems: "flex-end" }}>
          <Text
            style={{
              color: "#180036",
              fontSize: 14,
              fontFamily: "Dubai-Medium",
            }}
          >
            *رفع الطلب لا يعني القبول
          </Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="سجل كمنظم"
          loading={false}
          loadingProps={{ size: "small", color: "#3D0087" }}
          buttonStyle={styles.Button}
          titleStyle={styles.ButtonText}
          containerStyle={styles.ButtonContainer}
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};

export default AdminLogin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F5F6",
    alignItems: "center",
    justifyContent: "center",
  },
  topNav: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    justifyContent: "space-between",
    width: 370,
    paddingRight: 10,
  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginVertical: 16,
    alignItems: "flex-end",
  },
  TextInput: {
    height: 48,
    width: 350,
    color: "#180036",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    paddingRight: 10,
    fontFamily: "Dubai-Medium",
  },
  signUp: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  form: {
    width: 348,
    marginBottom: 260,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 7,
  },
  label: {
    fontSize: 15,
    color: "#180036",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontFamily: "Dubai-Medium",
  },
  checkbox: {
    margin: 8,
  },
  img: {
    marginBottom: 5,
  },
  DatePicker: {
    height: 48,
    borderWidth: 0, // Remove the border since DatePicker has its own style
  },
  dateInput: {
    borderWidth: 0, // Remove the border around the date input field
  },
  datePlaceholderText: {
    color: "#180036",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left", // Align the placeholder text to the right
    marginRight: -60,
    fontFamily: "Dubai-Medium",
  },
  dateText: {
    color: "#180036",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    marginRight: -40,
    fontFamily: "Dubai-Medium",
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  Button: {
    backgroundColor: "#19E578",
    borderRadius: 16,
    padding: 12,
  },
  ButtonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#3D0087",
    fontFamily: "Dubai-Medium",
  },
  ButtonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 350,
    marginVertical: 10,
  },
});
