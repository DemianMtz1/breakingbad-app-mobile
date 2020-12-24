import React from 'react';
import {
    Alert,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const Form = ({ characters, char, setChar, newChar, setNewChar, setValidation }) => {
    const handleChange = (charProps) => {
        setChar(charProps);
    }
    const handleSearchInfo = () => {
        if (char.trim() === '') {
            showAlert();
            return;
        }
        characters.filter(charFil => {
            if(charFil.name === char){
                setNewChar({ ...newChar , properties: charFil });
            }
        });
        setValidation(true);
    }

    const showAlert = () => {
        Alert.alert('Error', 'Selecciona un personaje....', [{ text: 'Ok' }]);
        setValidation(false);
    }

    return (
        <View>
            <Picker
                selectedValue={char}
                onValueChange={(charValue) => handleChange(charValue)}
                style={{ backgroundColor: 'white' }}
            >
                <Picker.Item
                    style={styles.text}
                    label='- Seleccione un personaje - ' value='' />
                {
                    characters.map(char =>
                        <Picker.Item
                            style={styles.text}
                            key={char.char_id}
                            label={char.name}
                            value={char.name}
                        />
                    )
                }
            </Picker>

            <View style={styles.submitBtn}>
                <TouchableHighlight
                    onPress={() => handleSearchInfo()}
                >
                    <Text style={styles.submitText}>Info del personaje</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Raleway-Italic-VariableFont_wght',
    },
    submitBtn: {
        marginVertical: 20,
        backgroundColor: '#369457',
        paddingVertical: 15,
        borderRadius: 10,
        borderColor: '#555'
    },
    submitText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Righteous-Regular',
        fontWeight: 'bold',
        fontSize: 20
    }
})
