import { icons } from "../../../public/icons";
import { DashboardEventProps } from "./@types";
import { Statistics } from "@/components/shared";
import { AccessByQrCode, InfoEvent, ListGuests } from "@/components/events";

export const DashboardEvent = ({
  event,
  absent,
  presents,
  totalGeneral,
  updateListGuests,
}: DashboardEventProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InfoEvent event={event} className="flex-1" />
        <AccessByQrCode event={event} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Statistics
          text="Expectativa de Convidados:"
          value={event.expectedAudience}
          image={icons.guests}
        />
        <Statistics
          text="Confirmações:"
          value={presents.length}
          image={icons.confirmeds}
        />
        <Statistics
          text="Total Confirmado:"
          value={totalGeneral}
          image={icons.accompaniments}
        />
      </div>

      <button
        onClick={updateListGuests}
        className="button blue self-end mt-12"
      >
        <span>Atualizar Lista de Convidados</span>
      </button>

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confimaram PRESENÇA
      </span>
      <ListGuests guests={presents} />

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram AUSÊNCIA
      </span>
      <ListGuests guests={absent} />
    </div>
  );
};
