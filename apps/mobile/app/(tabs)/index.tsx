import { ImageBackground } from "react-native";

import { Logo } from "@/components/template/Logo";
import { bgBlack, centerGrow } from "@/style";

export default function ScreenStart() {
  return (
    <ImageBackground
      source={require("@/assets/images/background.png")}
      resizeMode="cover"
      style={[centerGrow, bgBlack]}
    >
      <Logo />
    </ImageBackground>
  );
}
