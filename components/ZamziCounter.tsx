import * as React from "react";

import { Text, View } from "react-native";
import baseStyle from "../baseStyle";
import { Config } from "../consts";

type ZamziCounterProps = {
  number: number;
  started?: boolean;
};

const ZamziCounter = ({ number, started = false }: ZamziCounterProps) => {
  const [count, setCount] = React.useState<number>(number);
  const [inter, setInter] = React.useState<NodeJS.Timer | undefined>();

  React.useEffect(() => {
    if (started) {
      const i = setInterval(() => {
        setCount((c) => c - 1);
      }, 1000);

      setInter(i);
    }
    return () => {
      if (inter) clearInterval(inter);
    };
  }, [started, number]);

  return (
    <View
      style={{
        padding: 20,
        margin: 20,
        height: 90,
        width: 90,
        borderRadius: 100 / 2,
        backgroundColor: Config.ORANGE,
        borderColor: Config.DARK_ORANGE,
        borderWidth: 3,
        shadowRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={[
          baseStyle.bigWhiteMessage,
          { padding: 0, margin: 0, textShadowRadius: 0, shadowColor: "none" },
        ]}
      >
        {count}
      </Text>
    </View>
  );
};

export default ZamziCounter;
