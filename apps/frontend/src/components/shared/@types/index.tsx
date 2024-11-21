import { ReactNode } from "react";

export interface StatisticsProps {
  text: string;
  image: string;
  value: number;
}

export interface InfoProps {
  label: string;
  children: ReactNode;
}
