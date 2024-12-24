import { ReactNode } from "react";

export interface InfoProps {
  label: string;
  children: ReactNode;
}

export interface TitleSectionProps {
  text: string;
}

export interface StatisticsProps extends TitleSectionProps {
  value: any;
  imagem: any;
}
