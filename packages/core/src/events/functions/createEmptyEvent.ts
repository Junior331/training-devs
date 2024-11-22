import { EventI } from "../model/events";
import { generateId } from "../../shared/utils";

export const createEmptyEvent = (): Partial<EventI> => {
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
