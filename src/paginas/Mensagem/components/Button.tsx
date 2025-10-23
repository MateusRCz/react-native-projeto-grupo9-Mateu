import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";


export default function Button(){


  return (
    <View style={estilos.tela}>
      <Pressable style={estilos.button}><Text style={estilos.text}>Enviar</Text></Pressable>        
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    display: "flex",
    alignItems: "center",
    margin: 20
  },
  button:{
    backgroundColor: "#FC7071",
    width: 180,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  text: {
    color: "#FFFFFF",
  }
});

