import { Image, Text, View } from "react-native";

import {
  py4,
  gapY4,
  wFull,
  textLg,
  text3Xl,
  fontBold,
  bgZinc950,
  roundedLg,
  textWhite,
  itemsCenter,
  textZinc400,
} from "@/style";

export const NoEvents = () => {
  return (
    <View style={itemsCenter}>
      <View style={[itemsCenter, py4, bgZinc950, wFull, roundedLg, gapY4]}>
        <Image
          source={require("@/assets/images/sem-eventos.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={[textWhite, text3Xl, fontBold]}>OOPS...</Text>
        <View>
          <Text style={[textZinc400, textLg]}>
            Ainda não há eventos criados.
          </Text>
          <Text style={[textZinc400, textLg]}>Vamos escanear um QR Code?</Text>
        </View>
        <Image
          source={require("@/assets/images/triangulo.png")}
          style={{ width: 25, height: 17 }}
        />
      </View>
    </View>
  );
}
