import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import config from '../../config';
import 'firebase/auth';

import { signOut } from 'firebase/auth';

import VisualizacaoAnimaisUsuario from '../../screens/VisualizacaoAnimaisUsuario';
import VisualizacaoAnimais from '../../screens/VisualizacaoAnimais';
import DetalhesAnimal from '../../screens/DetalhesAnimal';
import TelaSucessoAnimal from '../../screens/TelaSucessoAnimal';
import LoginScreen from '../../screens/Login';
import VisualizacaoPerfil from '../../screens/VisualizacaoPerfil';
import CadastroPessoal from '../../screens/CadastroPessoal';
import Cadastro from '../../screens/Cadastro';
import Dashboard from '../../screens/Dashboard';
import CadastroPetForm from '../../screens/CadastroAnimal';
import EditarPerfil from '../../screens/EditarPerfil';
import NotificationsScreen from '../../screens/Notifications'
import { screenOptions, styles } from "./styles.js"

const Drawer = createDrawerNavigator();

const CustomDrawerContentLogout = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style ={styles.drawerHeader}>
        <Image source={require('../../../assets/Meau_Icone.png')} style={styles.drawerImage} />
        <Text style={styles.text}>Aplicativo</Text>
      </View>
      <DrawerItem 
      label= {() => (<Text style ={styles.customLabel}>Login</Text>)} 
      onPress={() => navigation.navigate('Login')}
      style ={styles.drawerItem}
      />
      <DrawerItem 
      label={() => (<Text style ={styles.customLabel}>Cadastro</Text>)} 
      onPress={() => navigation.navigate('CadastroForm')}
      style ={styles.drawerItem}
      />
    </DrawerContentScrollView>
  )
}

const CustomDrawerContentLogin = ({ navigation }) => {

  const handleLogout = async () => {
    const auth = getAuth(config.firebaseApp); 
  
    try {
      await signOut(auth); 
      console.log('Logout bem-sucedido!');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
    navigation.navigate('Login')
  }
  return (
    <DrawerContentScrollView>
      <View style ={styles.drawerHeader}>
        <Image source={require('../../../assets/Meau_Icone.png')} style={styles.drawerImage} />
        <Text style={styles.text}>Seu Nome</Text>
      </View>
      <DrawerItem 
        label={() => (<Text style ={styles.customLabel}>Visualização do Perfil</Text>)} 
        onPress={() => navigation.navigate('VisualizacaoPerfil')}
        style ={styles.drawerItem} />
      <DrawerItem 
        label= {() => (<Text style ={styles.customLabel}>Cadastro do Animal</Text>)} 
        onPress={() => navigation.navigate('CadastroAnimal')}
        style ={styles.drawerItem} />
      <DrawerItem 
        label={() => (<Text style ={styles.customLabel}>Editar Perfil</Text>)} 
        onPress={() => navigation.navigate('EditarPerfil')}
        style ={styles.drawerItem} />
      <DrawerItem 
        label={() => (<Text style ={styles.customLabel}>Meus Animais</Text>)} 
        onPress={() => navigation.navigate('MeusAnimais')}
        style ={styles.drawerItem} />
      <DrawerItem 
        label={() => (<Text style ={styles.customLabel}>Ver Animais</Text>)} 
        onPress={() => navigation.navigate('VisualizacaoAnimais')}
        style ={styles.drawerItem} />
      <DrawerItem
        label={() => (<Text style ={styles.customLabel}>Notificações</Text>)}
        onPress={() => navigation.navigate('Notifications')}
        style ={styles.drawerItem} />
      <DrawerItem 
        label={() => (<Text style ={styles.customLabel}>Logout</Text>)} 
        onPress={handleLogout}
        style ={styles.drawerItemLogout} />
    </DrawerContentScrollView>

  )
}

export default function MyDrawer() {
  const [user,setUser] = useState(null);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(getAuth(),(authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  },[]);

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator screenOptions={screenOptions} drawerContent={(props) => (user ? <CustomDrawerContentLogin {...props} /> : <CustomDrawerContentLogout{...props} />)}>
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="CadastroForm" component={CadastroPessoal} />
        <Drawer.Screen name="VisualizacaoPerfil" component={VisualizacaoPerfil} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="CadastroAnimal" component={CadastroPetForm} />
        <Drawer.Screen name="EditarPerfil" component={EditarPerfil} />
        <Drawer.Screen name='SucessoAnimal' component={TelaSucessoAnimal} />
        <Drawer.Screen name='VisualizacaoAnimais' component={VisualizacaoAnimais} />
        <Drawer.Screen name='MeusAnimais' component={VisualizacaoAnimaisUsuario} />
        <Drawer.Screen name='DetalhesAnimal' component={DetalhesAnimal} />
        <Drawer.Screen name='Notifications' component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
