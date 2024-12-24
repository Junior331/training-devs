"use client";

import { useContext, useEffect } from "react";
import { useParams } from "next/navigation";

import { EventI } from "core";
import { InfoEvent } from "@/components/events";
import { Processing, Window } from "@/components/shared";
import { FormGuest } from "@/components/events/FormGuest";
import { ContextEvent } from "@/data/contexts/ContextEvent";

export default function EventSlug() {
  const { eventSlug } = useParams();
  const { event, guest, getEvent, addGuest, updateGuest } =
    useContext(ContextEvent);

  useEffect(() => {
    getEvent(eventSlug as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventSlug]);

  return event?.eventSlug ? (
    <div>
      <Window
        label="Você foi convidado para:"
        title={event.name}
        image={event.image}
        background={event.imageBackground}
      >
        <InfoEvent hiddenName event={event as EventI} />
        <div className="flex flex-col gap-4 pt-10">
          <span className="text-xl font-bold">Insira seus dados</span>
          <div className="border-t border-zinc-800"></div>
          <FormGuest guest={guest} guestChanged={updateGuest} />
          <button
            className={`botao self-center ${guest.confirmed ? "verde" : "vermelho"}`}
            onClick={addGuest}
          >
            Confirmar {guest.confirmed ? "Presença" : "Ausência"}
          </button>
        </div>
      </Window>
    </div>
  ) : (
    <Processing />
  );
}
