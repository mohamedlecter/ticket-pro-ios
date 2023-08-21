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
        <TouchableOpacity style={styles.filterButton1}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
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
    fontSize: 20,
    fontWeight: "bold",
  },
  filterButtonsContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  filterButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: "#827E87",
    borderWidth: 1,
    marginHorizontal: 5,
  },
  filterButton1: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#250051",
  },
  filterButtonText: {
    color: "#827E87",
    fontSize: 16,
    fontWeight: "bold",
  },
});
