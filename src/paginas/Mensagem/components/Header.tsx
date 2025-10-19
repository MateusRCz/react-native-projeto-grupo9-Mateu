import React from "react";
import { StyleSheet, View, Text, Image, Pressable, ImageBackground } from "react-native";

import ilustracao from "../../../assets/svgviewer.png";
import hamburguer from "../../../assets/Hamburguer.svg"
import user from "../../../assets/Usuário.svg"


export default function Header(){


  return (
    
    <View style={estilos.tela}>
      <ImageBackground source={ilustracao} style={{width: "100%", height: 300}} resizeMode="contain"/>

        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", alignItems: "center", marginTop:50, gap: 190}}>
             <Pressable onPress={() => console.log("Hamburguer")}><Image source={hamburguer}/></Pressable>
             <Pressable onPress={() => console.log("Perfil")}><Image source={user}/></Pressable>
        </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#EDEDED",

  },
});

