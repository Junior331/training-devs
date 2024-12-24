import { Image, Text, View } from "react-native";

import {
  p4,
  w9_10,
  wFull,
  textLg,
  textXs,
  fontBold,
  bgZinc900,
  roundedMd,
  textWhite,
  textCenter,
  alignCenter,
  textZinc400,
} from "@/style";
import { EventCardProps } from "./@types";

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <View style={[bgZinc900]}>
      <Image
        source={{ uri: event.image }}
        style={[{ height: 150 }, wFull, roundedMd]}
      />
      <View style={[p4, alignCenter]}>
        <Text style={[textWhite, fontBold, textLg, textCenter]}>
          {event.name}
        </Text>
        <Text style={[textZinc400, textXs, textCenter, w9_10]}>
          {event.description}
        </Text>
      </View>
    </View>
  );
}
