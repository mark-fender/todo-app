import axios from "axios";
import { Todo, TodoList } from "../types/todoTypes";

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_API_URL });

// todo lists
export const getAllTodoLists = async (): Promise<TodoList[]> => {
    const response = await axiosInstance.get("/todoList");
    return response.data;
};

export const createTodoList = async (todoList: TodoList): Promise<void> => {
    return await axiosInstance.post("/todoList", todoList);
};

// todos
export const createTodo = async (todo: Todo): Promise<void> => {
    return await axiosInstance.post("/todo", todo);
};

export const updateTodo = async (id: string, todoUpdate: Partial<Todo>): Promise<void> => {
    return await axiosInstance.put(`/todo/${id}`, todoUpdate);
};

export const deleteTodo = async (id: string): Promise<void> => {
    return await axiosInstance.delete(`/todo/${id}`);
};
