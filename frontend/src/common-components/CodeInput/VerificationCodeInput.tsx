import CodeInputLayout from "./CodeInputLayout";
import {Dispatch, MutableRefObject, SetStateAction, useRef, useState} from "react";
import CodeDigitInput from "@/common-components/CodeDigitInput/CodeDigitInput";

type VerificationCodeInputProps = {
    digits: number[],
    setDigits: Dispatch<SetStateAction<number[]>>,
}

const VerificationCodeInput = (props: VerificationCodeInputProps) => {
    const {digits, setDigits} = props;
    const inputRefs = useRef<null[] | MutableRefObject<HTMLInputElement | null>[]>
    (new Array(6).fill(null));

    return (
        <CodeInputLayout>
            {digits.map((_, index) => (
                <CodeDigitInput
                    inputRefs={inputRefs}
                    setDigits={setDigits}
                    key={index}
                    id={index}
                />
            ))}
        </CodeInputLayout>
    )
}

export default VerificationCodeInput;