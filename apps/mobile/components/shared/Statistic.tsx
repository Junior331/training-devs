import { Image, Text, View } from "react-native";

import {
  p4,
  flex1,
  gapY2,
  text2Xl,
  bgZinc900,
  fontBlack,
  textWhite,
  roundedLg,
  textCenter,
  itemsCenter,
  textZinc400,
} from "@/style";
import { StatisticsProps } from "./@types";

export const Statistics = ({ imagem, text, value }: StatisticsProps) => {
  return (
    <View style={[flex1, itemsCenter, bgZinc900, p4, roundedLg]}>
      <Image
        source={imagem}
        style={{ width: 80, height: 80, marginTop: -40 }}
      />
      <View style={[itemsCenter, gapY2]}>
        <Text style={[textZinc400, textCenter]}>{text}</Text>
        <Text style={[textWhite, text2Xl, fontBlack]}>{value}</Text>
      </View>
    </View>
  );
}
