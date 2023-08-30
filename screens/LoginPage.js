import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@rneui/themed";
import Checkbox from "expo-checkbox";
import { login } from "../redux/actions/users";

const LoginPage = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.userReducer);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);

  const handleLogin = async () => {
    if (name === "" || password === "") {
      setMsg("Please enter all fields");
      return;
    }
    try {
      await dispatch(login(name, password));
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        setMsg(error.response.data.msg); // Set error message from server
      } else {
        setMsg("Invalid name or password"); // Default error message
      }
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigation.navigate("Bottom Nav");
    }
  }, [isAuth, navigation]);

  useEffect(() => {
    if (msg) {
      Alert.alert("Error", msg);
      setMsg(null); // Clear the error message
    }
  }, [msg]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image source={require("../assets/loginPic3.png")} />

      <View style={styles.form}>
        <Text style={styles.title}>تسجيل دخول</Text>

        <View style={styles.inputView}>
          <TextInput
            placeholder="الاسم"
            style={styles.TextInput}
            placeholderTextColor="#180036"
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="كلمة المرور"
            style={styles.TextInput}
            placeholderTextColor="#180036"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>احفظ كلمة المرور</Text>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
        </View>
      </View>

      <View style={styles.btnContainer}>
        <Button
          title="تسجيل دخول"
          loading={false}
          loadingProps={{ size: "small", color: "#3D0087" }}
          buttonStyle={styles.loginButton}
          titleStyle={styles.loginButtonText}
          containerStyle={styles.loginButtonContainer}
          onPress={handleLogin}
        />
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.signUpText}>سجل دخولك</Text>
          <Text style={styles.signInText}>ماعندك حساب؟</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F5F6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginVertical: 10,
    borderWidth:0.5,
    borderColor:"#DAD8DD",
    borderRadius: 16,
  },
  TextInput: {
    height: 48,
    width: 350,
    color: "#180036",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    paddingRight: 10,
    fontFamily: "Dubai-Medium", // Adjust font family name
  },
  form: {
    width: 348,
  },
  title: {
    color: "#0C001B",
    fontSize: 27,
    fontWeight: "800",
    textAlign: "right",
    marginVertical: 10,
    fontFamily: "Dubai-Medium", // Adjust font family name
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 7,
  },
  label: {
    fontSize: 16,
    color: "#180036",
    fontWeight: "400",
    textAlign: "right",
    fontFamily: "Dubai-Medium", // Adjust font family name
  },
  checkbox: {
    margin: 8,
    borderRadius: 7,
  },
  btnContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  loginButton: {
    backgroundColor: "#19E578",
    borderRadius: 16,
    padding: 12,
  },
  loginButtonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#3D0087",
    fontFamily: "Dubai-Medium", // Adjust font family name
  },
  loginButtonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 350,
    marginVertical: 10,
  },
  signUp: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  signUpText: {
    color: "#3D0087",
    fontSize: 15,
    fontFamily: "Dubai-Medium", // Adjust font family name
  },
  signInText: {
    color: "#413F44",
    fontSize: 15,
    fontFamily: "Dubai-Medium", // Adjust font family name
  },
});

export default LoginPage;
