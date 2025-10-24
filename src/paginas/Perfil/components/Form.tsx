import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Button from "./Button";
import ImageUsuario from "./ImageUsuario";

export default function Form() {
  const [isEditing, setIsEditing] = useState(false);

  // estados dos campos
  const [nome, setNome] = useState("João Silva");
  const [telefone, setTelefone] = useState("(11) 99999-9999");
  const [cidade, setCidade] = useState("São Paulo");
  const [sobre, setSobre] = useState("Sou voluntário e gosto de ajudar.");

  const handlePress = () => {
    if (isEditing) {
      // Aqui você pode salvar os dados, enviar para API etc.
      console.log("Dados salvos:", { nome, telefone, cidade, sobre });
    }
    setIsEditing(!isEditing); // alterna entre os modos
  };

  return (
    <View style={estilos.tela}>
      <Text style={estilos.intro}>
        Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem
      </Text>

      <ImageUsuario />

      <View style={estilos.card}>
        {/* Nome */}
        <View style={estilos.campo}>
          <Text style={estilos.label}>Nome</Text>
          <TextInput
            style={estilos.input}
            editable={isEditing}
            value={nome}
            onChangeText={setNome}
          />
        </View>

        {/* Telefone */}
        <View style={estilos.campo}>
          <Text style={estilos.label}>Telefone</Text>
          <TextInput
            style={estilos.input}
            editable={isEditing}
            value={telefone}
            onChangeText={setTelefone}
          />
        </View>

        {/* Cidade */}
        <View style={estilos.campo}>
          <Text style={estilos.label}>Cidade</Text>
          <TextInput
            style={estilos.input}
            editable={isEditing}
            value={cidade}
            onChangeText={setCidade}
          />
        </View>

        {/* Sobre */}
        <View style={estilos.campo}>
          <Text style={estilos.label}>Sobre</Text>
          <TextInput
            style={estilos.textarea}
            editable={isEditing}
            value={sobre}
            multiline
            onChangeText={setSobre}
          />
        </View>

        <Button title={isEditing ? "Salvar" : "Editar"} onPress={handlePress} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    alignItems: "center",
    marginTop: 140,
  },
  intro: {
    color: "#3772FF",
    fontSize: 16,
    margin: 30,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f6f6f6",
    padding: 24,
    borderRadius: 16,
    height: 588,
  },
  campo: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    color: "#3772FF",
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    width: 264,
    height: 44,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#eae9e9f8",
    paddingHorizontal: 10,
  },
  textarea: {
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    width: 264,
    height: 160,
    color: "#000",
    borderColor: "#eae9e9f8",
    padding: 10,
  },
});
