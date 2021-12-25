// import { LightenDarkenColor } from 'lighten-darken-color';
import * as React from "react";
import { Image, ImageSourcePropType, StyleSheet, TouchableHighlight, View } from "react-native";
import assets from "../assets";
import { Config } from "../consts";
import { useOrientation } from "../hooks/orientation";
import ZamziProgress from "./ZamziProgress";

const LightenDarkenColor = (col: string, amt: number) => {
  col = col.replace(/^#/, '')
  if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]

  let rs = col[0] + col[1];
  let gs = col[2] + col[3];
  let bs = col[4] + col[5];

  let [r, g, b] = [parseInt(rs, 16) + amt, parseInt(gs, 16) + amt, parseInt(bs, 16) + amt]

  rs = Math.max(Math.min(255, r), 0).toString(16)
  gs = Math.max(Math.min(255, g), 0).toString(16)
  bs = Math.max(Math.min(255, b), 0).toString(16)

  const rr = (rs.length < 2 ? '0' : '') + rs
  const gg = (gs.length < 2 ? '0' : '') + gs
  const bb = (bs.length < 2 ? '0' : '') + bs

  return `#${rr}${gg}${bb}`
}


type ChoiceProps = {
  color: string,
  image: ImageSourcePropType,
  actionHandler: () => void
}

const Choice = ({ color, image, actionHandler }: ChoiceProps) => {
  const style = StyleSheet.flatten(styles.item)
  return (
    <TouchableHighlight
      onPress={actionHandler}
      style={[style, {backgroundColor: color}]}
      underlayColor={LightenDarkenColor(color, 30)}
    >
      <Image style={styles.tinyLogo} source={image} />
    </TouchableHighlight>
  );
};

type ChoicesProps = {
  onChoice: (name: string) => void;
};

const Choices = ({ onChoice }: ChoicesProps) => {
  const orientation = useOrientation();

  if (orientation === "PORTRAIT") {
    return (
      <View style={styles.flexCol}>
        <View style={styles.flexRow}>
          <Choice
            color={Config.BLUE}
            image={assets.oval}
            actionHandler={() => onChoice("circle")}
          />
          <Choice
            color={Config.ORANGE}
            image={assets.rectangle}
            actionHandler={() => onChoice("rectangle")}
          />
        </View>

        <View style={styles.flexRow}>
          <Choice
            color={Config.RED}
            image={assets.triangle}
            actionHandler={() => onChoice("triangle")}
          />
          <Choice
            color={Config.GREEN}
            image={assets.diamond}
            actionHandler={() => onChoice("diamond")}
          />
        </View>

        <ZamziProgress number={30} started color={Config.BLUE}/>
      </View>
    );
  }

  return (
    <View style={styles.flexColLandscape}>
      <View style={styles.flexRow}>
        <Choice
          color={Config.BLUE}
          image={assets.oval}
          actionHandler={() => onChoice("circle")}
        />
        <Choice
          color={Config.ORANGE}
          image={assets.rectangle}
          actionHandler={() => onChoice("rectangle")}
        />
        <Choice
          color={Config.RED}
          image={assets.triangle}
          actionHandler={() => onChoice("triangle")}
        />
        <Choice
          color={Config.GREEN}
          image={assets.diamond}
          actionHandler={() => onChoice("diamond")}
        />
      </View>
      <ZamziProgress number={30} started color={Config.BLUE}/>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 80,
    height: 80,
    resizeMode: "stretch",
  },
  flexRow: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row"
  },
  flexCol: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginTop: 5,
    paddingBottom: 10,
    marginBottom: 0,
  },
  flexColLandscape: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginBottom: 0,
    paddingBottom: 5
  },
  item: {
    borderRadius: 20,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    flexGrow: 1,
    margin: 7,
    backgroundColor: Config.DARK_ORANGE,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Choices;
