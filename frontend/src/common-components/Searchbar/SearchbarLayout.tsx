import {LayoutProps} from "@/types/LayoutProps";
import {FieldValues, FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

const SearchbarLayout = (props: LayoutProps) => {
    const {children} = props;

    const methods = useForm();
    const {handleSubmit} = methods;

    const router = useRouter();
    const onSubmit: SubmitHandler<FieldValues> = (data) =>
        router.push(`/search?q=${data.search}&tab=default`)

    return (
        <FormProvider {...methods}>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                className="h-12 flex items-center bg-white px-4 gap-x-3 rounded-md w-96.5">
                {children}
            </form>
        </FormProvider>
    )
}

export default SearchbarLayout;