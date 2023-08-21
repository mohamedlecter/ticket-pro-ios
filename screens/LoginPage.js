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
  Platform 
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@rneui/themed";
import Checkbox from "expo-checkbox";
import { login } from "../redux/actions/users";

const LoginPage = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.userReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);

  const handleLogin = async () => {
    if (email === "" || password === "") {
      setMsg("Please enter all fields");
    }
    try {
      await dispatch(login(email, password));
      // If login was successful, navigate to the Bottom Nav screen
      navigation.navigate("Bottom Nav");
    } catch (error) {
      setMsg("Invalid email or password");
    }
  };

  useEffect(() => {
    if (msg) {
      Alert.alert("Error", msg);
      setMsg(null);
    }
  }, [msg]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}  style={styles.container}>
      <Image source={require("../assets/loginPic3.png")} />

        <View style={styles.form}> 
        <Text style={styles.title}>تسجيل دخول</Text>

        <View style={styles.inputView}>
          <TextInput
            placeholder="الاسم"
            style={styles.TextInput}
            placeholderTextColor="#180036"
            onChangeText={(text) => setEmail(text)}
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
  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginVertical: 10,
  },
  TextInput: {
    height: 48,
    width: 350,
    color: "#180036",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    paddingRight: 10,
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
  },
  checkbox: {
    margin: 8,
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: "#19E578",
    borderRadius: 15,
  },
  loginButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#3D0087",
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
    fontSize: 18,
  },
  signInText: {
    color: "#413F44",
    fontSize: 18,
  },
});

export default LoginPage;