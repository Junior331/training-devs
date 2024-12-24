/* eslint-disable @typescript-eslint/no-empty-object-type */
import { EventI, GuestI } from "core";

interface GenericProps {
  event: EventI;
}

export interface DashboardEventProps extends GenericProps {
  absent: GuestI[];
  presents: GuestI[];
  totalGeneral: number;
  updateListGuests: () => void
}

export interface AccessByQrCodeProps extends GenericProps {}

export interface InfoEventProps extends GenericProps {
  className?: string;
  hiddenName?: boolean;
}
export interface ListGuestsProps {
  guests: GuestI[];
}

export interface GuestItemProps {
  guest: GuestI;
}

export interface FormPasswordEventProps {
  password: string;
  accessEvent: () => void;
  setPassword: (password: string) => void;
}
