"use client";

import { useContext } from "react";

import { Window } from "@/components/shared";
import { FormEvent } from "@/components/events";
import { ContextEvent } from "@/data/contexts/ContextEvent";

export default function Events() {
  const { event } = useContext(ContextEvent);
  
  return (
    <div>
      <Window
        image={event?.image}
        label="Qual evento vamos criar?"
        background={event?.imageBackground}
        title={event?.name ? event?.name : "Novo Evento"}
      >
        <FormEvent />
      </Window>
    </div>
  );
}
