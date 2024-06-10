import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {handleAudioFileSelect} from "@/common-components/SongFIieUploader/handlers";
import {useFormContext} from "react-hook-form";
import id from "@/pages/album/[id]";

type SongFileInputProps = {
    inputRef: MutableRefObject<HTMLInputElement | null>,
    audioFileRef: MutableRefObject<File | null>,
    setFileName: Dispatch<SetStateAction<string | null>>,
    id: string,
}

const SongFileInput = (props: SongFileInputProps) => {
    const {inputRef, audioFileRef, setFileName, id} = props;

    const {register} = useFormContext();

    const {
        ref: formRef,
        onChange: formOnChange,
        ...rest
    } = register(id, {required: true});

    return (
        <input
            {...register(id as string, {required: true})}
            onChange={(e) => handleAudioFileSelect(e, audioFileRef, setFileName, formOnChange)}
            className={"hidden"}
            type="file"
            accept="audio/*"
            ref={(e) => {
                formRef(e);
                inputRef.current = e;
            }}
        />
    )
}

export default SongFileInput;