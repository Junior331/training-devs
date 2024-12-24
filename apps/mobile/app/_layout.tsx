import { ProviderEvents } from "@/data/contexts/ContextEvents";
import { colors } from "@/style/colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ProviderEvents>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(stack)/qrcode"
          options={{
            headerShown: true,
            title: "Leitor de QR Code",
            headerBackTitle: "Voltar",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.zinc[900],
            },
          }}
        />
        <Stack.Screen
          name="(stack)/events/[id]"
          options={{
            title: "Detalhes do Evento",
            headerBackTitle: "Voltar",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.zinc[900],
            },
          }}
        />
      </Stack>
    </ProviderEvents>
  );
}
