import { ChangeEvent } from "react";
import styled from "styled-components";
import { CenteredFlexBox, SelectInput, TextInput } from "./styled/commons.styled";

const FilterArea = styled(CenteredFlexBox)`
    width: 100%;
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

interface TodosFilterProps {
    nameFilterChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    completedFilterChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const TodosFilter = ({ nameFilterChangeHandler, completedFilterChangeHandler }: TodosFilterProps) => {
    return (
        <FilterArea>
            <TodoListSearchInput type="text" placeholder="Name" onChange={(e) => nameFilterChangeHandler(e)} />
            <TodoListSearchSelect onChange={(e) => completedFilterChangeHandler(e)}>
                <option>{"ALL"}</option>;<option>{"COMPLETED"}</option>;<option>{"NOT COMPLETED"}</option>;
            </TodoListSearchSelect>
        </FilterArea>
    );
};

export default TodosFilter;
