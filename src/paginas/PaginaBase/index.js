import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inbox() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3772FF" />
      
      {/* Fundo decorativo superior */}
      <View style={styles.topBackground} />
      
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/Logo azul.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Texto de boas-vindas */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Boas-vindas!</Text>
        <Text style={styles.subtitle}>
          Que tal mudar sua vida{'\n'}adotando seu novo melhor{'\n'}amigo? Vem com a gente!
        </Text>
      </View>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Já tenho conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.buttonText}>Quero me cadastrar</Text>
        </TouchableOpacity>
      </View>

      {/* Ilustração */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../../assets/Ilustração inicial.png')}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3772FF',
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: '#36D6AD',
    borderBottomRightRadius: 100,
  },
  logoContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 50,
  },
  textContainer: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    marginTop: 40,
    paddingHorizontal: 40,
    gap: 16,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#FC7071',
  },
  buttonSecondary: {
    backgroundColor: '#FC7071',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  illustrationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 20,
  },
  illustration: {
    width: 250,
    height: 250,
  },
  heartRed: {
    position: 'absolute',
    top: 60,
    right: 80,
    width: 24,
    height: 24,
  },
  heartWhite: {
    position: 'absolute',
    top: 70,
    right: 60,
    width: 20,
    height: 20,
  },
});


