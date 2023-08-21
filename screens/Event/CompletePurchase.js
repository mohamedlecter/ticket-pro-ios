import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Button } from "@rneui/base";
import { ScrollView } from "react-native";

export default function CompletePurchase({ navigation }) {
  const [isChecked, setChecked] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [ccv, setCCV] = useState("");
  const [expiration, setExpiration] = useState("");

  const handleGoBack = () => {
    navigation.navigate("PickTicket");
  };

  const handlePurchase = () => {
    navigation.navigate("CompletedPurchase");
  };

  return (
    <ScrollView>
      <View style={styles.topNav}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image
            source={require("../../assets/arrow-left.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.bookText}>حجز الفعالية</Text>
        <Image
          source={require("../../assets/search-normal.png")}
          style={styles.icon}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <Image source={require("../../assets/progressBar3.png")} />
          <View style={styles.stepContainer}>
            <Text style={styles.finishedStep}>إتمام الشراء</Text>
            <Text style={styles.finishedStep}>اختيار الأصدقاء</Text>
            <Text style={styles.finishedStep}>اختيار التذاكر</Text>
            <Text style={styles.finishedStep}>تسجيل الدخول</Text>
          </View>
        </View>

        <View style={styles.billContainer}>
          <View style={styles.billHeader}>
            <Text style={styles.billHeaderText}>الفاتورة</Text>
            <View style={styles.billItem}>
              <Text style={styles.billText}>233.75 ريال</Text>
              <Text style={styles.billText}>5X</Text>
              <Text style={styles.billText}>بوليفارد الرياض</Text>
            </View>
            <View style={[styles.billItem, { marginBottom: 24 }]}>
              <Text style={styles.billText}>41.25 ريال</Text>
              <Text style={[styles.billText, { marginRight: 20 }]}>15%</Text>
              <Text style={styles.billText}>الضريبة</Text>
            </View>
          </View>
          <View style={styles.total}>
            <Text style={styles.totalText}>275 ريال</Text>
            <Text style={styles.totalText}>الإجمالي:</Text>
          </View>
        </View>

        <View style={styles.paymentContainer}>
          <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
            <Text style={styles.paymentText}>الدفع</Text>
            <View style={styles.checkboxContainer}>
              <Text style={styles.label}>إستخدم رصيد المحفظة (200 ريال)</Text>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
              />
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={require("../../assets/payment.png")} />
              <View style={styles.cardInputContainer}>
                <TextInput
                  placeholder="رقم البطاقة"
                  style={styles.cardInput}
                  placeholderTextColor="#180036"
                  value={cardNumber}
                  onChangeText={setCardNumber}
                />
              </View>
            </View>
            <View style={styles.expiryContainer}>
              <View style={styles.ccv}>
                <Image source={require("../../assets/ccv.png")} />
                <TextInput
                  placeholder="CCV"
                  style={styles.ccvText}
                  placeholderTextColor="#180036"
                  value={ccv}
                  onChangeText={setCCV}
                />
              </View>
              <View style={styles.cardExpiryDate}>
                <TextInput
                  placeholder="MM/YY"
                  style={styles.ccvText}
                  placeholderTextColor="#180036"
                  value={expiration}
                  onChangeText={setExpiration}
                />
              </View>
            </View>
          </View>
          <Button
            loading={false}
            loadingProps={{ size: "small", color: "#3D0087" }}
            buttonStyle={styles.applePayButton}
            containerStyle={styles.buttonContainer}
            onPress={handleGoBack}
            icon={<Image source={require("../../assets/applePay.png")} />}
          />
          <Button
            title="شراء الآن"
            loading={false}
            loadingProps={{ size: "small", color: "#3D0087" }}
            buttonStyle={styles.purchaseButton}
            titleStyle={styles.purchaseButtonText}
            containerStyle={styles.buttonContainer}
            onPress={handlePurchase}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 10,
  },
  icon: {
    // width: 30,
    // height: 30,
  },
  bookText: {
    color: "#020004",
    fontSize: 18,
    fontWeight: "400",
  },
  container: {
    marginTop: 16,
    marginHorizontal: 20,
  },
  progressContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  stepContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  finishedStep: {
    marginHorizontal: 10,
    color: "#0C001B",
    fontWeight: "400",
    fontSize: 12,
  },
  billContainer: {
    marginTop: 20,
  },
  billHeader: {
    borderBottomColor: "#827E87",
    borderBottomWidth: 1,
    borderStyle: "dashed",
  },
  billHeaderText: {
    fontSize: 28,
    fontWeight: "400",
    marginBottom: 16,
    textAlign: "right",
  },
  billItem: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  billText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#0C001B",
    textAlign: "center",
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0C001B",
  },
  paymentContainer: {
    marginTop: 32,
  },
  paymentText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#0C001B",
    textAlign: "right",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 16,
  },
  label: {
    fontSize: 16,
    color: "#180036",
    fontWeight: "400",
    textAlign: "right",
  },
  checkbox: {
    marginLeft: 8,
    borderRadius: 7,
  },
  applePayButton: {
    backgroundColor: "#020004",
    borderRadius: 15,
    padding: 16,
  },
  buttonContainer: {
    // marginVertical: 10,
  },
  purchaseButton: {
    backgroundColor: "#19E578",
    borderRadius: 15,
    padding: 10,
    marginVertical: 16,
  },
  purchaseButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#3D0087",
    textAlign: "center",
  },
  cardContainer: {
    marginTop: 16,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#3D0087",
    borderWidth: 1,
    borderRadius: 16,
    padding: 8,
    backgroundColor: "#FFFFFF",
  },
  cardInputContainer: {
    alignItems: "flex-end",
  },
  cardInput: {
    fontSize: 14,
    fontWeight: "400",
    color: "#180036",
    marginRight: 5,
  },
  expiryContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 16,
    width: "100%",
  },
  ccv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#DAD8DD",
    borderWidth: 1,
    borderRadius: 16,
    padding: 10,
    backgroundColor: "#FFFFFF",
    width: "48%",
  },
  cardExpiryDate: {
    borderColor: "#DAD8DD",
    borderWidth: 1,
    borderRadius: 16,
    padding: 10,
    backgroundColor: "#FFFFFF",
    width: "48%",
  },
  ccvText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#180036",
    textAlign: "right",
  },
});
