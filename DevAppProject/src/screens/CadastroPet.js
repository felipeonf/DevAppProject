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

    const nomePet = [nomePet, setNomePet] = useState('')
    const tipo = [tipo, setTipo] = useState('')
    const idade = [idade, setIdade] = useState('')

    const handleCadastro = () => {


        navigation.navigate('Login');

    };


    


    return (
        <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Login"
        style={styles.input}
        value={login}
        onChangeText={(text) => setLogin(text)}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );


}

const styles = StyleSheet.create({
    content: {
        alignItems: "center",
        textAlign: "center",
      },
      ops: {
        fontSize: 60,
        fontStyle: "italic",
        paddingTop: 50,
        marginBottom: 30,
        color: "#88C9BF",
      },
      btnContainer: {
        backgroundColor: "#88C9BF",
        minWidth: 232,
        minHeight: 40,
      },
      btnText: {
        color: "#434343",
        textAlign: "center",
        paddingTop: 13,
        fontFamily: "Roboto",
        fontSize: 12,
      },
      textContent: {
        marginBottom: 10,
        marginTop: 40,
        color: "#BDBDBD",
        fontFamily: "Roboto",
        fontSize: 14,
      },


});

export default CadastroPetForm;