import { EventI } from "../model/events";
import { generateId } from "@/core/shared/utils";
import { validateEvent } from "./validateEvent";
import { generatePassword } from "@/core/shared/utils";

export const completeEvent = (eventPartial: Partial<EventI>): EventI => {

  const errors = validateEvent(eventPartial);
  if (errors.length) {
    throw new Error(errors.join("\n"));
  }

  const evento: EventI = {
    ...eventPartial,
    id: eventPartial.id ?? generateId(),
    password: eventPartial.password ?? generatePassword(12),
    expectedAudience: +(eventPartial.expectedAudience ?? 1),
  } as EventI;

  return evento;
};
