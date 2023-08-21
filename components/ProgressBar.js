import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = ({ progress, totalSteps }) => {
  const progressWidth = (progress / totalSteps) * 10;

  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progressWidth}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "100%",
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#19E578",
  },
});

export default ProgressBar;
