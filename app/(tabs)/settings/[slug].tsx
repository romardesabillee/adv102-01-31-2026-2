import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function Settings() {
    const { slug } = useLocalSearchParams();

    return (
        <View>
            {slug === "about" ? "About Page": ""}
            {slug === "general-settings" ? "General Settings Page": ""}
        </View>
    )
}