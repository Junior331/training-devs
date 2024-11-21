import logo from "./logo.svg";
import elements from "./elements.png";
import background from "./background.png";
import fallback from "./image_not_found.png";
import backgroundInitial from "./background-initial.svg";
import backgroundElementos from "./background-elements.svg";

export const images = {
  logo,
  fallback,
  elements,
  background,
  backgroundInitial,
  backgroundElementos,
};

type IImage = keyof typeof images;

export const getImage = (id: IImage) => {
  return images[id] ?? images.fallback;
};
