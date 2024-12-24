import { useEffect } from "react";
import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, ScrollView } from "react-native";

import { useEvents } from "@/data/hooks/useEvents";
import { NoEvents } from "@/components/event/NoEvents";
import { NewEvent } from "@/components/event/NewEvent";
import { EventCard } from "@/components/event/EventCard";
import { flex1, bgBlack, p4, gapY4, py8, alignCenter } from "@/style";

export default function ScreenEvents() {
  const { events } = useEvents();
  const router = useRouter();

  return (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      {events.length === 0 && <NoEvents />}
      <ScrollView contentContainerStyle={[gapY4, py8, alignCenter]}>
        {events.map((event) => (
          <Pressable
            key={event.id}
            style={{ maxWidth: 400, width: "100%" }}
            onPress={() => router.push(`/events/${event.id}`)}
          >
            <EventCard event={event} />
          </Pressable>
        ))}
        <NewEvent />
      </ScrollView>
    </SafeAreaView>
  );
}
