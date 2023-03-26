import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TodoList } from "../../types/todoTypes";
import { Form } from "react-router-dom";
import { FormContent, FormValidationErrorMessage, FormInput, ActionButton } from "../styled/commons.styled";

const todoListValidationSchema = z.object({
    name: z.string().min(3, { message: "This field must contain at least 3 characters" }),
});

type TodoListFormValues = z.infer<typeof todoListValidationSchema>;

interface CreateTodoListFormProps {
    onSubmit: (data: Partial<TodoList>) => void;
}

const CreateTodoListForm = ({ onSubmit }: CreateTodoListFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TodoListFormValues>({ resolver: zodResolver(todoListValidationSchema) });

    return (
        <Form
            onSubmit={handleSubmit((data) => {
                onSubmit(data);
            })}>
            <FormContent>
                <FormValidationErrorMessage>{errors?.name && errors.name.message}</FormValidationErrorMessage>
                <FormInput {...register("name")} type="text" placeholder="Name" hasError={Boolean(errors?.name)} />
            </FormContent>
            <ActionButton type="submit">Create</ActionButton>
        </Form>
    );
};

export default CreateTodoListForm;
