import * as React from "react";
import {
  KeyboardTypeOptions,
  StyleSheet, TextInput, View
} from "react-native";
import { Config } from "../consts";

type ZamziTextInputProps = {
  value?: string;
  keyboardType?: KeyboardTypeOptions,
  onChange: (text: string) => void;
};

const ZamziTextInput: React.FC<ZamziTextInputProps> = ({
  onChange,
  keyboardType,
  value = "",
}) => {
  return (
    <View style={styles.background}>
      <TextInput keyboardType={keyboardType} style={styles.input} value={value} onChangeText={onChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    padding: 15,
    borderBottomWidth: 4,
    borderBottomColor: "rgba(0,0,0,.2)",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
  input: {
    textAlign: "center",
    // flexGrow: 1,
    width: '90%',
    textShadowOffset: { height: 3, width: 0 },
    textShadowColor: "#888",
    textShadowRadius: 2,
    fontFamily: Config.defaultFont,
    fontWeight: "900",
    fontSize: 22,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: Config.defaultFont,
    textShadowRadius: 2,
    textShadowColor: "#000",
    textShadowOffset: { height: 1, width: 0 },
  },
  button: {
    borderRadius: 4,
    paddingLeft: 15,
    paddingRight: 15,
    padding: 10,
    color: "#fff",
    shadowColor: Config.DARK_ORANGE,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: Config.ORANGE,
  },
});

export default ZamziTextInput;
