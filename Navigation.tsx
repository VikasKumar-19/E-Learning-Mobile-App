import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Home from './src/screens/Home';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import RootStackParamList from './src/rootParamListType';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Home' options={{title: 'E-Learning'}} component={Home} />
        <Stack.Screen name='Courses' options={{title: 'All Courses'}} component={Course} />
        <Stack.Screen name='Users' options={{title: 'Learners'}} component={UserData} />
        <Stack.Screen name='About' options={{title: 'About'}} component={About} />
        <Stack.Screen name='Contact' options={{title: 'Contact Us'}} component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;

