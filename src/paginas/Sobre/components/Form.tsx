import React from "react";
import { StyleSheet, View, Text, TextInput, Image, Pressable } from "react-native";


export default function Form(){


  return (
    
    // esse aqui centraliza o conteiner
      <View style={estilos.tela}>  

        <View style={estilos.container}>

          {/* Imagem */}
          <View style={estilos.imageContainer}>
            <Image source={require("../../../assets/Imagem Dunga.png")}/>
          </View>
          
          {/* Informações */}
          <View style={{margin: 20}}>
            <Text style={estilos.nameText}>Dunga</Text>

            <Text style={estilos.text}>* 2 anos</Text>
            <Text style={estilos.text}>* Macho</Text>
            <Text style={estilos.text}>* Macho</Text>
            <Text style={estilos.text}>* Porte pequeno</Text>
            <Text style={estilos.text}>* Calmo e educado</Text>
            <Text style={estilos.text}>* Se dá bem com outros cachorros</Text>
            <Text style={estilos.text}>* Gosta de brincar e passear</Text>
            <Text style={estilos.text}>* Gosta de crianças mais velhas mas se assusta com bebês</Text>

          </View>

          {/* botoes */}
          <View style={{margin: 20}}>
            <Text style={estilos.localText}>Rio de Janeiro (RJ)</Text>
            <View style={estilos.containerButton}>
                  <Pressable style={estilos.button}>
                      <Image source={require("../../../assets/chat (5).png")}/>
                      <Text style={{color: "#BCBCBC"}}>Falar com responsável</Text>
                  </Pressable>
                <Pressable style={estilos.button}>
                      <Image source={require("../../../assets/sharee.png")}/>
                      <Text style={{color: "#BCBCBC"}}>Compartilhar</Text>
                  </Pressable>
            </View>
          </View>

          {/* Sobre o animal */}
          <View style={{margin: 20}}>
            <Text style={estilos.textAbout} >Dunga é encantador, conquista a todos com sua serenidade. Tem pelo macio e olhos expressivos que revelam a doçura de sua personalidade. Adora passar o tempo relaxando ao lado de seus humanos ou em um cantinho ensolarado. Este companheiro leal e afetuoso vai trazer uma atmosfera alegre para qualquer lar que tenha a sorte de tê-lo como parte da família!</Text>
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
  container:{
    backgroundColor: "#F6F6F6", 
    width: 312, 
    height: 1302, 
    borderRadius: 16,
  },
  imageContainer:{
    display: "flex",
    alignItems: "center",
  },
  nameText:{
    color: "#3772FF",  
    fontWeight:"600", 
    fontSize: 16, 
    fontFamily: "Poppins",
  },
  text: {
    marginLeft: 10,
    color: "#737380",
    fontWeight:"400",
    fontSize: 14, 
    fontFamily: "Poppins",
  },
  localText: {
    marginLeft: 15, 
    color: "#BCBCBC",  
    fontWeight:"400", 
    fontSize: 14, 
    fontFamily: "Poppins",
  },
  containerButton: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-around",
  },
  button: {
    display: "flex", 
    flexDirection: "row",
  },
  textAbout: {
    color: "#737380",  
    fontWeight:"400", 
    fontSize: 14, 
    fontFamily: "Poppins",
  }
});

