import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button
} from "react-native";

const EditarPerfilPet = ({ navigation }) => {
    const [nomePet, setNomePet] = useState('Rex')
    const [tipo, setTipo] = useState('Cachorro')
    const [idade, setIdade] = useState('4 anos')
    const [raca, setRaca] = useState('Border Collie')
    const [dono, setDono] = useState('Marília Martins de Souza')
    const [adocao, setAdocao] = useState(false)
    const [vacinado, setVacinado] = useState(false)
    const [peso, setPeso] = useState('3 kg')
    const [descricao, setDescricao] = useState('Bem comportado')
    const [sexo, setSexo] = useState(false)



  const handleSalvar = () => {
    // TODO: INTEGRAÇÃO COM BACKEND / BANCO DE DADOS
    // REST API / ETC
    // VOLTANDO PARA A TELA DE PERFIL
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
  <Text style={styles.title}>Editar</Text>
  <TextInput
    placeholder="Nome do Pet"
    style={styles.input}
    value={nomePet}
    onChangeText={(text) => setNomePet(text)}
  />
  <TextInput
    placeholder="Nome do Dono"
    style={styles.input}
    value={dono}
    onChangeText={(text) => setTipo(text)}
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
        value={peso}
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
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
  
  <TouchableOpacity style={styles.button} onPress={handleSalvar}>
    <Text style={styles.buttonText}>Salvar</Text>
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

export default EditarPerfilPet;