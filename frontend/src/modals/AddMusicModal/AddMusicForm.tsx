import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {MutableRefObject} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TokenInfo} from "@/types/TokenInfo";
import {handleAddMusicFormSubmit} from "@/modals/AddMusicModal/handlers";

type AddMusicFormProps = LayoutProps & {
    imageFileRef: MutableRefObject<File | null>,
    audioFileRef: MutableRefObject<File | null>,
}

const AddMusicForm = (props: AddMusicFormProps) => {
    const {children} = props;
    const methods = useForm();
    const tokenInfo: TokenInfo = useSelector((state: any) => state.token.tokens);
    const dispatch = useDispatch();

    return (
        <FormProvider {...methods}>
            <form
                className={"flex flex-col"}
                onSubmit={methods.handleSubmit((data) =>
                    handleAddMusicFormSubmit(data, tokenInfo, dispatch))}>
                {children}
            </form>
        </FormProvider>
    )
}

export default AddMusicForm;