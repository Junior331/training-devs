import guests from "./guests.svg";
import confirmeds from "./confirmeds.svg";
import accompaniments from "./accompaniments.svg";
import fallback from "../images/image_not_found.png";

export const icons = {
  fallback,
  guests,
  confirmeds,
  accompaniments,
};
type IIcons = keyof typeof icons;

export const getImage = (id: IIcons) => {
  return icons[id] ?? icons.fallback;
};