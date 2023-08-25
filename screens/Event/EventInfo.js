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
import SvgUri from 'react-native-svg-uri';


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
          <SvgUri
          source={require("../../assets/arrow-left.svg")}
          fill="black" // Use fill to set the SVG color
          style={{ transform: [{ rotate: desClicked? "90deg" : "-90deg" }] }}

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
          <SvgUri
          source={require("../../assets/arrow-left.svg")}
          fill="black" // Use fill to set the SVG color
          style={{ transform: [{ rotate: '-90deg' }] }}

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
    fontFamily: "IBMPlexSans-Bold", // Adjust font family name

  },
  eventLocation: {
    fontSize: 14,
    color: "#413F44",
    fontWeight: "400",
    lineHeight: 15,
    marginLeft: 5,
    fontFamily: "IBMPlexSans-Bold", // Adjust font family name

  },
  eventDate: {
    color: "#413F44",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "IBMPlexSans-Bold", // Adjust font family name

  },
  price: {
    color: "#0C001B",
    fontSize: 18,
    fontWeight: "800",
    marginVertical: 10,
    justifyContent: "center",
    fontFamily: "IBMPlexSans-Bold", // Adjust font family name

  },
  desc: {
    color: "#0C001B",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    fontFamily: "IBMPlexSans-Regular", // Adjust font family name

  },
  eventDescContainer: {
    marginTop: 35,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  termsContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  eventDescHeading: {
    color: "#0C001B",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "IBMPlexSans-Regular", // Adjust font family name

  },
  eventDescText: {
    color: "#0C001B",
    fontSize: 14,
    fontWeight: "400",
    justifyContent: "center",
    textAlign:"right",
    fontFamily: "IBMPlexSans-Regular", // Adjust font family name

  },
  eventDesc: {
    alignItems:"flex-end"
  },
  terms: {
    color: "#0C001B",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "IBMPlexSans-Regular", // Adjust font family name

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
    fontFamily: "IBMPlexSans-Regular", // Adjust font family name

  },
  ButtonContainer: {
    marginHorizontal: 50,
    height: 50,
    width: 350,
    marginVertical: 10,
  },
});

export default EventInfo;
