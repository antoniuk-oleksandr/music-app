import {ChangeEvent, Dispatch, SetStateAction} from "react";

export const handleFileSelect = (
    e: ChangeEvent<HTMLInputElement>,
    setFile: Dispatch<SetStateAction<File | null>>,
    setPreviewUrl: Dispatch<SetStateAction<string | null>>
) => {
    const file = e.target.files && e.target.files[0];
    setFile(file);

    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
    }
}