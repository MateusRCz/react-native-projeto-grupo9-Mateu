import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable, Dimensions,} from "react-native";
import { useNavigation } from "@react-navigation/native";

import ilustracao from "../../../assets/svgviewer.png";
import hamburguer from "../../../assets/Hamburguer.png";
import user from "../../../assets/Usuário1.png";
import pets from "../../../assets/pets.png";
import mensagens1 from "../../../assets/mensagens1.png";
import settings from "../../../assets/settings.png";
import logout3 from "../../../assets/logout3.png";

const { width, height } = Dimensions.get("window");

export default function Header() {
  const navigation = useNavigation();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <View style={estilos.tela}>
      {/* Menu lateral */}
      {menuAberto && (
        <View style={estilos.menuLateral}>
          <Image source={hamburguer} style={estilos.iconeHeader} />
          <View style={estilos.opcao}>
            <Image source={pets} style={estilos.icone} />
            <Text style={estilos.textoOpcao}>Pets para adoção</Text>
          </View>
          <View style={estilos.opcao}>
            <Image source={mensagens1} style={estilos.icone} />
            <Text style={estilos.textoOpcao}>Mensagens</Text>
          </View>
          <View style={estilos.opcao}>
            <Image source={settings} style={estilos.icone} />
            <Text style={estilos.textoOpcao}>Configurações</Text>
          </View>
          <View style={estilos.opcao}>
            <Image source={logout3} style={estilos.icone} />
            <Text style={estilos.textoOpcao}>Sair</Text>
          </View>
        </View>
      )}
      {menuAberto && (
        <Pressable
          style={estilos.overlay}
          onPress={() => setMenuAberto(false)} // fecha ao clicar fora
        />
      )}

      {/* Header */}
      <View style={estilos.container}>
        <Pressable onPress={() => setMenuAberto(!menuAberto)}>
          <Image source={hamburguer} style={estilos.iconeHeader} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Image source={user} style={estilos.iconeHeader} />
        </Pressable>
      </View>

      <Image style={estilos.imageHeader} source={ilustracao} />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    // backgroundColor: "#ffffffff",
    width: "100%",
    height: "30%",
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
  container: {
    position: "absolute",
    zIndex: 2,
    top: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
  },
  imageHeader: {
    width: "100%",
    height: 270,
    top: 30,
  },
  iconeHeader: {
    width: 30,
    height: 30,
  },
  menuLateral: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width / 2,
    height: height,
    backgroundColor: "#36D6AD",
    padding: 20,
    zIndex: 3,
  },
  tituloMenu: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  opcao: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icone: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: "#fff",
  },
  textoOpcao: {
    fontSize: 16,
    color: "#fff",
  },
  overlay: {
  position: "absolute",
  top: 0,
  left: 0,
  width: width,
  height: height,
  backgroundColor: "rgba(0, 0, 0, 0.5)", 
  zIndex: 2,
},
});