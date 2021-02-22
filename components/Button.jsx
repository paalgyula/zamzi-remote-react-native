import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { Config } from '../consts';

const ButtonEx = ({ onPress, title = 'button title' }) => {
    return (
        <View style={styles.shadow}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: Config.DARK_ORANGE,
        marginTop: 20,
        paddingBottom: 5,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'flex-start'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: Config.defaultFont,
        textShadowRadius: 2,
        textShadowColor: '#000',
        textShadowOffset: { height: 1 }
    },
    button: {
        borderRadius: 4,
        paddingLeft: 15,
        paddingRight: 15,
        padding: 10,
        color: '#fff',
        shadowColor: Config.DARK_ORANGE,
        shadowOffset: { height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        backgroundColor: Config.ORANGE
    }
})

export default ButtonEx;
