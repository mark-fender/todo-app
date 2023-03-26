import { ChangeEvent, useMemo, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, updateTodo } from "../api/todoApi";
import { CREATE_TODO_ROUTE } from "../constants/routes";
import { CompletedTypes, Todo, TodoFilter, TodoList } from "../types/todoTypes";
import { getTimeFromTimeStamp } from "../utils/dateUtils";
import DataList from "./DataList";
import TodosFilter from "./TodosFilter";
import { ActionButton, CenteredFlexBox, ListCell } from "./styled/commons.styled";

const TodoListWrapper = styled(CenteredFlexBox)`
    font-size: 20px;
    height: 50rem;
    width: 100%;
    margin: 2.5rem 0;
    flex-direction: column;
`;

const TodoListName = styled(CenteredFlexBox)`
    width: 25rem;
`;

const filterTodos = (filter: TodoFilter, todos: Todo[] | undefined) => {
    return todos
        ?.filter((todo) => (filter.name === "" ? todo : todo.name.includes(filter.name)))
        .filter((todo) => {
            if (filter.completed === "COMPLETED") return todo.completed;
            if (filter.completed === "NOT COMPLETED") return !todo.completed;
            return todo;
        });
};

interface TodoFilterListProps {
    todoList: TodoList;
}

const TodoFilterList = ({ todoList }: TodoFilterListProps) => {
    const queryClient = useQueryClient();
    
    const navigate = useNavigate();

    const [filter, setFilter] = useState<TodoFilter>({ name: "", completed: "ALL" });

    const filteredTodos = useMemo(() => filterTodos(filter, todoList.todos), [todoList.todos, filter]);

    const nameFilterChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter({
            ...filter,
            name: event.target.value,
        });
    };

    const completedFilterChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setFilter({
            ...filter,
            completed: event.target.value as CompletedTypes,
        });
    };

    const deleteTodoMutation = useMutation(deleteTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries(["todoLists"]);
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const handleTodoDelete = (event: React.MouseEvent<HTMLButtonElement>, todo: Todo) => {
        event.preventDefault();
        deleteTodoMutation.mutate(todo);
    };

    const updateTodoMutation = useMutation(updateTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries(["todoLists"]);
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const handleTodoCompletedUpdate = (event: ChangeEvent<HTMLInputElement>, todo: Todo) => {
        event.preventDefault();
        updateTodoMutation.mutate({ ...todo, completed: !todo.completed });
    };

    const handleAddTodoClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate(`/${CREATE_TODO_ROUTE}`, { state: { listId: todoList.id } });
    };

    const renderTodo = (todo: Todo) => {
        return (
            <>
                <ListCell>
                    Completed: <input type="checkbox" checked={todo.completed} onChange={(event) => handleTodoCompletedUpdate(event, todo)}></input>
                </ListCell>
                <ListCell>Name: {todo.name}</ListCell>
                <ListCell>Text: {todo.text}</ListCell>
                <ListCell>Deadline: {getTimeFromTimeStamp(todo.deadline)}</ListCell>
                <ListCell>
                    <ActionButton onClick={(event) => handleTodoDelete(event, todo)}>Delete</ActionButton>
                </ListCell>
            </>
        );
    };

    return (
        <TodoListWrapper>
            <TodoListName>
                <h2>{todoList.name}</h2>
            </TodoListName>
            <ActionButton onClick={(event) => handleAddTodoClick(event)}>Add Todo</ActionButton>
            <TodosFilter nameFilterChangeHandler={nameFilterChangeHandler} completedFilterChangeHandler={completedFilterChangeHandler} />
            <DataList data={filteredTodos} renderItem={renderTodo}></DataList>
        </TodoListWrapper>
    );
};

export default TodoFilterList;
