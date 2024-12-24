import { useContext } from "react";
import { ContextMessages } from "../contexts/ContextMessage";

export const useMessages = () => useContext(ContextMessages);
