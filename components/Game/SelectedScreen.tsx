import { useNavigation, useRoute } from "@react-navigation/native";
import * as React from "react";
import { Image, Text, View } from "react-native";
import FullView from "../FullView";
import baseStyle from "../../baseStyle";
import assets from "../../assets";
import { Config } from "../../consts";
import ZamziProgress from "../ZamziProgress";

type SelectionProps = {
  selected: string;
  time: number;
};

const SelectedScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  React.useEffect(() => navigation.addListener("beforeRemove", (e) => {
    e.preventDefault()
  }), [navigation]);

  const { selected, time } = route.params as SelectionProps;

  let color = Config.BLUE;

  switch (selected) {
    case "oval":
      color = Config.BLUE;
      break;
    case "rectangle":
      color = Config.ORANGE;
      break;
    case "triangle":
      color = Config.RED;
      break;
    case "diamond":
      color = Config.GREEN;
      break;
  }

  return (
    <FullView color={color}>
      <Text style={baseStyle.bigWhiteMessage}>Your answer is:</Text>

      {/* <Text style={baseStyle.bigWhiteMessage}>{selected}</Text> */}

      <Image
        source={assets.glyphs[selected]}
        resizeMode="contain"
        style={{ height: 150, width: 150, margin: 40, maxHeight: '30%' }}
      />

      <Text style={baseStyle.bigWhiteMessage}>
        You answered in {time} seconds
      </Text>

      <ZamziProgress number={100} started color={color == Config.RED ? Config.LIGHTGREEN : Config.RED}/>
    </FullView>
  );
};

export default SelectedScreen;
