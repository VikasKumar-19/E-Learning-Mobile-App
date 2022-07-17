import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Course from './Course';
import CourseDetails from './CourseDetails';
import { CourseStackParamList } from '../rootParamListType';
import { JosefinSans_600SemiBold } from '@expo-google-fonts/josefin-sans';
import { useJosefinFont } from '../../customFonts/useJosefinFont';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator<CourseStackParamList>();

const CourseStack = () => {
  const [fontloaded, error] = useJosefinFont();
  if(!fontloaded){
    return <AppLoading />
  }
  return (
    <Stack.Navigator initialRouteName='AllCourses' screenOptions={{headerTintColor: "white",headerTitleAlign: "center", headerStyle: {backgroundColor: "#ad1457"}, headerTitleStyle:{color: "white", fontFamily: "JosefinSans_600SemiBold"}}}>
      <Stack.Screen name='AllCourses' options={{title: 'All Courses' }} component={Course} />
      <Stack.Screen name='CourseDetails' options={{title: "Course Details" }} component={CourseDetails} />
    </Stack.Navigator>
  )
}

export default CourseStack;
