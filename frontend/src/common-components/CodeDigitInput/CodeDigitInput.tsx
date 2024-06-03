import CodeDigitInputLayout from "./CodeDigitInputLayout";
import {Dispatch, MutableRefObject, SetStateAction, useRef, useState} from "react";
import {handleCodeInput, handleRefObject} from "@/common-components/CodeDigitInput/handlers";

type CodeDigitInputProps = {
    id: number,
    setDigits: Dispatch<SetStateAction<number[]>>,
    inputRefs: MutableRefObject<null[] | MutableRefObject<HTMLDivElement | null>[]>,
}

const CodeDigitInput = (props: CodeDigitInputProps) => {
    const {id, setDigits, inputRefs} = props;
    const currentInputRef = useRef<HTMLDivElement | null>(null);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <CodeDigitInputLayout inputRef={currentInputRef} isFocused={isFocused}>
            <div
                onInput={(e) => handleCodeInput(e, setDigits, currentInputRef, inputRefs)}
                ref={(ref) => handleRefObject(ref, currentInputRef, inputRefs, id)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={"outline-none w-[1ch]"}
                id={id.toString()}
                contentEditable={"true"}
            />
        </CodeDigitInputLayout>
    )
}

export default CodeDigitInput;