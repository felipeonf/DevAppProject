import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native';
import { Feather } from 'react-native-vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [isDogChecked, setDogChecked] = useState(false);
  const [isCatChecked, setCatChecked] = useState(false);
  const [isMaleChecked, setMaleChecked] = useState(false);
  const [isFemaleChecked, setFemaleChecked] = useState(false);
  const [isSmallChecked, setSmallChecked] = useState(false);
  const [isMediumChecked, setMediumChecked] = useState(false);
  const [isLargeChecked, setLargeChecked] = useState(false);
  const [isPuppyChecked, setPuppyChecked] = useState(false);
  const [isAdultChecked, setAdultChecked] = useState(false);
  const [isElderlyChecked, setElderlyChecked] = useState(false);
  const [isTempiChecked, setTempiChecked] = useState(false);
  const [isTimidChecked, setTimidChecked] = useState(false);
  const [isEGuardaChecked, setEGuardaChecked] = useState(false);
  const [isECalmoChecked, setECalmoChecked] = useState(false);
  const [isAmorChecked, setAmorChecked] = useState(false);
  const [isPreguiChecked, setPreguiChecked] = useState(false);
  const [isVacinChecked, setVacinChecked] = useState(false);
  const [isVermiChecked, setVermiChecked] = useState(false);
  const [isCastChecked, setCastChecked] = useState(false);
  const [isDoenChecked, setDoenChecked] = useState(false);
  const [isTermChecked, setTermChecked] = useState(false);
  const [isFotoChecked, setFotoChecked] = useState(false);
  const [isVisitChecked, setVisitChecked] = useState(false);
  const [isAcomChecked, setAcomChecked] = useState(false);

  const handleDogCheck = () => {
    setDogChecked(true);
    setCatChecked(false);
  };

  const handleCatCheck = () => {
    setCatChecked(true);
    setDogChecked(false);
  };

  const handleMaleCheck = () => {
    setMaleChecked(true);
    setFemaleChecked(false);
  };

  const handleFemaleCheck = () => {
    setFemaleChecked(true);
    setMaleChecked(false);
  };

  const handleSmallCheck = () => {
    setSmallChecked(true);
    setMediumChecked(false);
    setLargeChecked(false);
  };

  const handleMediumCheck = () => {
    setSmallChecked(false);
    setMediumChecked(true);
    setLargeChecked(false);
  };

  const handleLargeCheck = () => {
    setSmallChecked(false);
    setMediumChecked(false);
    setLargeChecked(true);
  };

  const handlePuppyCheck = () => {
    setPuppyChecked(true);
    setAdultChecked(false);
    setElderlyChecked(false);
  };

  const handleAdultCheck = () => {
    setPuppyChecked(false);
    setAdultChecked(true);
    setElderlyChecked(false);
  };

  const handleElderlyCheck = () => {
    setPuppyChecked(false);
    setAdultChecked(false);
    setElderlyChecked(true);
    
  };
  const handleTempiCheck = () => {
    setTempiChecked(!isTempiChecked);
    
  };

  const handleTimidChecked = () => {
    setTimidChecked(!isTimidChecked);
  };

  const handleEGuardaChecked = () => {
    setEGuardaChecked(!isEGuardaChecked);
  };

  const handleECalmoChecked = () => {
    setECalmoChecked(!isECalmoChecked);
  };

  const handleAmorChecked = () => {
    setAmorChecked(!isAmorChecked);
  };

  const handlePreguiChecked = () => {
    setPreguiChecked(!isPreguiChecked);
  };

  const handleVacinChecked = () => {
    setVacinChecked(!isVacinChecked);
  };

  const handleVermiChecked = () => {
    setVermiChecked(!isVermiChecked);
  };

  const handleCastChecked = () => {
    setCastChecked(!isCastChecked);
  };

  const handleDoenChecked = () => {
    setDoenChecked(!isDoenChecked);
  };

  const handleTermChecked = () => {
    setTermChecked(!isTermChecked);
  };
  const handleFotoChecked = () => {
    setFotoChecked(!isFotoChecked);
  };
  const handleVisitChecked = () => {
    setVisitChecked(!isVisitChecked);
  };
  const handleAcomChecked = () => {
    setAcomChecked(!isAcomChecked);
  };


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
          <Text style={styles.texto1}>{"Cadastro do Animal "}</Text>
        </View>
      </View>
      <Text style={styles.textContent}>
        Tenho interesse em cadastrar o animal para:
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ADOÇÃO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>APADRINHAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>AJUDA</Text>
        </TouchableOpacity>
      </View>




      <Text style={styles.textContent}>ADOCAO</Text>
      <TextInput placeholder="Nome do animal" style={styles.input} />
      <Text style={styles.textContent}>FOTO DO ANIMAL</Text>




      <Text style={styles.textContent}>ESPÉCIE</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleDogCheck}>
        <View style={styles.checkbox}>
          {isDogChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Cachorro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleCatCheck}>
        <View style={styles.checkbox}>
          {isCatChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Gato</Text>
      </TouchableOpacity>
      </View>


      <Text style={styles.textContent}>SEXO</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleMaleCheck}>
        <View style={styles.checkbox}>
          {isMaleChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Macho</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleFemaleCheck}>
        <View style={styles.checkbox}>
          {isFemaleChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Fêmea</Text>
      </TouchableOpacity>
      </View>

      <Text style={styles.textContent}>PORTE</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleSmallCheck}>
        <View style={styles.checkbox}>
          {isSmallChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Pequeno</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleMediumCheck}>
        <View style={styles.checkbox}>
          {isMediumChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Médio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleLargeCheck}>
        <View style={styles.checkbox}>
          {isLargeChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Grande</Text>
      </TouchableOpacity>
      </View>


      <Text style={styles.textContent}>IDADE</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handlePuppyCheck}>
        <View style={styles.checkbox}>
          {isPuppyChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Filhote</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleAdultCheck}>
        <View style={styles.checkbox}>
          {isAdultChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Adulto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleElderlyCheck}>
        <View style={styles.checkbox}>
          {isElderlyChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Idoso</Text>
      </TouchableOpacity>
      </View>


      <Text style={styles.textContent}>TEMPERAMENTO</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.checkboxContainer} onPress={handleTempiCheck}>
          <View style={styles.checkbox1}>
            {isTempiChecked && <AntDesign name="check" size={18} color="black" />}
          </View>
          <Text style={styles.label}>Brincalhão</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkboxContainer} onPress={handleTimidChecked}>
          <View style={styles.checkbox1}>
            {isTimidChecked && <AntDesign name="check" size={18} color="black" />}
          </View>
          <Text style={styles.label}>Tímido</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkboxContainer} onPress={handleEGuardaChecked}>
          <View style={styles.checkbox1}>
            {isEGuardaChecked && <AntDesign name="check" size={18} color="black" />}
          </View>
          <Text style={styles.label}>Guarda</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity style={styles.checkboxContainer} onPress={handleECalmoChecked}>
          <View style={styles.checkbox1}>
            {isECalmoChecked && <AntDesign name="check" size={18} color="black" />}
          </View>
          <Text style={styles.label}>Calmo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkboxContainer} onPress={handleAmorChecked}>
          <View style={styles.checkbox1}>
            {isAmorChecked && <AntDesign name="check" size={18} color="black" />}
          </View>
          <Text style={styles.label}>Amoroso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkboxContainer} onPress={handlePreguiChecked}>
          <View style={styles.checkbox1}>
            {isPreguiChecked && <AntDesign name="check" size={18} color="black" />}
          </View>
          <Text style={styles.label}>Preguiçoso</Text>
        </TouchableOpacity>
        </View>




        <Text style={styles.textContent}>SAÚDE</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleVacinChecked}>
        <View style={styles.checkbox1}>
          {isVacinChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Vacinado</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleVermiChecked}>
        <View style={styles.checkbox1}>
          {isVermiChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Vermifugado</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleCastChecked}>
        <View style={styles.checkbox1}>
          {isCastChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Castrado</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleDoenChecked}>
        <View style={styles.checkbox1}>
          {isDoenChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Doente</Text>
      </TouchableOpacity>
      </View>
      </View>
      <TextInput placeholder="Doença do animal" style={styles.input} />



      <Text style={styles.textContent}>EXIGÊNCIAS PARA ADOÇÃO</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleTermChecked}>
        <View style={styles.checkbox1}>
          {isTermChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Termos de adoção</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleFotoChecked}>
        <View style={styles.checkbox1}>
          {isFotoChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Fotos da casa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleVisitChecked}>
        <View style={styles.checkbox1}>
          {isVisitChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Visita prévia ao animal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={handleAcomChecked}>
        <View style={styles.checkbox1}>
          {isAcomChecked && <AntDesign name="check" size={18} color="black" />}
        </View>
        <Text style={styles.label}>Acompanhamento pós adoção</Text>
      </TouchableOpacity>
      </View>
      </View>

      <Text style={styles.textContent}>SOBRE O ANIMAL</Text>
      <TextInput placeholder="Compartilhe a história do animal" style={styles.input} />

      <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('adocao')}>
              <Text style={styles.btnText}>{"COLOCAR PARA ADOÇÃO"}</Text>
        </TouchableOpacity>
      
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  topBar: {
    backgroundColor: "#88C9BF",
    minHeight: 24,
  },
  texto1: {
    color: "#434343",
    fontSize: 16,
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
  textContent: {
    marginBottom: 10,
    marginTop: 40,
    color: "#434343",
 //   fontFamily: "Roboto",
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#88C9BF',
    padding: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 20,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox1: {
    width: 20,
    height: 20,
    marginRight: 20,
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
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
