import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

import {
  p4,
  py4,
  w4_5,
  wFull,
  flex1,
  gapX2,
  gapY4,
  button,
  bgBlack,
  flexRow,
  bgRed500,
  fontBold,
  roundedLg,
  selfCenter,
  textWhite,
} from "@/style";
import { GuestI } from "core";
import { useEvents } from "@/data/hooks/useEvents";
import { InfoEvent } from "@/components/event/InfoEvent";
import { ListGuest } from "@/components/event/ListGuest";
import { Statistics } from "@/components/shared/Statistic";
import { TitleSection } from "@/components/shared/TitleSection";
import { EventNotFound } from "@/components/event/EventNotFount";

export default function ScreenDetailsEvent() {
  const { event, selectEvent, deleteEvent } = useEvents();
  const params = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    selectEvent(params.id as string);
  }, [params.id]);

  const presents = event?.guests?.filter((c: GuestI) => c.confirmed) ?? [];
  const absent = event?.guests?.filter((c: GuestI) => !c.confirmed) ?? [];

  const totalGuests = presents.reduce((total, confirmed) => {
    return total + confirmed.accompanimentsQuantity + 1;
  }, 0);

  return event ? (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      <ScrollView contentContainerStyle={[gapY4, py4]}>
        <Image
          source={{ uri: event.image }}
          style={[wFull, roundedLg, { height: 200, minWidth: 200 }]}
        />
        <InfoEvent event={event} />
        <View style={[flexRow, gapX2, { marginTop: 40 }]}>
          <Statistics
            text="Expectativa"
            value={event.expectedAudience}
            imagem={require("@/assets/images/convidados.png")}
          />
          <Statistics
            text="Confirmações"
            value={presents.length}
            imagem={require("@/assets/images/confirmados.png")}
          />
          <Statistics
            text="Total"
            value={totalGuests}
            imagem={require("@/assets/images/acompanhantes.png")}
          />
        </View>
        <TitleSection text="Presenças Confirmadas" />
        <ListGuest guests={presents} />

        <TitleSection text="Ausências Confirmadas" />
        <ListGuest guests={absent} />

        <Pressable
          style={[button, bgRed500, w4_5, selfCenter]}
          onPress={() => {
            deleteEvent(event.id);
            router.back();
          }}
        >
          <AntDesign name="delete" size={20} color="white" />
          <Text style={[fontBold, textWhite]}>Excluir Evento</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <EventNotFound />
  );
}
