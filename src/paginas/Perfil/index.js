

import React from "react";
import { StyleSheet, View, Pressable, Image, ScrollView } from "react-native";

import Header from "./components/Header";
import Form from "./components/Form";
import NavTab from "./components/NavTab"
import Footer from "./components/Footer"
import ImageUsuario from "./components/ImageUsuario";

export default function Login(){


  return (
    <View style={estilos.tela}>
      <Header />
      <ScrollView style={{flexGrow: 1}}>
        <Form/>
        <NavTab/>
        <Footer/>
      </ScrollView>
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
