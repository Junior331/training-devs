import InfoEvent from "./InfoEvent";
import ListGuests from "./ListGuests";
import { Statistics } from "../shared";
import AccessByQrCode from "./AccessByQrCode";
import { DashboardEventProps } from "./@types";
import { icons } from "../../../public/icons";

export default function DashboardEvento({
  event,
  absent,
  presents,
  totalGeneral,
}: DashboardEventProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InfoEvent event={event} className="flex-1" />
        <AccessByQrCode event={event} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Statistics
          text="Guest Expectations:"
          value={event.expectedAudience}
          image={icons.guests}
        />
        <Statistics
          text="Confirmations:"
          value={presents.length}
          image={icons.confirmeds}
        />
        <Statistics
          text="Total Confirmed:"
          value={totalGeneral}
          image={icons.accompaniments}
        />
      </div>

      <button className="button blue self-end mt-12">
        <span>Update guest list</span>
      </button>

      <span className="flex py-2 text-xl font-bold text-white/80">
        Guests who have confirmed their PRESENCE
      </span>
      <ListGuests guests={presents} />

      <span className="flex py-2 text-xl font-bold text-white/80">
        Guests who have confirmed their ABSENCE
      </span>
      <ListGuests guests={absent} />
    </div>
  );
}
