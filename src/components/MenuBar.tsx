import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import RootStackParamList from '../rootParamListType'

const MenuBar = () => {

  type ScreenNavigationType = NativeStackNavigationProp<RootStackParamList>

  const navigation = useNavigation<ScreenNavigationType>();

  return (
    <View style={styles.menuBarContainer}>
      <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
        <Text>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate("Courses")}}>
        <Text>
          Course
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate("Users")}}>
        <Text>
          Users
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate("About")}}>
        <Text>
          About
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate("Contact")}}>
        <Text>
          Contact
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuBar

const styles = StyleSheet.create({
  menuBarContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
})