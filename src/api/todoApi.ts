import axios, { AxiosPromise } from "axios";
import { Todo, TodoList } from "../types/todoTypes";

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_API_URL });

// todo lists
export const getAllTodoLists = async (): AxiosPromise<TodoList[]> => {
    const response = await axiosInstance.get("/todoList");
    return response.data;
};

export const createTodoList = async (todoList: TodoList): AxiosPromise<void> => {
    const response = await axiosInstance.post("/todoList", todoList);
    return response;
};

// todos
export const getAllTodosByListId = async (todoListId: string): AxiosPromise<Todo[]> => {
    const response = await axiosInstance.get("/todo", { params: { todoListId } });
    return response.data;
};

export const createTodo = async (todo: Todo): AxiosPromise<void> => {
    const response = await axiosInstance.post("/todo", todo);
    return response;
};

export const updateTodo = async (id: string, todoUpdate: Partial<Todo>): AxiosPromise<void> => {
    const response = await axiosInstance.put(`/todo/${id}`, todoUpdate);
    return response;
};

export const deleteTodo = async (id: string): AxiosPromise<void> => {
    const response = await axiosInstance.delete(`/todo/${id}`);
    return response;
};
