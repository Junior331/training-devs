import QRCode from "react-qr-code";
import { AccessByQrCodeProps } from "./@types";

export default function AccessByQrCode({ event }: AccessByQrCodeProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-zinc-800 px-10 rounded-lg">
      <span className="text-sm font-light text-zinc-400">
        Access by Mobile
      </span>
      <QRCode
        value={JSON.stringify({
          id: event.id,
          senha: event.password,
        })}
        className="w-32 h-32"
      />
    </div>
  );
}
