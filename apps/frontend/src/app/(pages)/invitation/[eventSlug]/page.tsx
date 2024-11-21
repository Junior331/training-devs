"use client";

import { useParams } from "next/navigation";

export default function EventSlug() {
  const { eventSlug } = useParams();

  return (
    <div>
      <span>{eventSlug}</span>
    </div>
  );
}
