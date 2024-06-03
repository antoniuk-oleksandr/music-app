import {ChangeEvent, Dispatch, FormEvent, FormEventHandler, MutableRefObject, SetStateAction} from "react";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";
import {signRequest} from "@/api/sign-request";
import {SignType} from "@/types/SignType";
import Cookies from 'js-cookie';
import {NextRouter} from "next/router";
import {UnknownAction} from "redux";
import {setDialog, setIsDialogShown} from "@/redux/reducers/dialog-slice";

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

const validateInputs = (data: SignInInputs | SignUpInputs): boolean => {
    return Object.values(data).every(value => value !== '');
}

const handleSuccess = async (
    response: any,
    router: NextRouter,
    dispatch: Dispatch<UnknownAction>
) => {
    Cookies.set('jwt', response.data.jwt.token);
    Cookies.set('jwtExpiration', response.data.jwt.expiration);
    Cookies.set('refreshToken', response.data.refresh);

    await router.push("/");

    dispatch(setDialog([
        true,
        'You have successfully signed in!',
        'text-green-400',
    ]));

    setTimeout(() => {
        dispatch(setIsDialogShown(false));
    }, 2000);
}

const handleError = (dispatch: Dispatch<UnknownAction>, message: string) => {
    dispatch(setDialog([
        true,
        message,
        'text-red-500',
    ]));

    setTimeout(() => {
        dispatch(setIsDialogShown(false));
    }, 2000);
}

export const handleSignSubmit = async (
    e: FormEvent<HTMLFormElement>,
    data: SignInInputs | SignUpInputs,
    type: SignType,
    router: NextRouter,
    dispatch: Dispatch<UnknownAction>
) => {
    e.preventDefault();

    if (!validateInputs(data)) return;

    const response = await signRequest(data, type);

    if (response.status === 200) {
        await handleSuccess(response, router, dispatch);
    } else if (response.status === 404) {
        handleError(dispatch, 'You have input incorrect credentials!');
    }
}