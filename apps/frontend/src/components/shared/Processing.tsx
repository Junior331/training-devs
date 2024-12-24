import Image from "next/image";

export const Processing = () => {
  return (
    <div className="flex-1 flex justify-center items-center h-96">
      <Image src="/processando.gif" width={60} height={60} alt="Processando" />
    </div>
  );
}
