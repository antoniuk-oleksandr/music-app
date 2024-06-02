import {ChangeEvent, Dispatch, FormEvent, FormEventHandler, MutableRefObject, SetStateAction} from "react";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";
import {signRequest} from "@/api/sign-request";
import {SignType} from "@/types/SignType";
import Cookies from 'js-cookie';

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

export const handleSignSubmit = async (
    e: FormEvent<HTMLFormElement>,
    data: SignInInputs | SignUpInputs,
    type: SignType,
) => {
    e.preventDefault();
    if (Object.values(data).find((v) => v === '') !== undefined) return;

    const response = await signRequest(data, type);
    Cookies.set('tokens', response.data);
}