import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import {ChangeHandler} from "react-hook-form";

export const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setValue: Dispatch<SetStateAction<string>>,
    formOnChange: ChangeHandler,
) => {
    setValue(e.target.value);
    if (formOnChange) formOnChange(e);
};

export const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement>,
    setIsFocused: Dispatch<SetStateAction<boolean>>,
    formOnBlur: ChangeHandler,
) => {
    setIsFocused(false)
    if (formOnBlur) formOnBlur(e);
}