import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {handleFileSelect} from "@/common-components/ImageUploader/handlers";
import {useFormContext} from "react-hook-form";

type FormImageUploaderInputProps = {
    id?: string,
    inputRef: MutableRefObject<HTMLInputElement | null>,
    fileRef: MutableRefObject<File | null>,
    setPreviewUrl: Dispatch<SetStateAction<null | string>>,
}

const FormImageUploaderInput = (props: FormImageUploaderInputProps) => {
    const {id, inputRef, fileRef, setPreviewUrl} = props;
    const {register} = useFormContext();

    const {
        ref: formRef,
        onChange: formOnChange,
        ...rest
    } = register(id as string, {required: true});

    return (
        <input
            {...register(id as string, {required: true})}
            onChange={(e) => handleFileSelect(e, setPreviewUrl, fileRef, formOnChange)}
            ref={(e) => {
                formRef(e);
                inputRef.current = e;
            }}
            type="file"
            accept={"image/*"}
            className={"hidden"}
        />
    )
}

export default FormImageUploaderInput;