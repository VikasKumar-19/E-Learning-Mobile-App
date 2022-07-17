import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import courses, { ICourse } from "../api/courses";
import { Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { useJosefinFont } from "../../customFonts/useJosefinFont";
import { useNunitoFont } from "../../customFonts/useNunitoFont";
import AppLoading from "expo-app-loading";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootStackParamList, { CourseStackParamList } from "../rootParamListType";
import CourseCard from "../components/CourseCard";

interface IRenderItem {
  item: ICourse;
}

type Props = NativeStackScreenProps<CourseStackParamList, "AllCourses">;

const Course = ({ navigation }: Props) => {
  const [josefinLoaded, errorJosefin] = useJosefinFont();
  const [nunitoLoaded, errorNunito] = useNunitoFont();

  if (!josefinLoaded || !nunitoLoaded) {
    return <AppLoading />;
  }
  const renderCourse = ({ item }: IRenderItem) => {
    return (
      // <View style={styles.cardImgContainer}></View>
      <CourseCard
        key={item.id}
        title={item.title}
        buttonText="Course Details"
        desc={item.desc}
        image={item.image}
        navigateHandler={() => {
          navigation.navigate("CourseDetails", { courseId: item.id });
        }}
      />
    );
  };

  return (
    <FlatList
      style={styles.mainContainer}
      data={courses}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderCourse}
    />
  );
};

export default Course;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  }
});
