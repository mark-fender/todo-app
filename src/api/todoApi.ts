import axios from "axios";
import { Todo, TodoList } from "../types/todoTypes";

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_API_URL });

// todo lists
export const getAllTodoLists = async (): Promise<TodoList[]> => {
    const response = await axiosInstance.get("/todoList");
    return response.data;
};

export const createTodoList = async (todoList: Partial<TodoList>): Promise<void> => {
    return await axiosInstance.post("/todoList", todoList);
};

// todos
export const createTodo = async (todo: Partial<Todo>): Promise<void> => {
    return await axiosInstance.post(`/todoList/${todo.todoListId}/todo`, todo);
};

export const updateTodo = async (todo: Todo): Promise<void> => {
    return await axiosInstance.put(`/todoList/${todo.todoListId}/todo/${todo.id}`, todo);
};

export const deleteTodo = async (todo: Todo): Promise<void> => {
    return await axiosInstance.delete(`/todoList/${todo.todoListId}/todo/${todo.id}`);
};
