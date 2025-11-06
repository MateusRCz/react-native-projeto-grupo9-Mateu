import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";


export default function Footer(){

  return (
    <View style={estilos.tela}>
        <Text style={estilos.text}>2023 - Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#36D6AD",
    width: "100%",
    height: 80,
  },
  text: {
    fontSize: 12,
    color: "#FFFFFF",
  }
});

