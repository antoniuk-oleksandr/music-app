import {LayoutProps} from "@/types/LayoutProps";
import {FieldValues, FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {useRouter as useNavRouter} from "next/navigation";
import {SearchTab} from "@/types/SearchTab";

type SearchbarLayoutProps = LayoutProps & {
    value: string,
}

const SearchbarLayout = (props: SearchbarLayoutProps) => {
    const {children, value} = props;

    const methods = useForm({
        defaultValues: {
            search: value
        }
    });
    const {handleSubmit} = methods;

    const navRouter = useNavRouter();
    const onSubmit: SubmitHandler<FieldValues> = (data) =>
        navRouter.push(`/search?q=${data.search}&tab=${SearchTab.Default}`)

    return (
        <FormProvider {...methods}>
            <form
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                className="h-12 flex items-center bg-white px-4 gap-x-3 rounded-md w-96.5 z-50">
                {children}
            </form>
        </FormProvider>
    )
}

export default SearchbarLayout;