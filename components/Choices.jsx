import React from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { Config } from '../consts';

const Choices = ({ onChoice }) => {
    const handle = (shape) => (e) => {
        onChoice(shape)
        Alert.alert(shape)
    }

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
            <View
                onStartShouldSetResponder={handle('circle')}
                style={{ ...styles.row, backgroundColor: Config.BLUE }}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/symbols/oval.png')}
                />
            </View>
            <View
                onStartShouldSetResponder={handle('rectangle')}
                style={{ ...styles.row, backgroundColor: Config.ORANGE }}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/symbols/rectangle.png')}
                />
            </View>
            <View
                onStartShouldSetResponder={handle('triangle')}
                style={{ ...styles.row, backgroundColor: Config.RED }}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/symbols/triangle.png')}
                />
            </View>
            <View
                onStartShouldSetResponder={handle('diamond')}
                style={{ ...styles.row, backgroundColor: Config.GREEN }}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/symbols/diamond.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#fff',
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 15,
    },
    tinyLogo: {
        width: 80,
        height: 80,
        resizeMode: 'stretch'
    },
    row: {
        backgroundColor: Config.BLUE,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        width: '46%',
        height: '48%',
        margin: '2%',
        elevation: 4,
        padding: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Choices