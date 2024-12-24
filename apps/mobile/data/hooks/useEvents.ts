import { useContext } from "react";
import { ContextEvents } from "@/data/contexts/ContextEvents";

export const useEvents = () => useContext(ContextEvents);
