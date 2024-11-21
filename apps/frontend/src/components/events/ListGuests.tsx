import { ListGuestsProps } from "./@types";
import GuestItem from "./GuestItem";


export default function ListGuests({ guests }: ListGuestsProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {guests.map((guest) => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
      </ul>
    </div>
  );
}
