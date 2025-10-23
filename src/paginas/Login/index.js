import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, StyleSheet, ScrollView } from 'react-native';

export default function LoginScreen() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!nome || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Simulação de login
    Alert.alert('Bem-vindo!', 'Login realizado com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/ilustracao.svg')} style={styles.headerImage} />
      <Text style={styles.logo}>adopet</Text>

      <Text style={styles.title}>Já tem conta? Faça seu login:</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome completo"
        placeholderTextColor="#bcbcbc"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#bcbcbc"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity>
        <Text style={styles.forgotText}>Esqueci minha senha.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  logo: {
    fontSize: 28,
    color: '#3772FF',
    fontWeight: 'bold',
    marginTop: -140,
    marginBottom: 120,
    textAlign: 'center',
  },
  title: {
    color: '#3772FF',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 25,
  },
  label: {
    fontWeight: 'bold',
    color: '#6E6E6E',
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  input: {
    width: '80%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignSelf: 'center',
  },
  forgotText: {
    color: '#FF5E5B',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 15,
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#FF5E5B',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
