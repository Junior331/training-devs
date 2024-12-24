/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useToast } from "@/data/hooks/useToast";
import { createContext, useCallback } from "react";

export interface ContextMessageProps {
  addError: (text: string) => void;
  addSuccess: (text: string) => void;
}

export const ContextMessages = createContext<ContextMessageProps>({} as any);

export const ProviderContextMessages = (props: any) => {
  const { toast } = useToast();

  const addMessage = useCallback(
    (type: "success" | "error", text: string) => {
      toast({
        title:
          type == "success" ? "Tudo certo por aqui!" : "Ops, algo deu errado!",
        description: text
          .split(/\n/)
          .map((linha) => <p key={linha}>{linha}</p>),
        variant: type == "success" ? "default" : "destructive",
      });
    },
    [toast]
  );

  return (
    <ContextMessages.Provider
      value={{
        addSuccess(text) {
          addMessage("success", text);
        },
        addError(text) {
          addMessage("error", text);
        },
      }}
    >
      {props.children}
    </ContextMessages.Provider>
  );
};
