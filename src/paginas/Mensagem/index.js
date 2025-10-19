import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import Form from "./components/Form";
import Button from "./components/Button";

export default function Message(){


  return (
    <View style={estilos.tela}>
      <Header />
      <Form />
       
      <Button />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    backgroundColor: "#ffffffff",
    flex: 1,
  },
});

