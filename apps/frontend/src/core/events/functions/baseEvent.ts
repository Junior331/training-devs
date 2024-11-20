import { generateId } from "@/core/shared/utils";
import { EventI } from "../model/events";

export const baseEvent = (): Partial<EventI> => {
  return {
    name: "",
    image: "",
    location: "",
    description: "",
    id: generateId(),
    data: new Date(),
    imageBackground: "",
    expectedAudience: 1,
  };
};
