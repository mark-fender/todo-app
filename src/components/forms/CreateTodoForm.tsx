import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Todo } from "../../types/todoTypes";
import { ActionButton, Form, FormContent, FormInput, FormValidationErrorMessage } from "../styled/commons.styled";

const dateSchema = z.preprocess((arg) => {
    if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}, z.date().min(new Date(), { message: "Please provide a future date" }));

const todoListValidationSchema = z.object({
    name: z.string().min(3, { message: "This field must contain at least 3 characters" }),
    text: z.string().min(3, { message: "This field must contain at least 3 characters" }),
    deadline: dateSchema.transform((date) => date.getTime() / 1000),
});

type TodoFormValues = z.infer<typeof todoListValidationSchema>;

interface CreateTodoFormProps {
    onSubmit: (data: Partial<Todo>) => void;
}

const CreateTodoForm = ({ onSubmit }: CreateTodoFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TodoFormValues>({ resolver: zodResolver(todoListValidationSchema) });

    return (
        <Form
            onSubmit={handleSubmit((data) => {
                onSubmit({ ...data });
            })}>
            <FormContent>
                <FormValidationErrorMessage>{errors?.name && errors.name.message}</FormValidationErrorMessage>
                <FormInput {...register("name")} type="text" placeholder="Name" hasError={Boolean(errors?.name)} />
                <FormValidationErrorMessage>{errors?.text && errors.text.message}</FormValidationErrorMessage>
                <FormInput {...register("text")} type="text" placeholder="Text" hasError={Boolean(errors?.text)} />
                <FormValidationErrorMessage>{errors?.deadline && errors.deadline.message}</FormValidationErrorMessage>
                <FormInput {...register("deadline")} type="date" placeholder="Deadline" hasError={Boolean(errors?.deadline)} />
            </FormContent>
            <ActionButton type="submit">Create</ActionButton>
        </Form>
    );
};

export default CreateTodoForm;
