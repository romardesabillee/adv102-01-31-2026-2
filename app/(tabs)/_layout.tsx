import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
        <Tabs.Screen 
            name="index"
            options={{
                title: "Home",
                tabBarIcon: ({ color, size }) =>
                    <MaterialIcons color={color} size={size} name="home" />
            }}/>
        <Tabs.Screen 
            name="settings"
            options={{
                title: "Settings",
                tabBarIcon: ({ color, size }) =>
                    <MaterialIcons color={color} size={size} name="settings" />
            }}/>
    </Tabs>
  );
}
