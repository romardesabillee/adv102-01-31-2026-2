import { useTheme } from "@/context/ThemeContext";
import { useTodo } from "@/store/todo.store";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
    const { theme, updateTheme } = useTheme();
    const { todos } = useTodo()

    return (
        <View>
            <Text>Home</Text>
            <Text>Theme: {theme}</Text>
            <Button 
                onPress={updateTheme}
                title="Update Theme"
            />
            <Link style={{ color: 'blue' }} href="/settings">
                Go to Settings
            </Link>
            <Link style={{ color: 'blue' }} href="/zustand">
                Go to Zustand Demo
            </Link>
            {todos.map((todo: any) => (
                <View style={{ marginVertical: 4 }} key={todo.id}>
                    <Text>Title: {todo.title}</Text>
                    <Text>Description: {todo.description}</Text>
                </View>
            ))}
        </View>
    )
}