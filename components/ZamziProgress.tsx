import * as React from "react";
import { Animated, Dimensions, Easing } from "react-native";

import { Text, View } from "react-native";
import baseStyle from "../baseStyle";
import { Config } from "../consts";

type ZamziProgressProps = {
  number: number;
  color?: string;
  started?: boolean;
};

const ZamziProgress = ({
  number: duration,
  color = Config.RED,
  started = false,
}: ZamziProgressProps) => {
  const screen = Dimensions.get("screen");

  React.useEffect(() => {
    if(started) {
      animate(Easing.ease)
    }
  }, [started, duration]);

  let scale = new Animated.Value(0);

  const animate = (easing: any) => {
    scale.setValue(0);
    Animated.timing(scale, {
      useNativeDriver: false,
      toValue: 1,
      duration: duration * 1000,
      easing: Easing.linear,
    } as Animated.TimingAnimationConfig).start();
  };

  const size = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [screen.width, 0]
  });

  const animatedStyles = [
    {
      width: size,
      height: '100%',
      backgroundColor: color,
    },
  ];

  return (
    <View
      onTouchStart={() => {
        animate(Easing.bounce)
        console.log("anim start")
      }}
      style={{
        height: 5,
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Animated.View
        style={animatedStyles}
      />
    </View>
  );
};

export default ZamziProgress;
