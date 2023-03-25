import styled from "styled-components";
import { borderGray, fontBlack, listBackground } from "../constants/cssColors";
import { IdObject } from "../types/todoTypes";
import { ErrorMessage } from "./styled/commons.styled";

const List = styled.ul`
    background-color: ${listBackground};
    height: 40rem;
    width: 75rem;
    border-radius: 5px;
    border: 1px solid ${borderGray};
    margin: 0;
    padding: 0;
    color: ${fontBlack};
`;

const ListRow = styled.li`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid ${borderGray};
    border-radius: 5px;
`;

type DataListProps<T> = {
    data: T[] | undefined;
    renderItem: (item: T) => React.ReactNode;
};

const DataList = <T extends IdObject>({ data, renderItem }: DataListProps<T>) => {
    return (
        <List>
            {data?.length === 0 && <ErrorMessage>No items yet</ErrorMessage>}
            {data && data.map((item) => <ListRow key={item.id}>{renderItem(item)}</ListRow>)}
        </List>
    );
};

export default DataList;
