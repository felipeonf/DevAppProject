import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, ScrollView, SafeAreaView, View } from 'react-native';
import { Feather, FontAwesome } from 'react-native-vector-icons';
import EditarPerfil from './EditarPerfil';
import { useNavigation } from '@react-navigation/native';


const VisualizacaoPerfilPet = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.topBar}></View>
        <View style={styles.menuBar}>
          <View style={styles.menuBarText}>
            <TouchableOpacity>
              <Feather name="menu" size={24} color="#434343" />
            </TouchableOpacity>
            <Text style={styles.texto1}>{"Perfil Pet"}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.circle}>
            <FontAwesome name="circle" size={250} color="#434343" />
          </View>
          <Text style={styles.texto2}>{"Rex"}</Text>
          <View style={styles.campo}>
            <Text style={styles.title}>{"NOME"}</Text>
            <Text style={styles.textContent}>{"Rex"}</Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.title}>{"IDADE"}</Text>
            <Text style={styles.textContent}>{"4 anos"}</Text>
          </View>
          <View>
            <View style={styles.campo}>
            <Text style={styles.title}>{"TIPO"}</Text>
            <Text style={styles.textContent}>{"Cachorro"}</Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.title}>{"RAÇA"}</Text>
            <Text style={styles.textContent}>{"Border Collie"}</Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.title}>{"NOME COMPLETO DO DONO"}</Text>
            <Text style={styles.textContent}>{"Marília Martins de Souza"}</Text>
          </View>
          </View>
          <View>
            <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('EditarPerfilPet')}>
              <Text style={styles.btnText}>{"EDITAR PERFIL"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  texto2: {
    color: "#434343",
    fontSize: 20,
    marginBottom: 36,
  },
  texto1: {
    color: "#434343",
    fontSize: 16,
  },
  topBar: {
    backgroundColor: "#88C9BF",
    minHeight: 24,
  },
  menuBar: {
    backgroundColor: "#CFE9E5",
    minHeight: 56,
    paddingTop: 16,
    paddingLeft: 16,
  },
  menuBarText: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center", 
    gap: 30,
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  circle: {
    marginBottom: 16, 
  },
  textContent: {
    color: "#757575",
    fontSize: 14,
  },
  title: {
    color: "#589b9b",
    fontSize: 12,
    fontWeight: "500",
  },
  campo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: '#88C9BF',
    minWidth: 232,
    minHeight: 40,
  },
  btnText: {
    color: '#434343',
    textAlign: 'center',
    paddingTop: 13,
    fontSize: 12,
  }
});

export default VisualizacaoPerfilPet;
