import { Link } from "expo-router";
import { useCameraPermissions } from "expo-camera";
import { Image, Pressable, Text, View } from "react-native";

import {
  py1,
  gapY4,
  button,
  textWhite,
  roundedFull,
  itemsCenter,
} from "@/style";

export const NewEvent = () => {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission || !permission.granted) {
    return (
      <View>
        <Text>Permissão de câmera negada!</Text>
        <Pressable onPress={requestPermission} style={button}>
          <Text style={textWhite}>Solicitar Permissão</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[itemsCenter, gapY4]}>
      <Link href="/qrcode" asChild>
        <Pressable>
          <Image
            source={require("@/assets/images/qrcode.png")}
            style={{ width: 80, height: 80 }}
          />
        </Pressable>
      </Link>
      <View style={[button, py1, roundedFull]}>
        <Text style={textWhite}>Novo Evento</Text>
      </View>
    </View>
  );
}
