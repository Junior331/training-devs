import { StyleSheet } from "react-native";
import {
  px4,
  py2,
  gapX2,
  flexRow,
  roundedMd,
  bgBlue600,
  justifyCenter,
} from "./utility";

const style = StyleSheet.create({
  centerGrow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  
  button: {
    columnGap: gapX2.columnGap,
    flexDirection: flexRow.flexDirection,
    paddingVertical: py2.paddingVertical,
    borderRadius: roundedMd.borderRadius,
    paddingHorizontal: px4.paddingHorizontal,
    backgroundColor: bgBlue600.backgroundColor,
    justifyContent: justifyCenter.justifyContent,
  },
});

export const button = style.button;
export const centerGrow = style.centerGrow;
