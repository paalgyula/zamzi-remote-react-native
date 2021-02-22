import React from 'react';
import { Button, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Config } from '../consts';

export default Welcome = ({navigation}) => {
    return (<View style={styles.container}>
        <Text style={styles.boldFont}>Welcome!</Text>
        <TextInput style={styles.boldFont} placeholder="enter your name"></TextInput>
        <Button onPress={e => navigation.navigate('Chooser')} title="Enter"/>
    </View>)
}

const styles = StyleSheet.create({
    boldFont: {
        fontFamily: Config.defaultFont,
        fontWeight: "800",
        fontSize: 22
    },
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});