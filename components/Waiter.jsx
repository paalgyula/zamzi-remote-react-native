import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Config } from '../consts';
import Button from './Button';

const Waiter = ({ navigator }) => {
    return (
        <View style={styles.waiter}>
            <Text style={styles.waitMessage}>
                Waiting another players to answer...
            </Text>
            {/* <Text style={{marginTop: 15, color: '#fff'}}>
                Waiter...
            </Text> */}
            <Button style={styles.button} title={"Macika"} />
        </View>
    )
}

const styles = StyleSheet.create({
    waitMessage: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
        textShadowColor: '#000',
        fontFamily: Config.defaultFont,
    },
    waiter: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Config.BLUE
    }
})

export default Waiter
