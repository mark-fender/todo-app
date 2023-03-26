import styled from "styled-components";
import { borderGray, errorRed } from "../../constants/cssColors";
import { FormInputProps } from "../../types/todoTypes";
import { backgroundGreen, fontWhite } from "./../../constants/cssColors";

//commonly used components with styling ready to be extended

export const FlexBox = styled.div`
    display: flex;
`;

export const ColumnFlexBox = styled(FlexBox)`
    flex-direction: column;
`;

export const CenteredFlexBox = styled(FlexBox)`
    justify-content: center;
    align-items: center;
`;

export const ErrorMessage = styled(CenteredFlexBox)`
    width: 100%;
    height: 10rem;
    margin: 5rem 0;
`;

export const PageHeading = styled.h1`
    font-size: 40px;
    font-weight: 500;
`;

export const CreatePageWrapper = styled(CenteredFlexBox)`
    height: 100%;
    width: 80%;
    margin: 5rem 0;
    flex-direction: column;
`;

export const TextInput = styled.input`
    border-radius: 5px;
    border: 1px solid ${borderGray};
    margin-bottom: 1rem;
    font-size: 25px;
    text-indent: 15px;
`;

export const SelectInput = styled.select`
    border-radius: 5px;
    border: 1px solid ${borderGray};
    margin-bottom: 1rem;
    font-size: 25px;
    text-indent: 15px;
`;

export const ActionButton = styled.button`
    width: 7.5rem;
    height: 3rem;
    font-size: 20px;
    border: none;
    margin: 1rem;
    border-radius: 5px;
    background-color: ${backgroundGreen};
    color: ${fontWhite};
`;

export const ListCell = styled(CenteredFlexBox)`
    height: 100%;
    width: 10rem;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

export const FormContent = styled(ColumnFlexBox)`
    width: 20rem;
`;

export const FormValidationErrorMessage = styled.span`
    height: 1.5rem;
    color: ${errorRed};
`;

export const FormInput = styled(TextInput)<FormInputProps>`
    width: 13.5rem;
    height: 3rem;
    margin: 0.85rem;
    font-size: 20px;
    text-indent: 5px;
    border-color: ${({ hasError }) => hasError && errorRed};

    ::placeholder {
        color: ${({ hasError }) => hasError && errorRed};
    }
`;
