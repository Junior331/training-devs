/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { createContext, useCallback, useEffect, useState } from "react";

import {
  utils,
  GuestI,
  EventI,
  createEmptyGuest,
  createEmptyEvent,
} from "core";
import { useAPI } from "@/data/hooks/useAPI";
import { useMessages } from "@/data/hooks/useMensagens";

export interface ContextEventProps {
  event: Partial<EventI>;
  guest: Partial<GuestI>;
  eventSlug: boolean;

  updateEvent(event: Partial<EventI>): void;
  updateGuest(guest: Partial<GuestI>): void;

  getEvent(idOuAlias: string): Promise<void>;
  saveEvent(): Promise<void>;

  addGuest(): void;
}

export const ContextEvent = createContext<ContextEventProps>({} as any);

export const ProviderContextEvent = (props: any) => {
  const router = useRouter();
  const { addError } = useMessages();
  const { httpGet, httpPost } = useAPI();

  const [eventSlug, setEventSlug] = useState(true);
  const [event, setEvent] = useState<Partial<EventI>>(createEmptyEvent());
  const [guest, setGuest] = useState<Partial<GuestI>>(createEmptyGuest());

  const saveEvent = useCallback(async () => {
    try {
      const eventCreated = await httpPost("/events", event);
      router.push("/event/success");
      setEvent({
        ...eventCreated,
        data: utils.unformatDate(eventCreated.data),
      });
    } catch (error: any) {
      addError(error.messagem ?? "Ocorreu um erro inesperado!");
    }
  }, [event, httpPost, router]);

  const getEvent = useCallback(
    async (idOrEventSlug: string) => {
      try {
        const event = await httpGet(`/events/${idOrEventSlug}`);
        if (!event) return;
        setEvent({
          ...event,
          data: utils.unformatDate(event.data),
        });
      } catch (error: any) {
        addError(error.messagem ?? "Ocorreu um erro inesperado!");
      }
    },
    [httpGet, setEvent]
  );

  const addGuest = useCallback(
    async function () {
      try {
        await httpPost(`/events/${event.eventSlug}/guest`, guest);
        router.push("/invite/thankyou");
      } catch (error: any) {
        addError(error.messagem ?? "Ocorreu um erro inesperado!");
      }
    },
    [httpPost, event, guest, router]
  );

  const validateEventSlug = useCallback(
    async function () {
      try {
        const { valido } = await httpGet(
          `/events/validate/${event.eventSlug}/${event.id}`
        );
        setEventSlug(valido);
      } catch (error: any) {
        addError(error.messagem ?? "Ocorreu um erro inesperado!");
      }
    },
    [httpGet, event]
  );

  useEffect(() => {
    if (event?.eventSlug) validateEventSlug();
  }, [event?.eventSlug, validateEventSlug]);

  return (
    <ContextEvent.Provider
      value={{
        event,
        guest,
        getEvent,
        addGuest,
        eventSlug,
        saveEvent,
        updateEvent: setEvent,
        updateGuest: setGuest,
      }}
    >
      {props.children}
    </ContextEvent.Provider>
  );
};
