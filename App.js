import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Keyboard,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Resultado } from './components/Resultado';



const App: () => React$Node = () => {

  const [characters, setCharacters] = useState([]);
  const [char, setChar] = useState('');
  const [newChar, setNewChar] = useState({
    properties: {}
  });
  const [validation, setValidation ] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      const url = 'https://www.breakingbadapi.com/api/characters';
      const response = await fetch(url);
      const responseData = await response.json();
      setCharacters(responseData);
    }
    getCharacters();
    console.log(characters);
  }, []);



  const handleHideKeyboard = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => handleHideKeyboard()}
    >
      <ScrollView style={styles.container}>
        <Header />

        <View style={styles.content}>
          <Form
            characters={characters}
            char={char}
            setChar={setChar}
            setNewChar={setNewChar}
            newChar={newChar}
            setValidation={setValidation}

          />

        </View>

        {
          validation ? 
          <Resultado
            newChar={newChar}
          /> : null
        }

      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283b1c',
    paddingHorizontal: '2.5%'
  },
  content: {
    flex: 1,
    marginVertical: 30,
    paddingHorizontal: '2.5%'
  },
});

export default App;
