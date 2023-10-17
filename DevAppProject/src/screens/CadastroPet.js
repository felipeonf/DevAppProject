import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";


import { useState } from 'react';

const CadastroPetForm = ()  => {

    const [nomePet, setNomePet] = useState('')
    const [tipo, setTipo] = useState('')
    const [idade, setIdade] = useState('')
    const [raca, setRaca] = useState('')

    const handleCadastro = () => {

      const petData = {

        nome: nomePet,
        tipo: tipo,
        idade: idade,
        raca: raca,

      };

      firebase.database().ref('pets').push(petData)

    };


    return (
        <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        placeholder="Nome do Pet"
        style={styles.input}
        value={nomePet}
        onChangeText={(text) => setNomePet(text)}
      />
      <TextInput
        placeholder="Tipo do Pet"
        style={styles.input}
        value={tipo}
        onChangeText={(text) => setTipo(text)}
      />
      <TextInput
        placeholder="Idade do Pet"
        style={styles.input}
        value={idade}
        onChangeText={(text) => setIdade(text)}
      />
      <TextInput
        placeholder="Raca do Pet"
        style={styles.input}
        value={raca}
        onChangeText={(text) => setRaca(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#88C9BF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#434343',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroPetForm;