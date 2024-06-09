import {LayoutProps} from "@/types/LayoutProps";
import {handleInputFocus} from "@/pages/sign-in/handlers";
import {Dispatch, MutableRefObject, SetStateAction} from "react";

type SingInputLayout = LayoutProps & {
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    inputRef: MutableRefObject<HTMLInputElement | null>,
    isFocused: boolean,
}

const SingInputLayout = (props: SingInputLayout) => {
    const {children, setIsFocused, inputRef, isFocused} = props;

    return (
        <div
            onClick={() => handleInputFocus(setIsFocused, inputRef)}
            className={`w-full relative rounded-lg py-4 text-lg my-2 px-3 cursor-text
            ${isFocused ? 'ring-2 ring-red-500' : 'ring-1  ring-neutral-700'}`}>
            {children}
        </div>
    )
}

export default SingInputLayout;