import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {handleOnNewPlaylistsFormSubmit} from "@/modals/NewPlaylistModal/handlers";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch, SetStateAction} from "react";
import {User} from "@/types/User";

type NewPlaylistModalFormProps = LayoutProps & {
    modalName: string,
    setSending: Dispatch<SetStateAction<boolean>>,
}

const defaultValues = {
    isPublic : true,
    name: ''
}

const NewPlaylistModalForm = (props: NewPlaylistModalFormProps) => {
    const {children, modalName, setSending} = props;
    const dispatch = useDispatch();
    const methods = useForm({defaultValues});
    const tokenInfo = useSelector((state: any) => state.token.tokens);
    const userProfile: User = useSelector((state: any) => state.userProfile);

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) =>
                    handleOnNewPlaylistsFormSubmit(data, dispatch, modalName, setSending, tokenInfo, userProfile))}
                className={"w-140"}>
                {children}
            </form>
        </FormProvider>
    )
}

export default NewPlaylistModalForm;