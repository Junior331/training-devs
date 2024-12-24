import { Text, View } from "react-native";

import {
  px4,
  py2,
  gapY2,
  border,
  textLg,
  textSm,
  roundedMd,
  textWhite,
  textZinc400,
  borderZinc800,
} from "@/style";
import { ListGuestProps } from "./@types";

export const ListGuest = ({ guests }: ListGuestProps) => {
  return (
    <View>
      {guests && guests.length > 0 ? (
        <View style={gapY2}>
          {guests.map((guest) => (
            <View
              key={guest.id}
              style={[border, borderZinc800, roundedMd, px4, py2]}
            >
              <Text style={[textWhite, textLg]}>{guest.name}</Text>
              <Text style={[textZinc400, textSm]}>{guest.email}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={[textZinc400]}>Ninguém por aqui ainda...</Text>
      )}
    </View>
  );
}
