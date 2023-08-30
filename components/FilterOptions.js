import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

export default function FilterOptions() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.headingText}>فعالياتنا</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.filterButtonsContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>غنائية</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>رياضية</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>مباريات</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>موسم الرياض</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterButton, {backgroundColor:"#250051", marginRight:0}]}>
          <Text style={[styles.filterButtonText,{ color:"white"}]}>
            الكل
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    marginBottom: 10,
    justifyContent: "center",
    textAlign: "right",
    width: 350,
  },
  headingText: {
    fontSize: 16,
    fontFamily: "IBMPlexSans-Bold", // Adjust font family name
    fontWeight:"400"

  },
  filterButtonsContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  filterButton: {
    paddingHorizontal:16,
    paddingVertical:5,
    marginRight:5,
    borderRadius: 10,
    borderColor: "#827E87",
    borderWidth: 1,
  },
  filterButton1: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#250051",
  },
  filterButtonText: {
    color: "#827E87",
    fontSize: 11,
    fontWeight: "400",
    textAlign:"center",
    fontFamily: "Dubai-Medium", // Adjust font family name


  },
});
