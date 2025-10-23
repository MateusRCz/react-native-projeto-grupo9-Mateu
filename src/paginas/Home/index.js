import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';

const pets = [
  {
    id: '1',
    nome: 'Dunga',
    idade: '2 anos',
    genero: 'Macho',
    descricao: 'Porte pequeno',
    local: 'Rio de Janeiro (RJ)',
    imagem: require('../../assets/Imagem Dunga.png'),
  },
  {
    id: '2',
    nome: 'Felícia',
    idade: '3 meses',
    genero: 'Fêmea',
    descricao: 'Porte médio',
    local: 'Rio de Janeiro (RJ)',
    imagem: require('../../assets/Imagens Felícia.png'),
  },
  {
    id: '3',
    nome: 'Sirius',
    idade: '6 anos',
    genero: 'Macho',
    descricao: 'Porte grande',
    local: 'Duque de Caxias (RJ)',
    imagem: require('../../assets/Imagem - sirius.png'),
  },
  {
    id: '4',
    nome: 'Fiona',
    idade: '7 meses',
    genero: 'Fêmea',
    descricao: 'Castrada e vacinada',
    local: 'São Gonçalo (RJ)',
    imagem: require('../../assets/Imagem-Fiona.png'),
  },
  {
    id: '5',
    nome: 'Sid',
    idade: '6 meses',
    genero: 'Macho',
    descricao: 'Encantador e brincalhão',
    local: 'Nova Iguaçu (RJ)',
    imagem: require('../../assets/Imagem - Sid.png'),
  },
  {
    id: '6',
    nome: 'Yoda',
    idade: '1 ano',
    genero: 'Macho',
    descricao: 'Vacinado',
    local: 'Nova Iguaçu (RJ)',
    imagem: require('../../assets/Imagem - Yoda.png'),
  },
  {
    id: '7',
    nome: 'Lua',
    idade: '4 meses',
    genero: 'Fêmea',
    descricao: 'Gata carinhosa',
    local: 'Nova Iguaçu (RJ)',
    imagem: require('../../assets/Imagenm Lua.png'),
  },
  {
    id: '8',
    nome: 'Amora',
    idade: '1 ano',
    genero: 'Fêmea',
    descricao: 'Linda e saudável',
    local: 'Rio de Janeiro (RJ)',
    imagem: require('../../assets/Imagem - Amora.png'),
  },
  {
    id: '9',
    nome: 'Zeus',
    idade: '2 anos',
    genero: 'Macho',
    descricao: 'Protetor e dócil',
    local: 'Belford Roxo (RJ)',
    imagem: require('../../assets/Imagem - Zelda.png'),
  },
];

export default function Home() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={[styles.avatarBox, { backgroundColor: item.fundo }]}>
        <Image source={item.imagem} style={styles.avatar} />
      </View>
      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.desc}>{`${item.idade} | ${item.genero}`}</Text>
        <Text style={styles.desc}>{item.descricao}</Text>
        <Text style={styles.local}>{item.local}</Text>
        {/* Aqui você pode colocar ação de favoritar, etc */}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Topo decorativo */}
      <View style={styles.topBackground}>
        <TouchableOpacity style={styles.menuButton}>
          <Image source={require('../../assets/svgviewer.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.topText}>
          Olá! Veja os amigos{'\n'}disponíveis para adoção!
        </Text>
        <Image
          source={require('../../assets/Usuário (1).png')}
          style={styles.pawIcon}
        />
      </View>
      {/* Lista de pets */}
      <FlatList
        data={pets}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 24, paddingTop: 8 }}
        showsVerticalScrollIndicator={false}
      />
      {/* Rodapé de navegação */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={require('../../assets/pataazul.svg')}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={require('../../assets/chat (5).png')}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F7FF',
  },
  topBackground: {
    backgroundColor: '#36D6AD',
    borderBottomRightRadius: 40,
    padding: 24,
    paddingTop: 40,
    marginBottom: 8,
    position: 'relative',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 2,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  topText: {
    color: '#3F92C5',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24,
    marginLeft: 36,
  },
  pawIcon: {
    position: 'absolute',
    top: 0,
    right: 10,
    width: 40,
    height: 40,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: 'center',
    elevation: 2,
    padding: 12,
  },
  avatarBox: {
    borderRadius: 24,
    padding: 8,
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 20,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F92C5',
  },
  desc: {
    color: '#8C8C8C',
    fontSize: 12,
    marginTop: 2,
  },
  local: {
    color: '#36D6AD',
    fontSize: 12,
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 56,
  },
  footerButton: {
    alignItems: 'center',
    flex: 1,
  },
  footerIcon: {
    width: 28,
    height: 28,
  },
});
