import { GuestI } from "../model/events";
import { generateId } from "../../shared/utils";

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
    