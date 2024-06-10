import {handleFileSelect} from "@/common-components/ImageUploader/handlers";
import {Dispatch, MutableRefObject, SetStateAction} from "react";

type ImageUploaderInputProps = {
    inputRef: MutableRefObject<HTMLInputElement | null>,
    fileRef: MutableRefObject<File | null>,
    setPreviewUrl: Dispatch<SetStateAction<null | string>>,
}

const NormalImageUploaderInput = (props: ImageUploaderInputProps) => {
    const {setPreviewUrl, fileRef, inputRef} = props;

    return (
        <input
            onChange={(e) => handleFileSelect(e, setPreviewUrl, fileRef)}
            ref={inputRef}
            type="file"
            accept={"image/*"}
            className={"hidden"}
        />
    )
}

export default NormalImageUploaderInput;