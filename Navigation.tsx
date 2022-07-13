import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='e-learning' options={{title: 'E-Learning'}} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;

