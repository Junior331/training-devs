"use client";

import { useContext } from "react";
import { useRouter } from "expo-router";
import { CameraView } from "expo-camera";

import { flex1 } from "@/style";
import { ContextEvents } from "@/data/contexts/ContextEvents";

export default function ScreenQrCode() {
  const { addEventByQrCode } = useContext(ContextEvents);

  const router = useRouter();
  return (
    <CameraView
      facing="back"
      style={flex1}
      onBarcodeScanned={({ data }) => {
        addEventByQrCode(data);
        router.back();
      }}
    />
  );
}
