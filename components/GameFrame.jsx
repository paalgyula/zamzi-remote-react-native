import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Choices from "./Choices";
import { ScoreBox } from "./ScoreBox";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Waiter from './Waiter';
import { Config } from '../consts';

const Toolbar = ({ children }) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={styles.shadow}>
            <View style={{ height: insets.top, backgroundColor: '#fff' }} />
            <View style={styles.toolbar}>
                {children}
            </View>
        </View>
    )
}

const Footer = ({ score = 0 }) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={styles.shadow}>
            <View style={styles.footer}>
                <Text style={styles.boldFont}>me</Text>
                <View style={{ flex: 1 }}></View>
                <ScoreBox score={score} />
            </View>
            <View style={{
                height: insets.bottom,
                backgroundColor: '#fff'
            }} />
        </View>
    )
}

const GameFrame = ({ navigation }) => {
    const [GameNavigator, setGameNavigation] = React.useState(createStackNavigator())

    React.useEffect(() => {

    }, [navigation])


    const pin = 125312;

    const handleAnswer = (answer) => {
        navigation.navigate("Waiter")
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#fff"
                hidden={false} />

            <Toolbar>
                <Text style={styles.boldFont}>PIN: {pin}</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={styles.boldFont}>1 of 15</Text>
            </Toolbar>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                backgroundColor: '#D8D8D8'
            }}>
                <GameNavigator.Navigator initialRouteName="Choices" headerMode="none">
                    <GameNavigator.Screen name="Choices">
                        {() => <Choices onChoice={handleAnswer} />}
                    </GameNavigator.Screen>
                    <GameNavigator.Screen name="Waiter">
                        {() => <Waiter />}
                    </GameNavigator.Screen>
                </GameNavigator.Navigator>
            </View>

            <Footer />
        </View>
    )
}

export default GameFrame

const styles = StyleSheet.create({
    boldFont: {
        fontFamily: Config.defaultFont,
        fontWeight: "800",
        fontSize: 22
    },
    shadow: {
        zIndex: 5,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 15,
    },
    toolbar: {
        backgroundColor: '#fff',
        zIndex: 19,
        width: '100%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: "center",
    },
    footer: {
        backgroundColor: '#fff',
        zIndex: 19,
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        alignItems: "center",
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
