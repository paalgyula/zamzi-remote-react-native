import * as React from "react";
import { Text } from "react-native";
import baseStyle from "../baseStyle";

const ZamziLogo = () => (
  <Text
    style={[
      baseStyle.bigWhiteMessage,
      { position: "absolute", top: 25, fontSize: 40 },
    ]}
  >
    ZamaZingo
  </Text>
);

export default ZamziLogo;
