import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "@/style/colors";
import { ProviderEvents } from "@/data/contexts/ContextEvents";

export default function TabsLayout() {
  const options = ({ label, icone }: { label: string; icone: string }): any => {
    return {
      headerShown: false,
      tabBarLabel: label,
      tabBarActiveTintColor: colors.blue[500],
      tabBarInactiveTintColor: colors.zinc[400],
      tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
      tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: colors.zinc[950],
      },
      tabBarIcon: ({ focused }: any) => (
        <AntDesign
          size={24}
          name={icone as any}
          color={focused ? colors.blue[500] : colors.zinc[400]}
        />
      ),
    };
  };

  return (
    <ProviderEvents>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={options({ label: "Home", icone: "home" })}
        />
        <Tabs.Screen
          name="events"
          options={options({ label: "Events", icone: "calendar" })}
        />
      </Tabs>
    </ProviderEvents>
  );
}
