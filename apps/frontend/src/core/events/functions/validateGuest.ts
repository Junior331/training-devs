import { GuestI } from "../model/events";

export const validateGuest = (guest: Partial<GuestI>): string[] => {
  const requiredFields = {
    name: "Name is required",
    email: "Email is required",
  };

  const errors: string[] = [];

  for (const [field, message] of Object.entries(requiredFields)) {
    const key = field as keyof GuestI;
    if (
      guest[key] === undefined ||
      guest[key] === null ||
      guest[key] === ""
    ) {
      errors.push(message);
    }
  }

  return errors;
};
