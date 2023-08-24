import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import TopNav from "../../components/TopNav";
import { Button } from "@rneui/themed";

const EventInfo = ({ navigation }) => {
  const [desClicked, setDesClicked] = useState(false);
  let isTicketPage = true;

  const handleDesClick = () => {
    setDesClicked(!desClicked);
  };

  return (
    <ScrollView>
      <TopNav isTicketPage={isTicketPage} navigation={navigation} />

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/event1.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.eventTitleContainer}>
          <View style={styles.eventHeading}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/location.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={styles.eventLocation}>الرياض</Text>
            </View>
            <Text style={styles.eventTitle}>بوليفارد الرياض</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.eventDate}>25 اكتوبر - 30 ديسمبر</Text>
          <Text style={styles.price}>تبدأ من 55.00 ريال</Text>

          <Text style={styles.desc}>
            من 6م-1ص ايام الاسبوع (تغلق البوابات الساعه ١2ص){" "}
          </Text>
          <Text style={styles.desc}>
            من 6م-٢ص نهاية الاسبوع (تغلق البوابات ١ص)
          </Text>
        </View>
        <View style={styles.eventDescContainer}>
          <TouchableOpacity onPress={handleDesClick}>
            <Image
              source={require("../../assets/arrow-down.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>

          <Text style={styles.eventDescHeading}>وصف الفعالية</Text>
        </View>

        {desClicked && (
        <View style={styles.eventDesc}>
        <Text style={styles.eventDescText}>
              كل شي فيه فوق الخيال، بشاشاته العملاقة المضيئة اللي تستحضر روح
              التايم السكوير، وزواياه اللي مليانة فعاليات مثل النافورة الراقصة
              والحدائق، وعدد كبير من المتاجر والمطاعم العالمية والمحلية.
              بالإضافة لمسارح موعودين فيها بعروض من الخيال، وأكبر دار سينما في
              المملكة العربية السعودية. بيستقبل البوليڤارد زوّاره كل يوم بحُب
              وحماس، عشان يعيشون تجربة ماراح تتكرر، وخيال أكبر من الخيالات اللي
              تصوروها.
            </Text>
          </View>
        )}

        <View style={styles.termsContainer}>
          <Image
            source={require("../../assets/arrow-down.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.terms}>الشروط والأحكام</Text>
        </View>
        <View style={styles.btnContainer}>
        <Button
          title="احجز تذكرتك"
          loading={false}
          loadingProps={{ size: "small", color: "#3D0087" }}
          buttonStyle={styles.Button}
          titleStyle={styles.ButtonText}
          containerStyle={styles.ButtonContainer}
          onPress={() => {
            navigation.navigate("PickTicket");
          }}
          />
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -100,
  },
  container: {
    marginHorizontal: 20,
  },
  eventTitleContainer: {
    marginTop: 35,
  },
  eventHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eventTitle: {
    fontSize: 22,
    color: "#0C001B",
    fontWeight: "400",
    lineHeight: 30,
  },
  eventLocation: {
    fontSize: 14,
    color: "#413F44",
    fontWeight: "400",
    lineHeight: 15,
    marginLeft: 5,
  },
  eventDate: {
    color: "#413F44",
    fontSize: 14,
    fontWeight: "400",
  },
  price: {
    color: "#0C001B",
    fontSize: 18,
    fontWeight: "800",
    marginVertical: 10,
    justifyContent: "center",
  },
  desc: {
    color: "#0C001B",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
  eventDescContainer: {
    marginTop: 35,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
  },
  termsContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  eventDescHeading: {
    color: "#0C001B",
    fontSize: 18,
    fontWeight: "400",
  },
  eventDescText: {
    color: "#0C001B",
    fontSize: 14,
    fontWeight: "400",
    justifyContent: "center",
    textAlign:"right"
  },
  eventDesc: {
    marginBottom: 10,
    alignItems:"flex-end"
  },
  terms: {
    color: "#0C001B",
    fontSize: 18,
    fontWeight: "400",
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  Button: {
    backgroundColor: "#19E578",
    borderRadius: 16,
    padding:12
  },
  ButtonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#3D0087",
  },
  ButtonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 350,
    marginVertical: 10,
  },
});

export default EventInfo;
