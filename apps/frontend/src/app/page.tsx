import { Event } from "@/core/events";
import { Template } from "@/components/index";

export default function Home() {
  const e: Partial<Event> = {};
  console.log("e ::", e);

  return (
    <Template className="w-full">
      <h1>Training devs </h1>
    </Template>
  );
}
