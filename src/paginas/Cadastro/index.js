import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, StyleSheet, ScrollView } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    // Simulação de cadastro
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    console.log({ nome, email, senha });

    // Leva para tela de login
    // Aqui você pode usar navigation.navigate('Login') caso queira depois
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/ilustracao.svg')} style={styles.headerImage} />
      <Text style={styles.logo}>adopet</Text>

      <Text style={styles.title}>Ainda não tem cadastro?</Text>
      <Text style={styles.subtitle}>
        Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
      </Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome completo"
        placeholderTextColor="#bcbcbc"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Escolha seu melhor email"
        placeholderTextColor="#bcbcbc"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Crie uma senha"
        secureTextEntry
        placeholderTextColor="#bcbcbc"
        value={senha}
        onChangeText={setSenha}
      />

      <Text style={styles.label}>Confirme a senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Repita a senha criada acima"
        secureTextEntry
        placeholderTextColor="#bcbcbc"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
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
    marginBottom: 6,
  },
  subtitle: {
    color: '#3772FF',
    textAlign: 'center',
    fontSize: 13,
    marginBottom: 25,
    width: '80%',
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
  button: {
    backgroundColor: '#FF5E5B',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
