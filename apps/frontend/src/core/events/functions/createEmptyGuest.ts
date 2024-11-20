import { generateId } from "@/core/shared/utils";
import { GuestI } from "../model/events";

export const createEmptyGuest = (): GuestI => {
  return {
    id: generateId(),
    name: "",
    email: "",
    confirmed: false,
    hasAccompaniments: false,
    accompanimentsQuantity: 0,  
  };
};
    