/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { EventI, events, GuestI } from "core";
import { DashboardEvent } from "@/components/events/DashboardEvent";
import { FormPasswordEvent } from "@/components/events/FormPasswordEvent";
import { useAPI } from "@/data/hooks/useAPI";

export default function EventsAdmin() {
  const { httpPost } = useAPI();
  const { all } = useParams();

  const id = all?.[0];
  const [event, setEvent] = useState<EventI | null>(null);
  const [password, setPassword] = useState<string | null>(all?.[1] ?? null);

  const presents = event?.guests.filter((c) => c.confirmed) ?? [];
  const absent = event?.guests.filter((c) => !c.confirmed) ?? [];

  const totalGeneral =
    presents?.reduce((total: number, guest: GuestI) => {
      return total + guest.accompanimentsQuantity + 1;
    }, 0) ?? 0;

  const listEvent = () => {
    const event = events.find((ev) => ev.id === id && ev.password === password);
    setEvent(event ?? null);
  };

  const getEvent = useCallback(async () => {
    if (!id || !password) return;
    const evento = await httpPost("/events/access", { id, password });
    setEvent(evento);
  }, [httpPost, id, password]);

  useEffect(() => {
    listEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, password]);

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <DashboardEvent
          event={event}
          absent={absent}
          presents={presents}
          totalGeneral={totalGeneral}
          updateListGuests={getEvent}
        />
      ) : (
        <FormPasswordEvent
          accessEvent={getEvent}
          password={password || ""}
          setPassword={setPassword}
        />
      )}
    </div>
  );
}
