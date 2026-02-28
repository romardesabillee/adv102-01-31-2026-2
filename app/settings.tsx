import { useTheme } from "@/context/ThemeContext";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Settings() {
    const { theme } = useTheme();

    return (
        <View>
            <Text>Settings</Text>
            <Text>Theme: {theme}</Text>
            <Link style={{ color: 'blue' }} href="/">
                Go to Home 
            </Link>
        </View>
    )
}