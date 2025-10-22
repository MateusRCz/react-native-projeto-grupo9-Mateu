import React from "react";
import { StyleSheet, View, Text, Image, Pressable, ImageBackground, Dimensions, Button } from "react-native";
import {useNavigation} from '@react-navigation/native';

import ilustracao from "../../../assets/svgviewer.png";
import hamburguer from "../../../assets/Hamburguer.svg"
import user from "../../../assets/Usuário.svg"



// const { width } = Dimensions.get("window");

export default function Header(){

  const navigation = useNavigation();


  return (
    
    <View style={estilos.tela}>
      <View style={{position: "absolute", zIndex: 1, top: 75, display: "flex", justifyContent:"space-around", flexDirection:"row", width: "100%", gap: 170}}>
          <Pressable onPress={() => console.log("Hamburguer")}><Image source={require("../../../assets/Hamburguer.png")}/></Pressable>
          <Pressable onPress={() => navigation.navigate('Profile')}><Image source={require("../../../assets/Usuário (1).png")}/></Pressable>
        </View>
        <Image style={{width: "100%", height: 270, left:5, top: 30}} source={ilustracao} />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    // backgroundColor: "#ffffffff",
    width: "100%",
    height: "30%",
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
});

