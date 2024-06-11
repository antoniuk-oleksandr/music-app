import {ChangeEvent, Dispatch, MutableRefObject, SetStateAction} from "react";
import {ChangeHandler} from "react-hook-form";

export const handleAudioFileSelect = (
    e: ChangeEvent<HTMLInputElement>,
    fileRef: MutableRefObject<File | null>,
    setFileName: Dispatch<SetStateAction<string | null>>,
    formOnChange: ChangeHandler,
) => {
    const file = e.target.files && e.target.files[0];
    if (formOnChange) formOnChange(e);
    fileRef.current = file;
    setFileName(file && file.name);


    // if (file) {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         // setPreviewUrl(reader.result as string);
    //     };
    //     reader.readAsDataURL(file);
    // }
}