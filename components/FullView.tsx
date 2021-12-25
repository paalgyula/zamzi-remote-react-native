import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Config } from "../consts";

type FullViewProps = {
  color: string;
  children?: JSX.Element | JSX.Element[]
};

const FullView = ({ children, color = Config.BLUE }: FullViewProps) => {
  return <View style={[styles.fullView, {backgroundColor: color}]}>
    {children}
  </View>;
};

const styles = StyleSheet.create({
  fullView: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FullView;
