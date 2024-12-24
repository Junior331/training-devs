/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, HTMLProps, ReactNode } from "react";

export interface StatisticsProps {
  text: string;
  image: string;
  value: number;
}

export interface InfoProps {
  label: string;
  children: ReactNode;
}

export interface CopiarClipboardProps {
  label: string;
  text: string;
  Icone: ElementType;
  observation?: string;
}
export interface EntryFieldProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
  description?: string;
  observation?: string;
  outterClassName?: string;
  onChange: (event: any) => void;
}

export interface FieldYesNoProps {
  label?: string;
  value: boolean;
  className?: string;
  onChange: (valor: boolean) => void;
}

export interface StepsProps {
  children: any;
  labels: string[];
  action: () => void;
  labelAction: string;
  allowNextStep?: boolean[];
}

export interface WindowProps {
  label?: string;
  title?: string;
  image?: string;
  children: ReactNode;
  background?: string;
}