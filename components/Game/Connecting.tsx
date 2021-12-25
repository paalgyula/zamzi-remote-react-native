import * as React from "react";
import { View } from "react-native";
import baseStyle from "../../baseStyle";
import { Text } from "react-native";
import { Config } from "../../consts";

const Connecting = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Config.BLUE,
      }}
    >
      <Text style={baseStyle.bigWhiteMessage}>Connecting to the server...</Text>
    </View>
  );
};

export default Connecting;
