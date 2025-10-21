import React from "react";
import { StyleSheet, View, Text, TextInput, Image, Pressable } from "react-native";
import Button from "./Button";


export default function Form(){


  return (
    
    // esse aqui centraliza o conteiner
      <View style={estilos.tela}>  

        <View style={{backgroundColor: "#F6F6F6", width: 312, height: 1302, borderRadius: 16}}>

          {/* Imagem */}
          <View style={{display: "flex", alignItems: "center"}}>
            <Image source={require("../../../assets/Imagem Dunga.png")}/>
          </View>
          
          {/* Informações */}
          <View style={{margin: 20}}>
            <Text style={{ color: "#3772FF",  fontWeight:"600", fontSize: 16, fontFamily: "Poppins"}}>Dunga</Text>

            <Text style={{ marginLeft: 10,color: "#737380",  fontWeight:"400", fontSize: 14, fontFamily: "Poppins"}}>* 2 anos</Text>
            <Text style={{ marginLeft: 10,color: "#737380",  fontWeight:"400", fontSize: 14, fontFamily: "Poppins"}}>* Macho</Text>
            <Text style={{ marginLeft: 10,color: "#737380",  fontWeight:"400", fontSize: 14, fontFamily: "Poppins"}}>* Macho</Text>
            <Text style={{ marginLeft: 10,color: "#737380",  fontWeight:"400", fontSize: 14, fontFamily: "Poppins"}}>* Porte pequeno</Text>
            <Text style={{ marginLeft: 10,color: "#737380",  fontWeight:"400", fontSize: 14, fontFamily: "Poppins"}}>* Calmo e educado</Text>
            <Text style={{ marginLeft: 10,color: "#737380",  fontWeight:"400", fontSize: 14, fontFamily: "Poppins"}}>* Se dá bem com outros cachorros</Text>
            <Text style={{ marginLeft: 10,color: "#737380",  fontWeight:"400", fontSize: 14, fontFamily: "Poppins"}}>* Gosta de brincar e passear</Text>
            <Text style={{ marginLeft: 10,color: "#737380",  fontWeight:"400", fontSize: 14, fontFamily: "Poppins"}}>* Gosta de crianças mais velhas mas se assusta com bebês</Text>

          </View>

          {/* botoes */}
          <View style={{margin: 20}}>
            <Text style={{marginLeft: 15, color: "#BCBCBC",  fontWeight:"400", fontSize: 14, fontFamily: "Poppins"}}>Rio de Janeiro (RJ)</Text>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                  <Pressable style={{display: "flex", flexDirection: "row"}}>
                      <Image source={require("../../../assets/chat (5).png")}/>
                      <Text style={{color: "#BCBCBC"}}>Falar com responsável</Text>
                  </Pressable>
                <Pressable style={{display: "flex", flexDirection: "row"}}>
                      <Image source={require("../../../assets/chat (5).png")}/>
                      <Text style={{color: "#BCBCBC"}}>Compartilhar</Text>
                  </Pressable>
            </View>
          </View>

          {/* Sobre o animal */}
          <View style={{margin: 20}}>
            <Text style={{color: "#737380",  fontWeight:"400", fontSize: 14, fontFamily: "Poppins"}} >Dunga é encantador, conquista a todos com sua serenidade. Tem pelo macio e olhos expressivos que revelam a doçura de sua personalidade. Adora passar o tempo relaxando ao lado de seus humanos ou em um cantinho ensolarado. Este companheiro leal e afetuoso vai trazer uma atmosfera alegre para qualquer lar que tenha a sorte de tê-lo como parte da família!</Text>
          </View>

          <View style={{margin: 20}}>
            <Image style={{width: 280, height: 247}} source={require("../../../assets/dungaft1.jpg")}/>
            <Image style={{width: 280, height: 247}} source={require("../../../assets/dungaft2.jpg")}/>
          </View>

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

