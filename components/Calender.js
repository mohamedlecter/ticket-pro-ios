import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Calender = ({event, onDateSelect}) => {
  const days = [
    { day: "الاحد", date: "29", month: "اكتوبر" },
    { day: "السبت", date: "28", month: "اكتوبر" },
    { day: "الجمعة", date: "27", month: "اكتوبر" },
    { day: "الخميس", date: "26", month: "اكتوبر" },
    { day: "الاربعاء", date: "25", month: "اكتوبر"},
  ];
  const [selectedDateIndex, setSelectedDateIndex] = useState(2);
  const [selected, setSelected] = useState(true)


  useEffect(() => {
    const defaultSelectedDate = days[selectedDateIndex];
    onDateSelect(defaultSelectedDate || days[4]);
  }, [])

  const handleOnpress = (index)=>{
    setSelectedDateIndex(index);
    setSelected(true)
    const selectedDate = days[index];
    onDateSelect(selectedDate || days[4]);  }

  return (
    <View style={styles.calenderContainer}>
      <View style={styles.locationContainer}>
        <Text style={styles.eventLocation}>{event.eventName}</Text>
      </View>

      <View style={styles.calender}>
        {days.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.calenderBtn,
              {
                backgroundColor: selected && selectedDateIndex === index ? "#64339F" : "#FFFFFF",
                marginRight: index === days.length - 1 ? 0 : 5,
              },
              
            ]}
            onPress={()=>handleOnpress(index)}

          >
            <Text style={[styles.monthText, { color: selected && selectedDateIndex === index ? "#FFFFFF" : "#0C001B" }]}>{item.month}</Text>
            <Text style={[styles.calenderText, { color: selected && selectedDateIndex === index ? "#FFFFFF" :"#0C001B" }]}>{item.date}</Text>
            <Text style={[styles.dayText, { color: selected && selectedDateIndex === index ? "#FFFFFF" :"#0C001B" }]}>{item.day}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calenderContainer: {
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  eventLocation: {
    color: "#0C001B",
    fontWeight: "400",
    fontSize: 20,
    fontFamily: "Dubai-Medium",
  },
  calender: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: 350,
  },
  calenderBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 60,
    height: 80,
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderColor: "white",
    borderWidth: 1,
  },
  calenderText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Dubai-Medium",
  },
  monthText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Dubai-Medium",
  },
  dayText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Dubai-Medium",
  },
});

export default Calender;

