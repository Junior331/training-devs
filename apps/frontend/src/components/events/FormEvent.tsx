
"use client";

import { utils } from "core";
import { useContext } from "react";
import { EntryField, Steps } from "@/components/shared";
import { ContextEvent } from "@/data/contexts/ContextEvent";

export const FormEvent = () => {
  const { event, eventSlug, updateEvent, saveEvent } = useContext(ContextEvent);

  const labels = [
    "Identificação do Evento",
    "Local e Data",
    "Informações Finais",
  ];

  const allowNextStep: boolean[] = [
    !!event.eventSlug && !!event.name && eventSlug,
    !!event.data && !!event.location,
    !!event.description && (event.expectedAudience ?? 0) > 0,
  ];

  return (
    <div>
      <Steps
        labels={labels}
        action={saveEvent}
        labelAction="Salvar"
        allowNextStep={allowNextStep}
      >
        <div className="flex flex-col gap-5">
          <EntryField
            label="Identificador"
            description="Identificador único e exclusivo para o evento (usado na URL)"
            value={utils.formatEventSlug(event.eventSlug || "")}
            onChange={(e) =>
              updateEvent({
                ...event,
                eventSlug: utils.formatEventSlug(e.target.value),
              })
            }
            error={eventSlug ? "" : "Alias já foi utilizado em outro evento"}
          />
          <EntryField
            label="Nome"
            description='Nome do evento (ex.: "Festa de Aniversário do João")'
            value={event.name ?? ""}
            onChange={(e) =>
              updateEvent({
                ...event,
                name: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <EntryField
            label="Data"
            description="Data e hora em que o evento ocorrerá"
            value={utils.formatDate(event.data ?? new Date())}
            onChange={(e) =>
              updateEvent({
                ...event,
                data: utils.unformatDate(e.target.value),
              })
            }
            type="datetime-local"
          />
          <EntryField
            label="Local"
            description="Local onde o evento será realizado"
            value={event.location ?? ""}
            onChange={(e) =>
              updateEvent({
                ...event,
                location: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <EntryField
            label="Descrição"
            description='Descrição do evento (ex.: "Só entra se trouxer presente!")'
            value={event.description ?? ""}
            onChange={(e) =>
              updateEvent({
                ...event,
                description: e.target.value,
              })
            }
          />
          <EntryField
            label="Imagem"
            description="URL da imagem que será exibida no convite"
            value={event.image ?? ""}
            onChange={(e) =>
              updateEvent({
                ...event,
                image: e.target.value,
              })
            }
          />
          <EntryField
            label="Background"
            description="URL da imagem que será exibida como background no convite"
            value={event.imageBackground ?? ""}
            onChange={(e) =>
              updateEvent({
                ...event,
                imageBackground: e.target.value,
              })
            }
          />
          <EntryField
            label="Público Esperado"
            description="Total de convidados e acompanhantes esperados"
            value={event.expectedAudience ?? 1}
            onChange={(e) =>
              updateEvent({
                ...event,
                expectedAudience: Number(e.target.value),
              })
            }
            type="number"
            min={1}
          />
        </div>
      </Steps>
    </div>
  );
};
