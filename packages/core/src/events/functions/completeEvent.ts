import { EventI } from "../model/events";
import { validateEvent } from "./validateEvent";
import { generateId, generatePassword } from "../../shared/utils";

export const completeEvent = (eventPartial: Partial<EventI>): EventI => {

  const errors = validateEvent(eventPartial);
  if (errors.length) {
    throw new Error(errors.join("\n"));
  }

  const event: EventI = {
    ...eventPartial,
    id: eventPartial.id ?? generateId(),
    password: eventPartial.password ?? generatePassword(12),
    expectedAudience: +(eventPartial.expectedAudience ?? 1),
  } as EventI;

  return event;
};
