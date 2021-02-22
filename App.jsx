import React from 'react';

import { useFonts } from "expo-font";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';

import Login from './components/Login';
import GameFrame from './components/GameFrame';

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold-800.ttf')
    });

    if (!loaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Chooser" headerMode="none">
                <Stack.Screen
                    name='Login'
                    options={{ headerTitle: null }}
                    component={Login} />
                <Stack.Screen
                    name='Lobby'
                    options={{headerTitle: null}}
                    component={Welcome}/>
                <Stack.Screen
                    name='Chooser'
                    // options={{ headerTitle: null }}
                    component={GameFrame} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
// export {default} from "./storybook";
