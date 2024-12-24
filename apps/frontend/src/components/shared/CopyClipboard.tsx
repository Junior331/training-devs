import { IconCopy } from "@tabler/icons-react";

import { CopiarClipboardProps } from "./@types";
import { useMessages } from "@/data/hooks/useMensagens";

export const CopyClipboard = ({
  text,
  Icone,
  label,
  observation,
}: CopiarClipboardProps) => {
  const { addSuccess } = useMessages();

  function copyText() {
    navigator.clipboard.writeText(text);
    addSuccess("Texto copiado com sucesso!");
  }

  return (
    <div className="flex flex-col gap-2">
      <span>{label}</span>
      <div
        className="flex items-center gap-3 bg-black 
            border border-zinc-800 px-4 py-2 text-zinc-300 text-lg "
      >
        {Icone && <Icone stroke={1.3} />}
        <span className="flex-1">{text}</span>
        <IconCopy
          stroke={1.3}
          onClick={copyText}
          className="cursor-pointer"
        />
      </div>
      {observation && (
        <span className="text-xs text-yellow-300/80">{observation}</span>
      )}
    </div>
  );
};
