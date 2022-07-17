import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Home from './src/screens/Home';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import RootStackParamList from './src/rootParamListType';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useJosefinFont } from './customFonts/useJosefinFont';
import AppLoading from 'expo-app-loading';
import { JosefinSans_500Medium } from '@expo-google-fonts/josefin-sans';

const Stack = createBottomTabNavigator<RootStackParamList>();

const Navigation = () => {
  const [fontLoaded, error] = useJosefinFont();
  if(!fontLoaded){
    return <AppLoading />
  }
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{tabBarInactiveTintColor: "gray", tabBarActiveTintColor: "#ad1457", tabBarShowLabel: false, headerTitleStyle:  {color: "#ffffff", fontSize: 20, fontFamily: 'JosefinSans_600SemiBold'}, headerStyle: {backgroundColor: "#ad1457"}}}>
        <Stack.Screen name='Home' options={{title: 'E-Learning', headerShown:false, tabBarIcon:({size, color})=><Ionicons name="school-outline" size={size} color={color} />}} component={Home} />
        <Stack.Screen name='Courses' options={{title: 'All Courses', headerTitleAlign: "center", tabBarIcon: ({size, color})=><Entypo name="open-book" size={size} color={color} /> }} component={Course} />
        <Stack.Screen name='Users' options={{title: 'Learners', headerTitleAlign: "center", tabBarIcon:({size, color})=><FontAwesome5 name="users" size={size} color={color} />}} component={UserData} />
        <Stack.Screen name='About' options={{title: 'About',  headerTitleAlign: "center", tabBarIcon: ({size, color})=><Entypo name="info" size={size} color={color} />}} component={About} />
        <Stack.Screen name='Contact' options={{title: 'Contact Us', headerTitleAlign: "center", tabBarIcon:({size, color})=><Feather name="phone" size={size} color={color} />}} component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;

