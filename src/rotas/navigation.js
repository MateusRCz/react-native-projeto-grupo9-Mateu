import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Importação das páginas

import Home from "../paginas/Home";
import Register from "../paginas/Cadastro";
import Inbox from "../paginas/Inbox";
import Login from "../paginas/Login";
import Message from "../paginas/Mensagem";
import Profile from "../paginas/Perfil";
import About from "../paginas/Sobre";
import BasePage from "../paginas/PaginaBase";


const RootStack = createNativeStackNavigator({
  initialRouteName: 'BasePage',
  screens: {
    Home: { 
      screen: Home,
    },
    Register: {
      screen: Register,
    },
    Inbox: {
      screen: Inbox,
    },
    Login: {
      screen: Login,
    },
    Message: {
      screen: Message,
    },
    Profile: {
      screen: Profile,
    },
    About: {
      screen: About,
    },
    BasePage: {
      screen: BasePage,
    },

  },
  screenOptions: {
    headerShown: false,
  }
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}