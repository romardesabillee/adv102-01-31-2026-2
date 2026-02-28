import { create } from 'zustand';

export const useTodo = create<any>((set) => ({
    hello: "Test",
    todos: [
        { id: 1, title: "Todo 1", description: "Desc"},
        { id: 2, title: "Todo 2", description: "Desc"}
    ],
    createTodo: (title: string, description: string) => {

        return set((state: any) => {
            const todos = [...state.todos];
            const id = todos[todos.length - 1].id + 1;
            todos.push({ id, title, description });

            return {
                ...state,
                todos
            }
        })
    },
    deleteTodo: (id: number) =>
        set((state: any) => ({
            ...state, todos: state.todos.filter((todo: any) => todo.id !== id)
        }))
}))
