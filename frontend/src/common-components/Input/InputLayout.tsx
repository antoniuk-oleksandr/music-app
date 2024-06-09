import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {handleInputFocus} from "@/pages/sign-in/handlers";

type InputLayoutProps = LayoutProps & {
    isFocused: boolean,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    inputRef: MutableRefObject<HTMLInputElement | null>,
    className?: string,
    color?: string,
    border?: string,
}

const InputLayout = (props: InputLayoutProps) => {
    const {children, setIsFocused, inputRef, isFocused, className, color, border} = props;

    return (
        <div
            onClick={() => handleInputFocus(setIsFocused, inputRef)}
            className={`w-full relative rounded-lg py-4 text-lg my-2 px-3 cursor-text ${color}
            ${isFocused ? 'ring-2 ring-red-500' : `ring-1  ${border}`} ${className}`}>
            {children}
        </div>
    )
}

export default InputLayout;