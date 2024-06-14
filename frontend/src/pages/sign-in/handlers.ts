import {ChangeEvent, Dispatch, FormEvent, MutableRefObject, SetStateAction} from "react";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";
import {signRequest} from "@/api/sign-request";
import {SignType} from "@/types/SignType";
import {NextRouter} from "next/router";
import {UnknownAction} from "redux";
import {setIsDialogShown} from "@/redux/reducers/dialog-slice";
import {setTokensToCookies, showDialog} from "@/utils/utils";
import {setTokenStore} from "@/redux/reducers/token-slice";

export const handleInputFocus = (
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

const validateInputs = (data: SignInInputs | SignUpInputs): boolean => {
    return Object.values(data).every(value => value !== '');
}

const handleSignSuccess = async (
    response: any,
    router: NextRouter,
    dispatch: Dispatch<UnknownAction>,
    text: string,
    dialogIds: any[],
) => {
    setTokensToCookies(response.data.jwt, response.data.refresh);
    dispatch(setTokenStore([true, response.data],))

    await router.push("/");

    showDialog(dispatch, text, 'text-green-400', dialogIds);
}

const handleError = (dispatch: Dispatch<UnknownAction>, message: string, dialogIds: any[]) => {
    showDialog(dispatch, message, 'text-red-500', dialogIds)
}

export const handleSignSubmit = async (
    e: FormEvent<HTMLFormElement>,
    data: SignInInputs | SignUpInputs,
    type: SignType,
    router: NextRouter,
    dispatch: Dispatch<UnknownAction>,
    verificationState: boolean,
    dialogIds: any[],
    setVerificationState?: Dispatch<SetStateAction<boolean>>,
    digits?: number[],
) => {
    e.preventDefault();

    if (!validateInputs(data)) return;

    const response = await signRequest(data, type, digits);

    if (response.status === 200) {
        if (response.data === 'Email sent successfully with code') {
            setVerificationState && setVerificationState(true);
        } else if (!verificationState) {
            await handleSignSuccess(response, router, dispatch, 'You have successfully signed in!', dialogIds);
        } else {
            await handleSignSuccess(response, router, dispatch, 'You have successfully created an account!', dialogIds);
        }
    } else if (response.status === 404) {
        handleError(dispatch, 'You have input incorrect credentials!', dialogIds);
    } else if (response.status === 400) {
        handleError(dispatch, 'A user with such username or email already exists!', dialogIds);
    } else console.log(response);
}