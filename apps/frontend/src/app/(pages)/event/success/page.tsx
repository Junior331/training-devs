"use client";
import { useContext, useEffect, useState } from "react";
import { IconFingerprint, IconLink } from "@tabler/icons-react";

import { EventI } from "core";
import { AccessByQrCode, InfoEvent } from "@/components/events";
import { CopyClipboard, Window } from "@/components/shared";
import { ContextEvent } from "@/data/contexts/ContextEvent";

export default function EventSuccess() {
  const { event } = useContext(ContextEvent);

  const [urlAtual, setUrlAtual] = useState("");

  useEffect(() => {
    setUrlAtual(window.location.origin);
  }, []);

  return event ? (
    <Window
      title={event.name}
      image={event.image}
      label="Seu evento foi criado:"
      background={event.imageBackground}
    >
      <InfoEvent hiddenName event={event as EventI} />
      <div className="flex gap-5 items-center py-6">
        <div className="flex-1 flex flex-col gap-5">
          <CopyClipboard
            Icone={IconLink}
            label="Link para Convidar"
            text={`${urlAtual}/invite/${event.eventSlug}`}
          />
          <CopyClipboard
            Icone={IconLink}
            label="Link Administrador"
            text={`${urlAtual}/event/admin/${event.id}`}
          />
          <CopyClipboard
            Icone={IconFingerprint}
            label="Senha Administrador"
            text={event.password ?? ""}
            observation="Essa senha não será exibida novamente, então guarde-a com cuidado!"
          />
        </div>
        <AccessByQrCode event={event as EventI} />
      </div>
    </Window>
  ) : null;
}
