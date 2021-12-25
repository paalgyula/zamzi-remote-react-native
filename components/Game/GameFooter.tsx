import * as React from "react";

import { Platform, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Config } from "../../consts";
import { ScoreBox } from "./ScoreBox";
import { PlayerContext } from '../../context/PlayerContext';

type GameFooterProps = {
  score?: number;
};

const GameFooter: React.FC<GameFooterProps> = ({ score = 0 }) => {
  const insets = useSafeAreaInsets();
  const player = React.useContext(PlayerContext)

  return (
    <View style={styles.shadow}>
      <View style={styles.footer}>
        <Text style={styles.boldFont}>{player.name}</Text>
        <View style={{ flex: 1 }}></View>
        <ScoreBox score={score} />
      </View>
      <View
        style={{
          height: insets.bottom,
          backgroundColor: "#fff",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    width: '100%',
    zIndex: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 15,
  },
  boldFont: {
    fontFamily: Config.defaultFont,
    fontWeight: "800",
    fontSize: 22,
  },
  footer: {
    backgroundColor: "#fff",
    zIndex: 19,
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
});

export default GameFooter;
