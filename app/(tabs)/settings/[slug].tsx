import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function SettingsSlug() {
    const { slug } = useLocalSearchParams();

    if(slug === "about") {
        return (
            <View>
                <Text>About Page</Text>
            </View>
        )
    }

    if(slug === "general-settings") {
        return (
            <View>
                <Text>General Settings Page</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>Page Does not Exist</Text>
        </View>
    )
}