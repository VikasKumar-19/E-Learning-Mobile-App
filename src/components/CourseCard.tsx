import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import { JosefinSans_600SemiBold } from "@expo-google-fonts/josefin-sans";

interface IProps {
  image?: ImageSourcePropType;
  title: string | undefined;
  desc: string | undefined;
  buttonText: string;
  priceText?: string | undefined
  navigateHandler: ()=>void;
  children?: ReactNode
}

const CourseCard = ({image, title, desc, navigateHandler, buttonText, priceText, children}:IProps) => {
  return (
    <View style={styles.courseContainer}>
      <View style={styles.cardImgContainer}>
        {image && <Image style={styles.cardImage} source={image} />}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.mainHeader}>{title}</Text>
        <Text style={styles.description}>{desc}</Text>
        {children && <View style={styles.subCourseContainer}>
          <Text style={styles.subCourseHeader}>Course Content</Text>
          {children}
        </View>}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonMainContainer}
            onPress={navigateHandler}
          >
            {priceText && <Text style={styles.priceText}>{priceText}</Text>}
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    marginVertical: 20,
    elevation: 10,
    shadowColor: "grey",
    shadowRadius: 8,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    borderRadius: 15,
    backgroundColor: "white",
  },
  cardImgContainer: {
    backgroundColor: "#ad1357",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardImage: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // aspectRatio: 1
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  mainHeader: {
    fontSize: 20,
    color: "#78002e",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Nunito_600SemiBold",
    textAlign: "center",
    marginVertical: 10,
  },
  description: {
    textAlign: "left",
    fontFamily: "JosefinSans_600SemiBold",
    lineHeight: 20,
    fontSize: 16,
    color: "#ad1357",
  },
  buttonContainer: {
    backgroundColor: "#78002e",
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  buttonMainContainer:{
    flexDirection: "row"
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "JosefinSans_500Medium",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  priceText: {
    backgroundColor: "#e35083",
    color: "white",
    fontSize: 20,
    fontFamily: "JosefinSans_500Medium",
    paddingHorizontal: 10,
    paddingVertical: 5,
    
  },
  subCourseContainer:{
    alignItems: 'center'
  },
  subCourseHeader:{
    color: "#78002e",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 4,
    textAlign: "center",
    fontFamily: "JosefinSans_600SemiBold",
  }
});
