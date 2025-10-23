import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

import usuario from "../../../assets/Usuário.svg"


export default function ImageUsuario(){

  return (
    <View style={estilos.tela}>
        <Text style={estilos.text}>Foto</Text>
        <Image style={estilos.imageUsuario} source={usuario} />
        <Text style={estilos.text}>Clique na foto para editar</Text>
        
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
    width: 310,
    height: 180,
  },
  imageUsuario: {
   width: 50,
   height: 50,
   left:5,
   top: 30, 
   marginBottom: 40,
  },
  text:{
    display: "flex",
    textAlign: "left",
    marginBottom: 10,
    color: "#3772FF",
    fontWeight:"bold", 
    fontSize: 16
  }
});

