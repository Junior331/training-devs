import { useFonts } from "expo-font";
import { Image, Text, View } from "react-native";

import {
  w4_5,
  flexRow,
  text3Xl,
  textWhite,
  textCenter,
  textBlue500,
  textZinc400,
  alignCenter,
} from "@/style";

export const Logo = () => {
  const [carregada] = useFonts({
    Righteous: require("@/assets/fonts/Righteous-Regular.ttf"),
  });

  if (!carregada) return null;

  const fonte = { fontFamily: "Righteous" };

  return (
    <View style={alignCenter}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ width: 80, height: 80 }}
      />
      <View style={flexRow}>
        <Text style={[text3Xl, textWhite, fonte]}>CONVIT</Text>
        <Text style={[text3Xl, textBlue500, fonte]}>3 </Text>
        <Text style={[text3Xl, textWhite, fonte]}>DIGITAL</Text>
      </View>
      <View style={w4_5}>
        <Text style={[textZinc400, textCenter]}>
          Crie e gerencie o convite do seu evento de forma rápida e fácil, sem
          complicações!
        </Text>
      </View>
    </View>
  );
}