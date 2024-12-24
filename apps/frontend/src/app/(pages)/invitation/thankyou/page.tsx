import Image from "next/image";

export default function Thankyou() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image
        width={300}
        height={300}
        src="/mascote.png"
        alt="Mascote do Convit3.digital"
      />
      <span className="text-3xl font-black">Muito Obrigado!</span>
      <span className="text-zinc-400 -mt-5">
        Sua confirmação é muito importante para nós!
      </span>
    </div>
  );
}
