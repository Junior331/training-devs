import convidados from "./convidados.svg";
import confirmados from "./confirmados.svg";
import acompanhantes from "./acompanhantes.svg";
import fallback from "../images/image_not_found.png";

export const icons = {
  fallback,
  convidados,
  confirmados,
  acompanhantes,
};
type IIcons = keyof typeof icons;

export const getImage = (id: IIcons) => {
  return icons[id] ?? icons.fallback;
};
