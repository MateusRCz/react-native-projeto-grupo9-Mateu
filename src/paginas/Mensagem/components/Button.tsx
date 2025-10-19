import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";


export default function Button(){


  return (
    <View style={estilos.tela}>
      <Pressable style={{backgroundColor: "#FC7071", width: 180, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 8}}><Text style={{color: "#FFFFFF"}}>Enviar</Text></Pressable>        
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
});

