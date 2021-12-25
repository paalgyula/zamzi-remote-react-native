import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import baseStyle from "../baseStyle";
import { usePlayer } from "../context/PlayerContext";
import ZamziButton from "./ZamziButton";
import ZamziLogo from "./ZamziLogo";
import ZamziTextInput from "./ZamziTextInput";
import {joinRoom} from '../services/ZamziService'

const PinScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [pin, setPin] = React.useState("");
  const navigation = useNavigation()

  const player = usePlayer();

  React.useEffect(() => {

  }, []);

  useEffect(() => {
    (async () => {
      // const { status } = await BarCodeScanner.requestPermissionsAsync();
      // setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    Alert.alert(
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
  };

  // if (hasPermission === null) {
  //     return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //     return <Text>No access to camera</Text>;
  // }

  const handleJoin = () => {
    joinRoom(pin, player.name || "", player.playerId).then(r => {
      if (r.success) {
        player.realtime?.setRoomId(r.roomId)
        player.realtime?.setPlayerInfo(player.name, player.playerId)
        navigation.navigate("GameFrame")
      }
    }).catch(console.error)
  }

  return (
    <View style={baseStyle.blueView}>
      <ZamziLogo />
      {/* <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            /> */}
      <Text style={baseStyle.bigWhiteMessage}>Please enter your game PIN</Text>
      <ZamziTextInput keyboardType="number-pad" onChange={setPin} value={pin} />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <ZamziButton onPress={handleJoin} title="Join Room" />
    </View>
  );
};

export default PinScreen;

// const styles = StyleSheet.create({
//     container: {
//         height: '100%',
//         width: '100%',
//         flex: 1,
//         backgroundColor: baseStyles.blueView,
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// })
