import { Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { FlexBox } from "./components/styled/commons.styled";
import { appBackground, fontWhite } from "./constants/cssColors";
import { CREATE_TODO_LIST_ROUTE, CREATE_TODO_ROUTE, LIST_PAGE_ROUTE } from "./constants/routes";
import TodoCreatePage from "./pages/TodoCreatePage";
import TodoListCreatePage from "./pages/TodoListCreatePage";
import TodoListsPage from "./pages/TodoListsPage";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
    }
`;

const AppLayout = styled(FlexBox)`
    position: fixed;
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color: ${appBackground};
    color: ${fontWhite};
    overflow-y: auto;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <AppLayout>
                <Routes>
                    <Route path={"*"} element={<TodoListsPage />}></Route>
                    <Route path={LIST_PAGE_ROUTE} element={<TodoListsPage />}></Route>
                    <Route path={CREATE_TODO_LIST_ROUTE} element={<TodoListCreatePage />}></Route>
                    <Route path={CREATE_TODO_ROUTE} element={<TodoCreatePage />}></Route>
                </Routes>
            </AppLayout>
        </>
    );
}

export default App;
