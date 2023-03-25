import { Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { FlexBox } from "./components/styled/commons.styled";
import { appBackground, fontWhite } from "./constants/cssColors";
import { CREATE_TODO_LIST_ROUTE, LIST_PAGE_ROUTE } from "./constants/routes";
import TodoListCreatePage from "./pages/TodoCreatePage";
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
                    <Route path={LIST_PAGE_ROUTE} element={<TodoListsPage />}></Route>
                    <Route path={CREATE_TODO_LIST_ROUTE} element={<TodoListCreatePage />}></Route>
                </Routes>
            </AppLayout>
        </>
    );
}

export default App;
