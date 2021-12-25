import React from "react";

import { useFonts } from "expo-font";
// import "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PinScreen from "./components/PinScreen";
import GameFrame from "./components/Game/GameFrame";
import UserForm from "./components/UserForm";
import { PlayerProvider } from "./context/PlayerContext";

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold-800.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <PlayerProvider>
        <Stack.Navigator initialRouteName="UserForm" headerMode="none">
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{ headerTitle: undefined }}
          />
          <Stack.Screen
            name="PinScreen"
            options={{ headerTitle: undefined }}
            component={PinScreen}
          />
          <Stack.Screen
            name="GameFrame"
            // options={{ headerTitle: null }}
            component={GameFrame}
          />
        </Stack.Navigator>
      </PlayerProvider>
    </NavigationContainer>
  );
};

export default App;
// export {default} from "./storybook";
