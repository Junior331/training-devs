"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { EventI, events, GuestI } from "@/core";
import DashboardEvent from "@/components/events/DashboardEvent";
import FormPasswordEvent from "@/components/events/FormPasswordEvent";
import { filterAbsent, filterPresents, getEvent, totalGeneral } from "./utils";

export default function EventsAdmin() {
  const { all } = useParams();
  const [event, setEvent] = useState<EventI | null>(null);
  const [presents, setPresents] = useState<GuestI[]>([]);
  const [absent, setAbsent] = useState<GuestI[]>([]);
  const [allGeneral, setAllGeneral] = useState<number>(0);
  const [password] = useState<string | null>(all?.[1] ?? null);

  const id = all?.[0];
  
  useEffect(() => {
    const eventFind = getEvent({ id: id ?? "", password, events });
    if(!eventFind) return;
    const presentsFilterd = filterPresents({ event: eventFind});
    const absentFilterd = filterAbsent({ event: eventFind });
    const totalGeneralFilterd = totalGeneral({ event: eventFind });

    setEvent(eventFind ?? null);
    setAbsent(absentFilterd ?? []);
    setPresents(presentsFilterd ?? []);
    setAllGeneral(totalGeneralFilterd ?? 0);

  }, [id, password]);

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <>
          <DashboardEvent
            event={event}
            absent={absent}
            presents={presents}
            totalGeneral={allGeneral}
          />
        </>
      ) : (
        <>
          <FormPasswordEvent />
        </>
      )}
    </div>
  );
}
