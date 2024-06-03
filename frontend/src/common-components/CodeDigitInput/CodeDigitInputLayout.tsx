import {LayoutProps} from "@/types/LayoutProps";
import {MutableRefObject, useRef} from "react";

type CodeDigitInputLayoutProps = LayoutProps & {
    isFocused: boolean,
    inputRef: MutableRefObject<HTMLDivElement | null>,
}

const CodeDigitInputLayout = (props: CodeDigitInputLayoutProps) => {
    const {children, isFocused, inputRef} = props;

    return (
        <div
            onClick={() => inputRef.current && inputRef.current.focus()}
            className={`rounded-md cursor-text text-2xl font-semibold grid place-items-center w-full h-24 
            ${isFocused ? 'ring-red-500 ring-2' : 'ring-neutral-400 ring-1'}`}>
            {children}
        </div>
    )
}

export default CodeDigitInputLayout;