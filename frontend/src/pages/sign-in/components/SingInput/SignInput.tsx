import {Dispatch, SetStateAction, useRef, useState} from "react";
import InputLabel from "@/pages/sign-in/components/SingInput/InputLabel";
import SingInputLayout from "@/pages/sign-in/components/SingInput/SingInputLayout";
import SingInputElement from "@/pages/sign-in/components/SingInput/SingInputElement";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";

type SignInputProps = {
    label: string,
    id: keyof SignInInputs | keyof SignUpInputs,
    signInputsState: {
        inputsData: SignInInputs | SignUpInputs,
        setInputsData: Dispatch<SetStateAction<SignInInputs | SignUpInputs>>,
    },
}

const SignInput = (props: SignInputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <SingInputLayout inputRef={inputRef} setIsFocused={setIsFocused}>
            <InputLabel
                {...props}
                isFocused={isFocused}
            />
            <SingInputElement
                {...props}
                inputRef={inputRef}
                setIsFocused={setIsFocused}
            />
        </SingInputLayout>
    )
}

export default SignInput;