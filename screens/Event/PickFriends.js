import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Calender from "../../components/Calender";
import { Button } from "@rneui/base";

const friendsData = [
  { name: "سيف العتيبي", number: "966554155440" },
  { name: "عمر العصيمي", number: "966554155643" },
  { name: "رعد التميمي", number: "966554155555" },
];

const FriendItem = ({ name, number, isSelected, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.friend, isSelected && styles.selectedFriend]}
  >
    <View style={styles.friendDetails}>
      <Text style={styles.friendName}>{name}</Text>
      <Text style={styles.friendNumber}>{number}</Text>
    </View>
    <Image
      source={require("../../assets/profilePic.png")}
      style={{ resizeMode: "contain" }}
    />
  </TouchableOpacity>
);

export default function PickFriends({ navigation }) {
  const [selectedFriends, setSelectedFriends] = useState([]);

  const handleFriendClick = (friendIndex) => {
    if (selectedFriends.includes(friendIndex)) {
      setSelectedFriends(
        selectedFriends.filter((friend) => friend !== friendIndex)
      );
    } else {
      setSelectedFriends([...selectedFriends, friendIndex]);
    }
  };

  const isFriendSelected = (friendIndex) =>
    selectedFriends.includes(friendIndex);

  return (
    <ScrollView>
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => navigation.navigate("PickTicket")}>
          <Image
            source={require("../../assets/arrow-left.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <Text style={styles.bookText}>حجز الفعالية</Text>
        <Image
          source={require("../../assets/search-normal.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>

      <View style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../../assets/progreessBar2.png")} />
          <View style={styles.stepContainer}>
            <View style={styles.step}>
              <Text style={styles.unfinishedStep}>إتمام الشراء</Text>
              <Text style={styles.finishedStep}>اختيار الأصدقاء</Text>
              <Text style={styles.finishedStep}>اختيار التذاكر</Text>
              <Text style={styles.finishedStep}>تسجيل الدخول</Text>
            </View>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.eventLocation}>بوليفارد الرياض</Text>
        </View>

        <View style={styles.pickFriendContainer}>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.pickFriendHeading}>اختر أصدقائك</Text>
            <Text style={styles.pickFriendHeading2}>
              من هنا تقدر ترسل تذكرة هدية لأي شخص تبيه من أصدقائك.
            </Text>
          </View>

          {friendsData.map((friend, index) => (
            <FriendItem
              key={index}
              name={friend.name}
              number={friend.number}
              isSelected={isFriendSelected(index)}
              onPress={() => handleFriendClick(index)}
            />
          ))}

          <View style={styles.addFriendContainer}>
            <Button
              title="صديق جديد"
              loading={false}
              loadingProps={{ size: "small", color: "#3D0087" }}
              buttonStyle={styles.addFriendBtn}
              titleStyle={styles.addFriendBtnText}
              containerStyle={styles.addFriendBtnContainer}
              icon={<Image source={require("../../assets/profile-add.png")} />}
            />
          </View>

          <View style={styles.remainingTickets}>
            <View style={styles.row}>
              <Text style={{ fontWeight: "700", fontSize: 18 }}>4/5 تذاكر</Text>
              <Text style={{ fontWeight: "700", fontSize: 18 }}>
                عدد التذاكر المتبقية:
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text>التذاكر المتبقية ستضاف في صفحة تذاكري</Text>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <Button
              title="احجز تذكرتك"
              loading={false}
              loadingProps={{ size: "small", color: "#3D0087" }}
              buttonStyle={{
                backgroundColor: "#19E578",
                borderRadius: 15,
              }}
              titleStyle={{
                fontWeight: "bold",
                fontSize: 16,
                color: "#3D0087",
              }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 350,
                marginVertical: 10,
              }}
              onPress={() => {
                navigation.navigate("CompletePurchase");
              }}
            />
          </View>
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
    marginTop: 35,
    marginHorizontal: 10,
  },
  bookText: {
    color: "#020004",
    fontSize: 18,
    fontWeight: "400",
  },
  container: {
    marginTop: 16,
  },
  stepContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  step: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -10,
  },
  finishedStep: {
    marginHorizontal: 10,
    color: "#0C001B",
    fontWeight: "400",
    fontSize: 12,
  },
  unfinishedStep: {
    marginHorizontal: 10,
    color: "#B5B1BA",
    fontWeight: "400",
    fontSize: 12,
  },
  eventLocation: {
    marginTop: 10,
    color: "#0C001B",
    fontWeight: "400",
    fontSize: 20,
  },
  pickFriendContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  pickFriendHeading: {
    justifyContent: "flex-end",
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 8,
  },
  pickFriendHeading2: {
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 10,
  },
  selectedFriend: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#3D0087",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#D8CCE7",
    marginVertical: 5,
  },
  friend: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
    marginVertical: 5,
  },
  remainingTickets: {
    marginTop: 30,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  friendDetails: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginHorizontal: 10,
  },
  friendName: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000000",
  },
  friendNumber: {
    fontSize: 11,
    fontWeight: "400",
    color: "#413F44",
  },
  addFriendContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  addFriendBtn: {
    backgroundColor: "#ECE6F3",
    borderRadius: 10,
    justifyContent: "space-around",
  },
  addFriendBtnText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#0C001B",
  },
  addFriendBtnContainer: {
    height: 35,
    width: 120,
    marginVertical: 10,
  },
  row: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
});