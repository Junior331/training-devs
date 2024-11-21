import Link from "next/link";
import Image from "next/image";
import QRCode from "react-qr-code";

import { events } from "@/core";

export default function PaginaEventos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {events.map((event) => (
        <div
          key={event.id}
          className="
            flex flex-col w-full overflow-hidden
            bg-zinc-800 rounded-lg
          "
        >
          <div className="relative w-full h-52">
            <Image
              fill
              alt={event.name}
              src={event.image}
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col items-center p-7 gap-5 text-center">
            <span className="text-lg font-black">{event.name}</span>
            <p className="flex-1 text-sm text-zinc-400">{event.description}</p>
            <QRCode
              value={JSON.stringify({ id: event.id, senha: event.password })}
              className="w-44 h-44"
            />
            <div className="flex flex-wrap gap-5">
              <Link
                href={`/event/admin/${event.id}/${event.password}`}
                className="flex-1 button red"
              >
                Admin
              </Link>
              <Link
                href={`/invitation/${event.eventSlug}`}
                className="flex-1 button green"
              >
                Invitation
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
