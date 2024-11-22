/* eslint-disable @typescript-eslint/no-empty-object-type */
import { EventI, GuestI } from "core";

interface GenericProps {
  event: EventI;
}

export interface DashboardEventProps extends GenericProps {
  absent: GuestI[];
  presents: GuestI[];
  totalGeneral: number;
}

export interface AccessByQrCodeProps extends GenericProps {}

export interface InfoEventProps extends GenericProps {
  className?: string;
}
export interface ListGuestsProps {
  guests: GuestI[];
}

export interface GuestItemProps {
  guest: GuestI;
}
