import React, {useState} from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { TextInput } from "react-native";
import Button from "./Button";


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

        <Text style={estilos.textWelcome}>Envie uma mensagem para o tutor:</Text>

        <View style={estilos.containerForm}>
          <View style={estilos.containerCard}>
            <Text style={estilos.textForm}>Nome</Text>
            <TextInput onChangeText={text => handleChange("name", text)} style={estilos.inputForm}></TextInput>
          </View  >
          <View style={estilos.containerCard}>
            <Text style={estilos.textForm}>Telefone</Text>
            <TextInput onChangeText={text => handleChange("phone", text)} style={estilos.inputForm}></TextInput>
          </View>
          <View style={estilos.containerCard}>
            <Text style={estilos.textForm}>Nome do animal</Text>
            <TextInput onChangeText={text => handleChange("nameTutor", text)} style={estilos.inputForm}></TextInput>
          </View>
          <View style={estilos.containerCard}>
            <Text style={estilos.textForm}>Mensagem</Text>
            <TextInput onChangeText={text => handleChange("message", text)} placeholder="Escreva sua mensagem" style={estilos.inputMessageForm}></TextInput>
          
          </View >
            <View style={estilos.buttonContainer}>
              <Pressable onPress={() => handleSubmit()} style={estilos.button}><Text style={estilos.text}>Enviar</Text></Pressable>        
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
    fontSize: 16, 
    margin: 30,
  },
  containerCard: {
    marginBottom: 20,
  },
  containerForm: {
    backgroundColor: "#F6F6F6", 
    padding: 24, 
    borderRadius: 16, 
    height: 588,
  },
  textForm: {
    marginBottom: 10, 
    color: "#3772FF",  
    fontWeight:"bold", 
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

