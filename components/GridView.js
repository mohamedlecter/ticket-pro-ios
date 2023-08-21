// import React from "react";
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Image,
//   Dimensions,
//   TouchableOpacity,
// } from "react-native";

// const GridView = ({ data, navigation }) => {
//   const calculateNumColumns = () => {
//     const screenWidth = Dimensions.get("window").width;
//     const itemWidth = 150; // Adjust the item width based on your desired layout
//     const numColumns = Math.floor(screenWidth / itemWidth);
//     return numColumns > 0 ? numColumns : 1;
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.gridItem}
//       onPress={() => navigation.navigate("EventInfo")}
//     >
//       <Image source={item.image} style={styles.image} />
//     </TouchableOpacity>
//   );

//   return (
//     <FlatList
//       data={data}
//       numColumns={calculateNumColumns()}
//       renderItem={renderItem}
//       keyExtractor={(item, index) => index.toString()}
//       contentContainerStyle={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 20,
//   },
//   gridItem: {
//     margin: 10,
//     borderRadius: 10,
//     overflow: "hidden",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default GridView;
// // import React from "react";
// // import {
// //   View,
// //   StyleSheet,
// //   Image,
// //   Dimensions,
// //   TouchableOpacity,
// // } from "react-native";

// // const GridView = ({ data, navigation }) => {
// //   const windowWidth = Dimensions.get("window").width;
// //   const itemWidth = windowWidth / 2; // Two items in a row

// //   const renderGridItem = (item, index) => {
// //     const isFirstItemInRow = index % 2 === 0;
// //     const itemStyle = isFirstItemInRow ? styles.firstItemInRow : styles.item;

// //     return (
// //       <TouchableOpacity
// //         key={index}
// //         style={[itemStyle]}
// //         onPress={() => navigation.navigate("EventInfo")}
// //       >
// //         <Image source={item.image} style={styles.image} />
// //       </TouchableOpacity>
// //     );
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {data.map((item, index) => renderGridItem(item, index))}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     paddingTop: 20,
// //     flexDirection: "row",
// //     flexWrap: "wrap",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   item: {
// //     marginRight: 10,
// //     marginBottom: 10,
// //     borderRadius: 10,
// //     overflow: "hidden",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   firstItemInRow: {
// //     marginRight: 10,
// //     marginBottom: 10,
// //     borderRadius: 10,
// //     overflow: "hidden",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   image: {
// //     // width: "100%",
// //     // height: "100%",
// //     // aspectRatio: 1, // To ensure each grid item maintains a square shape
// //     // resizeMode: "cover",
// //   },
// // });

// // export default GridView;
