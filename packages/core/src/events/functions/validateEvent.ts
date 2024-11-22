import { EventI } from "../model/events";

export const validateEvent = (eventPartial: Partial<EventI>): string[] => {
  const requiredFields = {
    name: "Name is required",
    data: "Date is required",
    image: "Image is required",
    eventSlug: "Event slug is required",
    location: "Location is required",
    description: "Description is required",
    imageBackground: "Image background is required",
    expectedAudience: "Expected audience is required",
  };

  const errors: string[] = [];

  for (const [field, message] of Object.entries(requiredFields)) {
    const key = field as keyof EventI;
    if (
      eventPartial[key] === undefined ||
      eventPartial[key] === null ||
      (key === "expectedAudience" &&
        typeof eventPartial[key] === "number" &&
        eventPartial[key]! < 1) ||
      eventPartial[key] === ""
    ) {
      errors.push(message);
    }
  }

  return errors;
};
