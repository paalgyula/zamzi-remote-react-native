import { StyleSheet } from "react-native";
import { Config } from "./consts";

const baseStyle = StyleSheet.create({
  bigWhiteMessage: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    textShadowColor: "#000",
    fontFamily: Config.defaultFont,
    padding: 10,
  },
  blueView: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: Config.BLUE,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default baseStyle;
