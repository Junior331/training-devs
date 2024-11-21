import { EventI, GuestI } from "@/core";

export const getEvent = ({
  id,
  events,
  password,
}: {
  id: string;
  password: string | null;
  events: EventI[];
}) => {
  return events.find((event) => event.id === id && event.password === password);
};

export const filterPresents = ({ event }: { event: EventI }) =>
  event?.guests.filter((guest) => guest.confirmed) ?? [];

export const filterAbsent = ({ event }: { event: EventI }) =>
  event?.guests.filter((guest) => !guest.confirmed) ?? [];  

export const totalGeneral = ({ event }: { event: EventI }) => {
  const presents = filterPresents({ event });

  return presents?.reduce((total: number, guest: GuestI) => {
    return total + guest.accompanimentsQuantity + 1;
  }, 0) ?? 0;
};  
