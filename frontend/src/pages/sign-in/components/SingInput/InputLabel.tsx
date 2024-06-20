import {Dispatch, SetStateAction} from "react";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";

type InputLabelProps = {
    isFocused: boolean,
    label: string,
    id: keyof SignInInputs | keyof SignUpInputs,
    signInputsState: {
        inputsData: SignInInputs | SignUpInputs,
        setInputsData: Dispatch<SetStateAction<SignInInputs | SignUpInputs>>,
    },
}

const InputLabel = (props: InputLabelProps) => {
    const {isFocused, label, id, signInputsState} = props;
    // @ts-ignore
    const value = signInputsState.inputsData[id];

    return (
        <label
            className={`absolute bg-white px-1 left-2 duration-150 ease-out cursor-text
                ${isFocused || value.length > 0 ? 'top-[-14px]' : 'top-[calc((100%-28px)/2)]'}
                ${isFocused ? 'text-red-500' : ''}`}
            htmlFor=""
        >{label}</label>
    )
}

export default InputLabel;