import {LayoutProps} from "@/types/LayoutProps";
import {FieldValues, FormProvider, SubmitHandler, useForm} from "react-hook-form";

const AddMusicForm = (props: LayoutProps) => {
    const {children} = props;
    const methods = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (data) =>
        console.log(data);

    return (
        <FormProvider {...methods}>
            <form
                className={"flex flex-col"}
                onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}

export default AddMusicForm;