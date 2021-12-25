import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type GameToolbarProps = {
  children: JSX.Element | JSX.Element[];
};

const GameToolbar: React.FC<GameToolbarProps> = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.shadow}>
      <View style={{ height: insets.top, backgroundColor: '#fff' }} />
      <View style={styles.toolbar}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    zIndex: 5,
    width: '100%',
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 15,
  },
  toolbar: {
    backgroundColor: "#fff",
    zIndex: 19,
    width: "100%",
    height: 40,
    display: "flex",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
  },
});

export default GameToolbar;
