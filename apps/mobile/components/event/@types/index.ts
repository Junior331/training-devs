import { EventI, GuestI } from "core";

export interface EventCardProps {
  event: EventI;
}

export interface InfoEventProps {
  event: EventI;
}

export interface ListGuestProps {
  guests: GuestI[];
}
