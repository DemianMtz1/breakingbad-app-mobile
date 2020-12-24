import React from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    View
} from 'react-native';
export const Header = () => {

    return (
        <View style={styles.imgLogo}>
            <Image
                style={{ width: 310, height: 200 }}
                source={require('../assets/img/logo.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imgLogo: {
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: Platform.OS === 'ios' ? 60 : 40,
        marginLeft: 20,
        width: '100%',
    }
})

