import { v4 as uuidv4, validate } from "uuid";

export const generateId = (): string => uuidv4();

export const validateId = (id: string): boolean => validate(id);


console.log("new random id ::", generateId());