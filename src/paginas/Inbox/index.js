import React from "react";
import { StyleSheet, View, Pressable, Image, ScrollView, Text, Button } from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function Inbox(){
  const navigation = useNavigation();
  
  return (
    <View style={estilos.tela}>
      <Text>Você está na tela de Inbox</Text>
      <View>
        <Button onPress={() => navigation.navigate('Home')} title="Home"></Button> 
        <Button onPress={() => navigation.navigate('Register')} title="Register" na/>
        {/* <Button onPress={() => navigation.navigate('Inbox')} title="Inbox" na/> */}
        <Button onPress={() => navigation.navigate('BasePage')} title="BasePage"/>
        <Button onPress={() => navigation.navigate('Login')} title="Login"/>
        <Button onPress={() => navigation.navigate('Message')} title="Message"/>
        <Button onPress={() => navigation.navigate('Profile')} title="Profile"/>
        <Button onPress={() => navigation.navigate('About')} title="About"/>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    // backgroundColor: "#ffffffff",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

