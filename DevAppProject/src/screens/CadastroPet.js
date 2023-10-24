import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Button,
  } from "react-native";


import { useState } from 'react';

const CadastroPetForm = ()  => {

    const [nomePet, setNomePet] = useState('')
    const [tipo, setTipo] = useState('')
    const [idade, setIdade] = useState('')
    const [raca, setRaca] = useState('')
    const [adocao, setAdocao] = useState(false)
    const [vacinado, setVacinado] = useState(false)
    const [peso, setPeso] = useState('')
    const [descricao, setDescricao] = useState('')
    const [sexo, setSexo] = useState(false)

    const handleCadastro = () => {

      const petData = {

        nome: nomePet,
        tipo: tipo,
        idade: idade,
        raca: raca,
        adocao: adocao,
        vacinado: vacinado,
        peso: peso,
        descricao: descricao,
        sexo: sexo,

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
      <TextInput
        placeholder="Peso do Pet"
        style={styles.input}
        value={raca}
        onChangeText={(text) => setPeso(text)}
      />
      <View style={styles.buttonContainer}>
        <Text>Adoção</Text>
        <Button
          title="Sim"
          onPress={() => setAdocao(true)}
          color={adocao ? 'green' : 'gray'}
        />
        <Button
          title="Não"
          onPress={() => setAdocao(false)}
          color={!adocao ? 'red' : 'gray'}
        />
        </View>
        <View style={styles.buttonContainer}>
        <Text>Sexo</Text>
        <Button
          title="Macho"
          onPress={() => setSexo(true)}
          color={sexo ? 'blue' : 'gray'}
        />
        <Button
          title="Fêmea"
          onPress={() => setSexo(false)}
          color={!sexo ? 'pink' : 'gray'}
        />
      </View>

        <View style={styles.buttonContainer}>
        <Text>Vacinado</Text>
        <Button
          title="Sim"
          onPress={() => setVacinado(true)}
          color={vacinado ? 'green' : 'gray'}
        />
        <Button
          title="Não"
          onPress={() => setVacinado(false)}
          color={!vacinado ? 'red' : 'gray'}
        />
      </View>

      <TextInput
        placeholder="Descrição"
        style={styles.input}
        value={raca}
        onChangeText={(text) => setDescricao(text)}
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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
});

export default CadastroPetForm;