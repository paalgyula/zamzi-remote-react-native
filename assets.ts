import { ImageSourcePropType } from "react-native";

const oval = require("./assets/symbols/oval.png");
const rectangle = require("./assets/symbols/rectangle.png");
const triangle = require("./assets/symbols/triangle.png");
const diamond = require("./assets/symbols/diamond.png");

interface IGlyphsInterface {
  [index: string]: ImageSourcePropType;
}

const glyphs: IGlyphsInterface = {
  "oval": oval,
  "rectangle": rectangle,
  "triangle": triangle,
  "diamond": diamond
}

export default {
  oval,
  rectangle,
  triangle,
  diamond,
  glyphs
}
