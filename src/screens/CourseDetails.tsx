import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CourseStackParamList } from "../rootParamListType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import courses from "../api/courses";
import CourseCard from "../components/CourseCard";
import { Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import {
  JosefinSans_400Regular,
  JosefinSans_600SemiBold,
} from "@expo-google-fonts/josefin-sans";

type Props = NativeStackScreenProps<CourseStackParamList, "CourseDetails">;

const CourseDetails = ({ navigation, route }: Props) => {
  const { courseId } = route.params;
  const course = courses.find((item) => item.id === courseId);
  return (
    <View style={styles.cardContainer}>
      <CourseCard
        title={course?.title}
        priceText={"Rs. " + course?.price}
        buttonText="Join"
        desc={course?.desc}
        image={course?.image}
        navigateHandler={() => {
          navigation.goBack();
        }}
      >
        <FlatList
          keyExtractor={(item) => item}
          data={course?.subCourses}
          renderItem={(item) => (
            <Text style={styles.subCourseText}>{item.item}</Text>
          )}
        />
      </CourseCard>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  subCourseText: {
    textAlign: "center",
    fontFamily: "JosefinSans_600SemiBold",
    color: "#e35083",
  },
  cardContainer: {
    paddingHorizontal: 20,
  },
});
