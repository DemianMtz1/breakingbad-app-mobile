import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
export const Resultado = ({ newChar }) => {

    const {
        img,
        name,
        birthday,
        occupation,
        status
    } = newChar.properties;

    return (
        <View style={styles.charContent}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.imgChar}
                    source={{ uri: img }}
                />
            </View>


            <Text style={styles.textChar}>Nombre: {' '}
                <Text style={styles.textName}>{name}</Text>
            </Text>

            <Text style={styles.textChar}>Cumpleaños: {' '}
                <Text style={styles.textName}>{birthday}</Text>
            </Text>

            <Text style={styles.textChar}>Ocupación: {' '}
                {occupation.length > 1 ?
                    occupation.map((rol, idx) =>
                        <Text
                            key={idx}
                            style={styles.textName}
                        >{rol + ' - '}</Text>) :
                    <Text style={styles.textName}>{occupation}</Text>
                }
            </Text>

            <Text style={styles.textChar}>Estado de vida: {' '}
                <Text style={styles.textName}>{status}</Text>
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    charContent: {
        backgroundColor: '#739484',
        flex: 1,
        padding: '2.5%',
        marginBottom: 30
    },
    imgChar: {
        borderRadius: 10,
        paddingTop: 20,
        width: '100%',
        height: '100%',
    },
    imgContainer: {
        alignSelf: 'center',
        height: 400,
        marginVertical: 30,
        width: 300,
    },
    textChar: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Raleway-VariableFont_wght'
    },
    textName: {
        fontFamily: 'Raleway-Black',
        fontWeight: 'bold',
        color: 'white'
    }
});