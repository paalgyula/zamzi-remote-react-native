import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export const ScoreBox = ({score = 0}) => {
    return (
        <View style={styles.container}>
            <Text style={{...styles.text, fontFamily: 'Montserrat-ExtraBold'}}>{score}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 6,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 10,
        fontWeight: 'bold',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: "800",
        fontSize: 18
    }
});
