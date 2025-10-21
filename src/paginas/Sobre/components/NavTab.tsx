import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";


export default function NavTab(){

  return (
    <View style={estilos.tela}>
        <Pressable style={{alignItems: "center", justifyContent: "center"}}>
            <Image source={require("../../../assets/pata.png")}/>
            <Text style={{color: "#BCBCBC"}}>Pets para adoção</Text>
        </Pressable>
      <Pressable style={{alignItems: "center", justifyContent: "center"}}>
            <Image source={require("../../../assets/chat (5).png")}/>
            <Text style={{color: "#BCBCBC"}}>Pets para adoção</Text>
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
});

