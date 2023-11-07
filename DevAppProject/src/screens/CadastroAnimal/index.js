import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { Alert } from "react-native";

import Header from "../../components/Header";
import config from "../../config/index";
import styles from "./style";
import ImageButton from "../../components/ImageButton";
import imageActions from "../../actions/image"

const CadastroPetForm = ({ navigation }) => {
  const [nomePet, setNomePet] = useState("");
  const [tipo, setTipo] = useState(""); 
  const [porte, setPorte] = useState("");
  const [idade, setIdade] = useState("");
  const [raca, setRaca] = useState("");
  const [peso, setPeso] = useState("");
  const [descricao, setDescricao] = useState("");
  const [sexo, setSexo] = useState("");
  const [adocao, setAdocao] = useState("");
  const [vacinado, setVacinado] = useState("");
  const [image, setImage] = useState(null);

  const getImage = async () => {
    const result = await imageActions.pickImage();
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleCadastro = async () => {
    const animalData = {
      nomePet: nomePet,
      tipo: tipo,
      idade: idade,
      raca: raca,
      adocao: adocao,
      vacinado: vacinado,
      peso: peso,
      descricao: descricao,
      sexo: sexo,
      porte: porte,
    };
    try {
      const doc = await addDoc(collection(config.db, "animais"), animalData);
      imageActions.uploadImage(image, "animaisPhoto/"+doc.id);
      Alert.alert("Animal criado com sucesso!");
      navigation.navigate("Dashboard");
    } catch (e) {
      console.error("Erro ao cadastrar animal:", error);
      Alert.alert("Falha ao cadastrar o animal!");
      navigation.navigate("Dashboard");
    }
  };

  return (
    <>
      <Header text={"Cadastro de Animal"} backgroundColor={"#fee29b"} topBarColor={"#ffd358"} />
      <View style={styles.container}>
        <TextInput
          placeholder="Nome do Pet"
          style={styles.input}
          value={nomePet}
          onChangeText={(text) => setNomePet(text)}
        />

        <View style={styles.buttonContainer}>
          <Text>Tipo</Text>
          <Button
            title="Gato"
            onPress={() => setTipo("Gato")}
            color={tipo === "Gato" ? "#ffd358" : "gray"}
          />
          <Button
            title="Cachorro"
            onPress={() => setTipo("Cachorro")}
            color={tipo === "Cachorro" ? "#ffd358" : "gray"}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Text>Porte</Text>
          <Button
            title="Pequeno"
            onPress={() => setPorte("Pequeno")}
            color={porte === "Pequeno" ? "#ffd358" : "gray"}
          />
          <Button
            title="Médio"
            onPress={() => setPorte("Médio")}
            color={porte === "Médio" ? "#ffd358" : "gray"}
          />
          <Button
            title="Grande"
            onPress={() => setPorte("Grande")}
            color={porte === "Grande" ? "#ffd358" : "gray"}
          />
        </View>

        <TextInput
          placeholder="Idade do Pet"
          style={styles.input}
          value={idade}
          onChangeText={(text) => setIdade(text)}
        />
        <TextInput
          placeholder="Raça do Pet"
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
            onPress={() => setAdocao("Sim")}
            color={adocao === "Sim" ? "#ffd358" : "gray"}
          />
          <Button
            title="Não"
            onPress={() => setAdocao("Não")}
            color={adocao === "Não" ? "#ffd358" : "gray"}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Text>Sexo</Text>
          <Button
            title="Macho"
            onPress={() => setSexo("Macho")}
            color={sexo === "Macho" ? "#ffd358" : "gray"}
          />
          <Button
            title="Fêmea"
            onPress={() => setSexo("Fêmea")}
            color={sexo === "Fêmea" ? "#ffd358" : "gray"}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Text>Vacinado</Text>
          <Button
            title="Sim"
            onPress={() => setVacinado("Sim")}
            color={vacinado === "Sim" ? "#ffd358" : "gray"}
          />
          <Button
            title="Não"
            onPress={() => setVacinado("Não")}
            color={vacinado === "Não" ? "#ffd358" : "gray"}
          />
        </View>

        <TextInput
          placeholder="Descrição"
          style={styles.input}
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
        />

        <ImageButton text="adicionar foto" onPress={getImage} />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#ffd358" }]}
          onPress={handleCadastro}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CadastroPetForm;
