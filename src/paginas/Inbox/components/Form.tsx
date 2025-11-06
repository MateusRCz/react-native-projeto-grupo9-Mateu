import { uptime } from "process";
import React, {useState} from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { TextInput } from "react-native";


export default function Form({ onSubmit }: any) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    nameTutor: "",
    message: "",
  });


  function handleChange (name: any, value: any){
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  function handleSubmit(){
    if( !form.name || !form.phone || !form.nameTutor || !form.message){
      console.log("Preencha todos os campos");
      return;
    }

    console.log(form);
    onSubmit(form);

  }


  return (
    
    // esse aqui centraliza o conteiner
      <View style={estilos.tela}>  

        <Text style={estilos.textWelcome}>Caixa de Mensagens</Text>

        <View style={estilos.containerExt}>
          <View style={estilos.containerForm}>
            <View style={estilos.containerCard}>
              <Text style={estilos.textForm}>Maria</Text>
              <Text style={estilos.textMessage}>Olá, tudo bem?</Text>
            </View>
          </View>

          <View style={estilos.containerForm}>
            <View style={estilos.containerCard}>
              <Text style={estilos.textForm}>João</Text>
              <Text style={estilos.textMessage}>Você quer saber mais sobre o Dunga?</Text>
            </View>
          </View>

          <View style={estilos.containerForm}>
            <View style={estilos.containerCard}>
              <Text style={estilos.textForm}>Pedro</Text>
              <Text style={estilos.textMessage}>Me interessei muito por ele</Text>
            </View>
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
  textWelcome: {
    color: "#3772FF",
    fontWeight: "bold",
    fontSize: 16, 
    margin: 30,
  },
  containerExt: {
    marginBottom: 200
   }
  ,
  containerCard: {
    marginBottom: 20,
  },
  containerForm: {
    backgroundColor: "#F6F6F6", 
    padding: 5,
    marginBottom: 20,
    borderRadius: 16, 
    height: 56,
    width: 312,
  },
  textForm: {
    marginBottom: 8,
    color: "#3772FF",  
    fontWeight:"bold", 
    fontSize: 16,
  },
  textMessage: {
    marginBottom: 10, 
    color: "#737380", 
    fontSize: 16,
  },
  inputForm: {
    width:264, 
    height: 44, 
    backgroundColor: "#FFFFFF", 
    borderWidth: 1, 
    borderRadius: 16, 
    borderColor: "#eae9e9f8",
  },
  inputMessageForm:{
   borderWidth: 1, 
   borderRadius: 16, 
   backgroundColor: "#FFFFFF", 
   width:264, 
   height: 160, 
   color: "#BCBCBC", 
   borderColor: "#eae9e9f8",
  },

  buttonContainer:{
    display: "flex",
    alignItems: "center",
    margin: 20,
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

