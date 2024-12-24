import { EntryField } from "../shared";
import { FormPasswordEventProps } from "./@types";

export const FormPasswordEvent = ({
  password,
  accessEvent,
  setPassword,
}: FormPasswordEventProps) => {
  return (
    <div
      className="flex flex-col items-center gap-4 bg-zinc-900 p-8
      rounded-lg shadow-lg w-[500px] border border-zinc-800"
    >
      <h1 className="text-3xl font-black">Bem-vindo(a)</h1>
      <h2 className="text-lg font-semibold -mt-3">Administrador</h2>
      <p className="text-sm text-zinc-400">
        Insira sua senha para gerenciar o evento
      </p>
      <EntryField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Digite sua senha"
        type="password"
        outterClassName="w-full"
      />
      <button className="botao azul" onClick={accessEvent}>
        Acessar Evento
      </button>
    </div>
  );
};
