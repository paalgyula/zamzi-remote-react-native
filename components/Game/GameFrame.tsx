import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Alert, Vibration } from "react-native";
// import 'react-native-gesture-handler';
import { Config } from "../../consts";
import Choice from "../Choices";
import Waiter from "./Waiter";
import GameFooter from "./GameFooter";
import GameToolbar from "./GameToolbar";
import { io, Socket } from "socket.io-client";
import Connecting from "./Connecting";
import { NavigationState, useNavigation } from "@react-navigation/native";
import { usePlayer } from "../../context/PlayerContext";
import Choices from "../Choices";
import SelectedScreen from "./SelectedScreen";
// import { io, Socket } from 'socket.io-client';

const PATTERN = [
  0,
  100,
  100,
  100
];

const Stack = createStackNavigator();

const GameFrame = () => {
  const navigation = useNavigation();
  const player = usePlayer();

  const [score, setScore] = React.useState(0);
  const [pin, setPin] = React.useState("");
  const [pageStatus, setPageStatus] = React.useState("");
  const [message, setMessage] = React.useState<string | undefined>()

  React.useEffect(() => {
    player.realtime?.connect().then(() => {
      player.realtime?.on("status", handleStatusUpdate);
      player.realtime?.on("selected", (props) => {
        navigation.navigate("SelectedScreen", props)
      });

      player.realtime?.on("disconnect", () => {
        navigation.navigate("Connecting")
      })
    });

    return () => {
      player.realtime?.off("status");
      player.realtime?.off("disconnect");
    };
  }, [player]);

  const handleStatusUpdate = (statusJson: any) => {
    console.log("status update", statusJson);
    const { score, screen, room, message } = statusJson;
    if (score) {
      setScore(+score);
    }

    if (message) {
      setMessage(message)
    }

    if (room) {
      setPageStatus(`${room.status} of ${room.questions}`);
      setPin(room.pin);
    }

    if (screen) {
      if (screen === "Choices") {
        Vibration.vibrate(PATTERN)
      }
      navigation?.navigate(screen);
    }
  };

  React.useEffect(() => {}, [navigation]);

  const ref = React.createRef<View>();

  const handleAnswer = (answer: string) => {
    player.realtime?.answer(answer);
  };

  return (
    <View ref={ref} style={styles.container}>
      <StatusBar backgroundColor="#fff" hidden={false} />

      <GameToolbar>
        <Text style={styles.boldFont}>PIN: {pin}</Text>
        <View style={{ flex: 1 }}></View>
        <Text style={styles.boldFont}>{pageStatus}</Text>
      </GameToolbar>

      <View
        style={{
          display: "flex",
          flex: 1,
          flexGrow: 1,
          flexDirection: "row",
          height: '100%',
          width: '100%',
          backgroundColor: "#D8D8D8",
        }}
      >
        <Stack.Navigator initialRouteName="Connecting" headerMode="none">
          <Stack.Screen name="Choices">
            {() => <Choices onChoice={handleAnswer} />}
          </Stack.Screen>
          <Stack.Screen name="Waiter">
            {() => <Waiter message={message}/> }
          </Stack.Screen>
          <Stack.Screen name="Connecting" component={Connecting}></Stack.Screen>
          <Stack.Screen name="SelectedScreen">
            {() => <SelectedScreen />}
          </Stack.Screen>
        </Stack.Navigator>
      </View>

      <GameFooter score={score} />
    </View>
  );
};

export default GameFrame;

const styles = StyleSheet.create({
  boldFont: {
    fontFamily: Config.defaultFont,
    fontWeight: "800",
    fontSize: 22,
  },
  container: {
    display: 'flex',
     height: "100%",
    // width: "100%",
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
