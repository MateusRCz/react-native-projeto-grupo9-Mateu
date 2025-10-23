import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native";
import Button from "./Button";


export default function Form(){


  return (
    
    // esse aqui centraliza o conteiner
      <View style={estilos.tela}>  

        <Text style={{color: "#3772FF", fontSize: 16, margin: 30}}>Envie uma mensagem para o tutor:</Text>

        <View style={{backgroundColor: "#F6F6F6", padding: 24, borderRadius: 16, height: 588}}>
          <View style={{marginBottom: 20}}>
            <Text style={{marginBottom: 10, color: "#3772FF",  fontWeight:"bold", fontSize: 16}}>Nome</Text>
            <TextInput style={{width:264, height: 44, backgroundColor: "#FFFFFF", borderWidth: 1, borderRadius: 16, borderColor: "#eae9e9f8"}}></TextInput>
          </View  >
          <View style={{marginBottom: 20}}>
            <Text style={{marginBottom: 10, color: "#3772FF",  fontWeight:"bold", fontSize: 16}}>Telefone</Text>
            <TextInput style={{width:264, height: 44, backgroundColor: "#FFFFFF", borderWidth: 1, borderRadius: 16, borderColor: "#eae9e9f8"}}></TextInput>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={{marginBottom: 10, color: "#3772FF",  fontWeight:"bold", fontSize: 16}}>Nome do animal</Text>
            <TextInput style={{width:264, height: 44, backgroundColor: "#FFFFFF", borderWidth: 1, borderRadius: 16, borderColor: "#eae9e9f8"}}></TextInput>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={{marginBottom: 10,color: "#3772FF",  fontWeight:"bold", fontSize: 16}}>Mensagem</Text>
            <TextInput placeholder="Escreva sua mensagem" style={{borderWidth: 1, borderRadius: 16, backgroundColor: "#FFFFFF", width:264, height: 160, color: "#BCBCBC", borderColor: "#eae9e9f8"}}></TextInput>
          </View>
          <Button/>
        </View>

      </View>
    
  );
}

const estilos = StyleSheet.create({
  tela: {
    alignItems: "center",
    marginTop: 140,
  },
});

