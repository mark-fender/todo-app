import { useQuery } from "react-query";
import styled from "styled-components";
import { getAllTodoLists } from "../api/todoApi";
import LoadingSpinner from "../components/LoadingSpinner";
import TodoList from "../components/TodoFilterList";
import { ActionButton, ColumnFlexBox, ErrorMessage, PageHeading } from "../components/styled/commons.styled";

const TodoListsPageWrapper = styled(ColumnFlexBox)`
    height: 100%;
    width: 80%;
    margin: 5rem 0;
    align-items: center;
`;

const TodoListsPage = () => {
    const { isLoading, isError, data: todoLists } = useQuery({ queryKey: ["todoLists"], queryFn: getAllTodoLists });

    return (
        <TodoListsPageWrapper>
            <PageHeading>My Todos</PageHeading>
            <ActionButton>Add Todo List</ActionButton>
            {isLoading && <LoadingSpinner />}
            {isError && <ErrorMessage>Loading todo lists failed</ErrorMessage>}
            {!isLoading && todoLists?.length === 0 && <ErrorMessage>No items yet</ErrorMessage>}
            {todoLists && todoLists.length > 0 && todoLists.map((todoList) => <TodoList key={todoList.id} todoList={todoList} />)}
        </TodoListsPageWrapper>
    );
};

export default TodoListsPage;
