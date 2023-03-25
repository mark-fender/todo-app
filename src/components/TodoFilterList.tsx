import { ChangeEvent, useMemo, useState } from "react";
import styled from "styled-components";
import { Todo, TodoList } from "../types/todoTypes";
import { getTimeFromTimeStamp } from "../utils/dateUtils";
import DataList from "./DataList";
import { ActionButton, CenteredFlexBox, ListCell, SelectInput, TextInput } from "./styled/commons.styled";

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

const FilterArea = styled(CenteredFlexBox)`
    width: 100%;
    align-items: center;
    padding-left: 2rem;
`;

const TodoListSearchInput = styled(TextInput)`
    width: 15rem;
    height: 3rem;
    margin: 1rem;
    font-size: 20px;
    text-indent: 5px;
`;

const TodoListSearchSelect = styled(SelectInput)`
    width: 15rem;
    height: 3rem;
    margin: 1rem;
    font-size: 20px;
    text-indent: 5px;
`;

type TodoFilter = { name: string; completed: CompletedTypes };

type CompletedTypes = "ALL" | "COMPLETED" | "NOT COMPLETED";

type TodoFilterListProps = {
    todoList: TodoList;
};

const TodoFilterList = ({ todoList }: TodoFilterListProps) => {
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

    const renderTodo = (todo: Todo) => {
        return (
            <>
                <ListCell>
                    Completed: <input type="checkbox" checked={todo.complete}></input>
                </ListCell>
                <ListCell>Name: {todo.name}</ListCell>
                <ListCell>Text: {todo.text}</ListCell>
                <ListCell>Deadline: {getTimeFromTimeStamp(todo.deadline)}</ListCell>
                <ListCell>
                    <ActionButton>Delete</ActionButton>
                </ListCell>
            </>
        );
    };

    return (
        <TodoListWrapper>
            <TodoListName>
                <h2>{todoList.name}</h2>
            </TodoListName>
            <FilterArea>
                <ActionButton>Add Todo</ActionButton>
                <TodoListSearchInput type="text" placeholder="Name" onChange={(e) => nameFilterChangeHandler(e)} />
                <TodoListSearchSelect onChange={(e) => completedFilterChangeHandler(e)}>
                    <option>{"ALL"}</option>;<option>{"COMPLETED"}</option>;<option>{"NOT COMPLETED"}</option>;
                </TodoListSearchSelect>
            </FilterArea>
            <DataList data={filteredTodos} renderItem={renderTodo}></DataList>
        </TodoListWrapper>
    );
};

const filterTodos = (filter: TodoFilter, todos: Todo[] | undefined) => {
    return todos
        ?.filter((todo) => (filter.name === "" ? todo : todo.name.includes(filter.name)))
        .filter((todo) => {
            if (filter.completed === "COMPLETED") {
                return todo.complete;
            }
            if (filter.completed === "NOT COMPLETED") {
                return !todo.complete;
            }
            return todo;
        });
};

export default TodoFilterList;
