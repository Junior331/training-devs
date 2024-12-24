import Image from "next/image";

import { WindowProps } from "./@types";

export const Window = ({
  image,
  label,
  title,
  children,
  background,
}: WindowProps) => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-zinc-800">
      <Image
        src={
          background
            ? background
            : "https://www.nuvent.com.br/wp-content/uploads/2019/12/EVP_0141-scaled.jpg"
        }
        alt="Imagem de background"
        fill
        className="-z-30 object-cover"
      />
      <div className="bg-black/80">
        <div className="flex gap-7 p-6 items-center">
          <div className="w-28 h-28 relative">
            <Image
              src={
                image
                  ? image
                  : "https://t3.ftcdn.net/jpg/08/12/70/12/360_F_812701281_qDF1YDwHrQgs2BbUCIrgqzkdkNhokjwp.jpg"
              }
              alt="Imagem do evento"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-zinc-300">
              {label ?? "Detalhes do Evento:"}
            </span>
            <span className="text-4xl font-bold">
              {title ?? "Título do Evento"}
            </span>
          </div>
          <div className="flex-1"></div>
          <Image
            src="/images/elements.png"
            alt="Elementos decorativos"
            width={140}
            height={140}
          />
        </div>
        <div className="bg-black/70 border-t-4 border-zinc-800 rounded-b-xl p-7">
          {children}
        </div>
      </div>
    </div>
  );
};
