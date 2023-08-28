import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";

const ImageCarousel = ({ images, navigation }) => {
  return (
    <View style={styles.imgsContainer}>
      <Swiper
        style={styles.wrapper}
        autoplay={true}
        autoplayTimeout={5}
        loop={true}
        showsPagination={false}
      >
        {images.map((image, index) => (
          <TouchableOpacity
            style={styles.slide}
            key={index}
            onPress={() => navigation.navigate("EventInfo", { eventId: "0" })}
          >
            <Image source={image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  imgsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {},
  slide: {
    justifyContent: "center",
    backgroundColor: "transparent",
    alignItems: "center",
    marginTop: 20,
  },
});

export default ImageCarousel;
