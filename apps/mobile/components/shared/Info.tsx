import { Text, View } from "react-native";

import {
  px4,
  py2,
  gapY1,
  border,
  textXl,
  textLg,
  fontBold,
  roundedLg,
  textWhite,
  textZinc400,
  borderZinc800,
} from "@/style";
import { InfoProps } from "./@types";

export const Info = ({ label, children }: InfoProps) => {
  return (
    <View style={[px4, py2, gapY1, roundedLg, border, borderZinc800]}>
      <Text style={[textXl, fontBold, textWhite]}>{label}</Text>
      <Text style={[textLg, textZinc400]}>{children}</Text>
    </View>
  );
}
