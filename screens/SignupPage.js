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
import Checkbox from "expo-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@rneui/themed";
import { signup } from "../redux/actions/users";

const SignupPage = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.userReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState(null);

  const handleSignup = async () => {
    if (name === "" || email === "" || password === "" || phone === "") {
      setMsg("Please enter all fields");
    } else {
      try {
        await dispatch(signup(name, email, password, phone));
        // If signup was successful, navigate to the login page
        navigation.navigate("Login");
      } catch (error) {
        setMsg("An error occurred during signup");
      }
    }
  };

  useEffect(() => {
    if (msg) {
      Alert.alert("Error", msg);
      setMsg(null);
    }
  }, [msg]);

  return (
    <KeyboardAvoidingView behavior={Platform.Os == "ios" ? "padding" : "height"} style={styles.container}>
      <Image source={require("../assets/loginPic2.png")} style={styles.image} />

      <View style={styles.form}>
        <Text style={styles.title}>حساب جديد</Text>
        <TextInput
          placeholder="الاسم"
          style={styles.input}
          placeholderTextColor="#180036"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="الايميل"
          style={styles.input}
          placeholderTextColor="#180036"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="رقم الجوال"
          style={styles.input}
          placeholderTextColor="#180036"
          onChangeText={(text) => setPhone(text)}
        />
        <TextInput
          placeholder="كلمة المرور"
          style={styles.input}
          placeholderTextColor="#180036"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>أوافق على شروط وأحكام تكت برو</Text>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="حساب جديد"
          loading={false}
          loadingProps={{ size: "small", color: "#3D0087" }}
          buttonStyle={styles.signupButton}
          titleStyle={styles.signupButtonText}
          containerStyle={styles.signupButtonContainer}
          onPress={handleSignup}
        />
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.signInText}>سجل دخولك </Text>
          <Text style={styles.haveAccountText}>عندك حساب؟</Text>
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
    marginTop:50
  },
  image: {
    marginTop: -70,
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
  input: {
    height: 48,
    width: 350,
    color: "#180036",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    paddingRight: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginVertical: 10,
    borderWidth:0.5,
    borderColor:"#DAD8DD"
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
    borderRadius: 7,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
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
  },
  signupButtonContainer: {
    width: 350,
    marginBottom:16
  },
  signIn: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  signInText: {
    color: "#3D0087",
    fontSize: 18,
  },
  haveAccountText: {
    color: "#413F44",
    fontSize: 18,
  },
});

export default SignupPage;
