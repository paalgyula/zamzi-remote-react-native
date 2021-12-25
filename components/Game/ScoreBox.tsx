import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

type ScoreBoxProps = {
  score: number;
};

export const ScoreBox = ({ score = 0 }: ScoreBoxProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontFamily: "Montserrat-ExtraBold" }]}>
        {score}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    fontWeight: "bold",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 18,
  },
});
