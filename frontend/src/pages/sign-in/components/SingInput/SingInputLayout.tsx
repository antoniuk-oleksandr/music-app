import {LayoutProps} from "@/types/LayoutProps";
import {handleSignInputFocus} from "@/pages/sign-in/handlers";
import {Dispatch, MutableRefObject, SetStateAction} from "react";

type SingInputLayout = LayoutProps & {
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    inputRef: MutableRefObject<HTMLInputElement | null>,
}

const SingInputLayout = (props: SingInputLayout) => {
    const {children, setIsFocused, inputRef} = props;

    return (
        <div
            onClick={() => handleSignInputFocus(setIsFocused, inputRef)}
            className="w-full relative ring-1 ring-neutral-700 rounded-lg py-4 text-lg my-2 px-3 cursor-text">
            {children}
        </div>
    )
}

export default SingInputLayout;