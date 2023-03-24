import { Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { FlexBox } from "./components/styled/commons.styled";
import { background } from "./constants/cssColors";
import { CREATE_TODO_LIST_ROUTE, LIST_PAGE_ROUTE } from "./constants/routes";
import TodoCreatePage from "./pages/TodoCreatePage";
import TodoListPage from "./pages/TodoListPage";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
    }
`;

const AppLayout = styled(FlexBox)`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${background};
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <AppLayout>
                <Routes>
                    <Route path={LIST_PAGE_ROUTE} element={<TodoListPage />}></Route>
                    <Route path={CREATE_TODO_LIST_ROUTE} element={<TodoCreatePage />}></Route>
                </Routes>
            </AppLayout>
        </>
    );
}

export default App;
