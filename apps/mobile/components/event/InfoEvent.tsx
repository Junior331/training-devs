import { View } from "react-native";

import { gapY2 } from "@/style";
import { InfoEventProps } from "./@types";
import { Info } from "@/components/shared/Info";

export const InfoEvent = ({ event }: InfoEventProps) => {
  return (
    <View style={gapY2}>
      <Info label="Nome">{event.name}</Info>
      <Info label="Data">
        {new Date(event.data).toLocaleDateString("pt-BR")}
        {" às "}
        {new Date(event.data).toLocaleTimeString("pt-BR")}
      </Info>
      <Info label="Local">{event.location}</Info>
      <Info label="Descrição">{event.description}</Info>
    </View>
  );
}
