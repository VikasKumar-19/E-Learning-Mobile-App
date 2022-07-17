import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuBar from "../components/MenuBar";

const Home = () => {
  const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus accusamus perferendis consectetur cupiditate dolore minima quam omnis, ipsa aliquam ea atque, facilis iure laudantium aspernatur, distinctio odio! Aperiam, aliquam!`;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image resizeMode="contain" source={require('../../assets/home_main_image.jpg')} style={styles.headerImage} />
        <Text style={styles.mainHeader}>Welcome To</Text>
        <Text style={styles.mainHeader}>E-Learning by Vikas</Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
      {/* <View style={styles.menuBar}>
        <MenuBar />
      </View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    paddingHorizontal: 20,
  },
  homeTop: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
  },
  headerImage:{
    height: "auto",
    width: "100%",
    aspectRatio: 2,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 100
  },
  mainHeader:{
    textTransform: "uppercase",
    color: '#78002e',
    fontSize: 30,
  },
  paraStyle:{
    fontSize: 16,
    color: "#353b48",
    fontStyle: "italic",
    marginTop: 20,
    lineHeight: 28,
  },
  menuBar:{
    paddingVertical: 20,
    marginBottom: 10,
    backgroundColor: "red",
  }
});
