import {useState} from "react";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";

export const useSignUpInputsData = () => {
    const [inputsData, setInputsData] = useState<SignInInputs | SignUpInputs>({
        password: '',
        username: '',
        email: '',
    });

    return {inputsData, setInputsData}
}