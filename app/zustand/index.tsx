import { useTodo } from "@/store/todo.store";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Zustand() {
    const { hello, todos, createTodo, deleteTodo } = useTodo()

    function addTodo() {
        createTodo("Todo 3", "Desc");
    }

    return (
        <View style={{ padding: 10 }}>
            <Text>Zustand Demo</Text>
            <Link style={{ color: 'blue' }} href="/">Back to Home</Link>
            {todos.map((todo: any) => (
                <View style={{ marginVertical: 4 }} key={todo.id}>
                    <Text>Title: {todo.title}</Text>
                    <Text>Description: {todo.description}</Text>
                    <Button onPress={() => deleteTodo(todo.id)} title="Delete" />
                </View>
            ))}
            <Button onPress={addTodo} title="Add Todo" />
        </View>
    )
}