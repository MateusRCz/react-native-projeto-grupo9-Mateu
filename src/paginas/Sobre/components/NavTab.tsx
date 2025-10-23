import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function NavTab(){

  const navigation = useNavigation();

  return (
    <View style={estilos.tela}>
        <Pressable onPress={() => navigation.navigate('Home')} style={estilos.navButton}>
            <Image source={require("../../../assets/pata.png")}/>
            <Text style={estilos.text}>Pets para adoção</Text>
        </Pressable>
      <Pressable onPress={() => navigation.navigate('Message')} style={estilos.navButton}>
            <Image source={require("../../../assets/chat (5).png")}/>
            <Text style={estilos.text}>Mensagens</Text>
        </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 50,
    width: "100%",
    height: 88,
    backgroundColor: "#F6F6F6",
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color: "#BCBCBC",
  }
});

