import { StyleSheet } from "react-native";
import { colors } from "./colors";

const style = StyleSheet.create({
  // Flexbox
  flex1: { flex: 1 },
  flexRow: { flexDirection: "row" },

  // Alignment
  alignCenter: { alignItems: "center" },
  itemsCenter: { alignItems: "center" },
  itemsStretch: { alignItems: "stretch" },
  selfCenter: { alignSelf: "center" },
  selfStart: { alignSelf: "flex-start" },
  justifyCenter: { justifyContent: "center" },

  // Padding
  p2: { padding: 8 },
  p4: { padding: 16 },
  py1: { paddingVertical: 4 },
  py2: { paddingVertical: 8 },
  py4: { paddingVertical: 16 },
  py8: { paddingVertical: 32 },
  px4: { paddingHorizontal: 16 },

  // Margins
  mt1: { marginTop: 4 },
  mt3: { marginTop: 12 },

  // Gaps
  gapX1: { columnGap: 4 },
  gapX2: { columnGap: 8 },
  gapX4: { columnGap: 16 },
  gapY1: { rowGap: 4 },
  gapY2: { rowGap: 8 },
  gapY4: { rowGap: 16 },

  // Width
  w4_5: { width: "80%" },
  w9_10: { width: "90%" },
  wFull: { width: "100%" },

  // Font styles
  fontBlack: { fontWeight: "900" },
  fontBold: { fontWeight: "bold" },
  textXs: { fontSize: 12 },
  textSm: { fontSize: 14 },
  textLg: { fontSize: 18 },
  textXl: { fontSize: 20 },
  text2Xl: { fontSize: 24 },
  text3Xl: { fontSize: 32 },
  textCenter: { textAlign: "center" },

  // Colors
  textWhite: { color: colors.white },
  textRed500: { color: colors.red[500] },
  textBlue500: { color: colors.blue[500] },
  textZinc400: { color: colors.zinc[400] },
  bgBlack: { backgroundColor: colors.black },
  bgRed500: { backgroundColor: colors.red[500] },
  bgBlue500: { backgroundColor: colors.blue[500] },
  bgBlue600: { backgroundColor: colors.blue[600] },
  bgZinc800: { backgroundColor: colors.zinc[800] },
  bgZinc900: { backgroundColor: colors.zinc[900] },
  bgZinc950: { backgroundColor: colors.zinc[950] },
  borderZinc800: { borderColor: colors.zinc[800] },

  // Borders
  border: { borderWidth: 1 },
  roundedMd: { borderRadius: 4 },
  roundedLg: { borderRadius: 8 },
  roundedFull: { borderRadius: 9999 },
});

export const {
  p2,
  p4,
  py1,
  py2,
  py4,
  py8,
  px4,
  
  mt1,
  mt3,

  gapX1,
  gapX2,
  gapX4,
  gapY1,
  gapY2,
  gapY4,

  w4_5,
  w9_10,
  wFull,

  flex1,
  flexRow,

  fontBlack,
  fontBold,
  
  textXs,
  textSm,
  textLg,
  textXl,
  text2Xl,
  text3Xl,
  textCenter,
  textWhite,
  textRed500,
  textBlue500,
  textZinc400,

  bgBlack,
  bgRed500,
  bgBlue500,
  bgBlue600,
  bgZinc800,
  bgZinc900,
  bgZinc950,

  border,
  borderZinc800,

  roundedMd,
  roundedLg,
  roundedFull,
  
  alignCenter,
  itemsCenter,
  itemsStretch,
  justifyCenter,
  selfCenter,
  selfStart,
} = style;
