import { useMutation, useQueryClient } from "react-query";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { createTodo } from "../api/todoApi";
import CreateTodoForm from "../components/forms/CreateTodoForm";
import { CenteredFlexBox, CreatePageWrapper, PageHeading } from "../components/styled/commons.styled";
import { LIST_PAGE_ROUTE } from "../constants/routes";
import { Todo } from "../types/todoTypes";

const TodoCreatePage = () => {
    const { state } = useLocation();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const createTodoMutation = useMutation(createTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries(["todoLists"]);
            navigate(`/${LIST_PAGE_ROUTE}`);
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const handleTodoSubmit = (todo: Partial<Todo>) => {
        createTodoMutation.mutate({ ...todo, completed: false, todoListId: state.listId });
    };

    if (!state.listId) return <Navigate replace to={LIST_PAGE_ROUTE}></Navigate>;

    return (
        <CreatePageWrapper>
            <PageHeading>Create new todo</PageHeading>
            <CenteredFlexBox>
                <CreateTodoForm onSubmit={(todo) => handleTodoSubmit(todo)} />
            </CenteredFlexBox>
        </CreatePageWrapper>
    );
};

export default TodoCreatePage;
