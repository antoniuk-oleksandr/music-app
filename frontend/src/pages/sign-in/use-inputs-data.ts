import {useState} from "react";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";

export const useSignInInputsData = () => {
    const [inputsData, setInputsData] = useState<SignInInputs | SignUpInputs>({
        password: '',
        usernameEmail: '',
    });

    return {inputsData, setInputsData}
}