export interface TodoList {
    id: string;
    name: string;
    todos: Todo[];
}

export interface Todo {
    id: string;
    name: string;
    text: string;
    deadline: number;
    completed: boolean;
    todoListId: string;
}

export interface IDObject {
    id: string | number;
}

export interface TodoFilter {
    name: string;
    completed: CompletedTypes;
}

export interface FormInputProps {
    hasError: boolean;
}

export type CompletedTypes = "ALL" | "COMPLETED" | "NOT COMPLETED";

