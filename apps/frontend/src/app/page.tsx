import { EventI } from "@/core/events";
import { Logo } from "@/components/index";
import Link from "next/link";

export default function Home() {
  const e: Partial<EventI> = {};
  console.log("e ::", e);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[url('/images/background-initial.svg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center gap-4">
        <Logo isLarge />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Create and manage your event invitation quickly and easily, without
          complications!
        </p>
      </div>
      <Link href="/event" className="mt-5 button blue text-sm uppercase">
        Create your Event
      </Link>
    </div>
  );
}
