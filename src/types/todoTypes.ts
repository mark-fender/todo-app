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
    complete: boolean;
    todoListId: string;
}
