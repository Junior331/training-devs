import { Text } from "react-native";

import { TitleSectionProps } from "./@types";
import { fontBold, py4, selfStart, textXl, textZinc400 } from "@/style";

export const TitleSection = ({ text }: TitleSectionProps) => {
  return (
    <Text style={[textXl, fontBold, py4, textZinc400, selfStart]}>{text}</Text>
  );
}
