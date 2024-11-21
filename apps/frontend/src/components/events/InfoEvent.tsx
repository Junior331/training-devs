import { Info } from "../shared";
import { InfoEventProps } from "./@types";

export default function InfoEvent({ event, className }: InfoEventProps) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
        <span className="text-2xl font-black">{event.eventSlug}: </span>
        <span className="text-xl text-zinc-300">{event.name}</span>
      </div>
      
      <div className="flex gap-2">
        <Info label="Date:">
          <span>
            {new Date(event.data!).toLocaleDateString()}
            {" at "}
            {new Date(event.data!).toLocaleTimeString()}
          </span>
        </Info>
        <Info label="Location:">{event.location}</Info>
      </div>
      <Info label="Description:">{event.description}</Info>
    </div>
  );
}
