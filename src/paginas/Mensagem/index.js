import React from "react";
import { StyleSheet, View, Pressable, Image, ScrollView } from "react-native";

import Header from "./components/Header";
import Form from "./components/Form";
import NavTab from "./components/NavTab"
import Footer from "./components/Footer"

export default function Message(){


  return (
    <View style={estilos.tela}>
      <Header />
      <ScrollView style={{flexGrow: 1}}>
        <Form />
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
  },
});

