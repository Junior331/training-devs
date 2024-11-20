import logo from "./logo.svg";
import elementos from "./elementos.png";
import background from "./background.png";
import fallback from "./image_not_found.png";
import backgroundElementos from "./background-elementos.svg";

export const images = {
  logo,
  fallback,
  elementos,
  background,
  backgroundElementos,
};

type IImage = keyof typeof images;

export const getImage = (id: IImage) => {
  return images[id] ?? images.fallback;
};
