import {ChangeEvent, Dispatch, FormEvent, FormEventHandler, MutableRefObject, SetStateAction} from "react";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";
import {singRequest} from "@/api/sing-request";
import {SignType} from "@/types/SignType";

export const handleSignInputFocus = (
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    inputRef: MutableRefObject<HTMLInputElement | null>
) => {
    if (!inputRef.current) return;
    setIsFocused((prev) => !prev);
    inputRef.current.focus();
}

export const handleSignInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setInputsData: Dispatch<SetStateAction<SignInInputs | SignUpInputs>>,
    id: keyof SignInInputs | keyof SignUpInputs,
) => {
    const value = e.currentTarget.value;
    setInputsData((prev) => ({
        ...prev,
        [id]: value,
    }))
}

export const handleSignSubmit = (
    e: FormEvent<HTMLFormElement>,
    data: SignInInputs | SignUpInputs,
    type: SignType,
) => {
    e.preventDefault();
    if (Object.values(data).find((v) => v === '') !== undefined) return;

    singRequest({
        password: data.password,
        username: (data as SignInInputs).usernameEmail,
    }, type);

}

export const handleSignUpSubmit = (data: SignUpInputs) => {

}