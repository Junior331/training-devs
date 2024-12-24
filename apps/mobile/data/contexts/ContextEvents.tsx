import { createContext, ReactNode, useEffect, useState } from "react";

import { EventI } from "core";
import { useAPI } from "@/data/hooks/useAPI";
import { useLocalStorage } from "@/data/hooks/useLocalStorage";

interface ContextEventsProps {
  event: EventI | null;
  events: EventI[];

  selectEvent(id: string): void;
  deleteEvent(id: string): void;
  addEventByQrCode(qrcode: string): void;
}

export const ContextEvents = createContext<ContextEventsProps>({} as any);

export const ProviderEvents = ({ children }: { children: any }) => {
  const { httpPost } = useAPI();
  const { saveItem, getItem } = useLocalStorage();

  const [event, setEvent] = useState<EventI | null>(null);
  const [events, setEvents] = useState<EventI[]>([]);

  const selectEvent = async (id: string) => {
    
    if (!events) return;
    const event = events.find((e) => e.id === id);
    const eventCarregado = await listEvent(id, event?.password || "");
    setEvent(eventCarregado ?? null);
  };

  const addEventByQrCode = async (qrcode: string) => {
    try {
      const idESenha = JSON.parse(qrcode);

      const event = await listEvent(idESenha.id, idESenha.senha);
      if (!event) {
        return deleteEvent(idESenha.id);
      }

      const novosEvents = events.filter((e) => e.id !== idESenha.id);
      novosEvents.push(event);

      saveItem("events", novosEvents);
      setEvents(novosEvents);
    } catch (error: any) {
      alert(JSON.stringify(error));
    }
  };

  const deleteEvent = (id: string) => {
    const novosEvents = events.filter((e) => e.id !== id);
    saveItem("events", novosEvents);
    setEvents(novosEvents);
  };

  const listEvent = async (id: string, senha: string) => {
    const event = await httpPost("events/access", { id, senha });
    return event;
  };

  const listEvents = async () => {
    const events = await getItem("events");
    setEvents(events || []);
  };

  useEffect(() => {
    listEvents();
  }, []);

  return (
    <ContextEvents.Provider
      value={{
        event,
        events,
        selectEvent,
        addEventByQrCode,
        deleteEvent,
      }}
    >
      {children}
    </ContextEvents.Provider>
  );
};
