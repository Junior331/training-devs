import { GuestI } from "../model/events";
import { validateGuest } from "./validateGuest";

export const completeGuest = (guest: Partial<GuestI>): GuestI => {
  const erros = validateGuest(guest);

  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }
  const accompanimentsQuantity = guest.accompanimentsQuantity ?? 0;
  const hasAccompaniments =
    guest.hasAccompaniments &&
    guest.confirmed &&
    accompanimentsQuantity > 0;


  const guestComplete = {
    ...guest,
    accompanimentsQuantity: hasAccompaniments ? accompanimentsQuantity : 0,
    hasAccompaniments: hasAccompaniments,
  };

  return guestComplete as GuestI;
};
