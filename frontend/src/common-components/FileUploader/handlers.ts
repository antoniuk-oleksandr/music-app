import {ChangeEvent, Dispatch, MutableRefObject, SetStateAction} from "react";

export const handleFileSelect = (
    e: ChangeEvent<HTMLInputElement>,
    setPreviewUrl: Dispatch<SetStateAction<string | null>>,
    fileRef: MutableRefObject<File | null>,
) => {
    const file = e.target.files && e.target.files[0];
    fileRef.current = file;

    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
    }
}