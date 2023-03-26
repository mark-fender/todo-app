import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { createTodoList } from "../api/todoApi";
import CreateTodoListForm from "../components/forms/CreateTodoListForm";
import { CenteredFlexBox, CreatePageWrapper, PageHeading } from "../components/styled/commons.styled";
import { LIST_PAGE_ROUTE } from "../constants/routes";
import { TodoList } from "../types/todoTypes";

const TodoListCreatePage = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const createTodoListMutation = useMutation(createTodoList, {
        onSuccess: () => {
            queryClient.invalidateQueries(["todoLists"]);
            navigate(`/${LIST_PAGE_ROUTE}`);
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const handleTodoListSubmit = (todoList: Partial<TodoList>) => {
        createTodoListMutation.mutate({ ...todoList });
    };

    return (
        <CreatePageWrapper>
            <PageHeading>Create new todo list</PageHeading>
            <CenteredFlexBox>
                <CreateTodoListForm onSubmit={(todoList) => handleTodoListSubmit(todoList)} />
            </CenteredFlexBox>
        </CreatePageWrapper>
    );
};

export default TodoListCreatePage;
