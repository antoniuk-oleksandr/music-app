import ImageUploaderLayout from "./ImageUploaderLayout";
import {MdOutlineAddPhotoAlternate} from "react-icons/md";
import {MutableRefObject, useRef, useState} from "react";
import FormImageUploaderInput from "@/common-components/ImageUploader/components/FormImageUploaderInput";
import ImageUploaderPreview from "./components/ImageUploaderPreview";
import NormalImageUploaderInput from "@/common-components/ImageUploader/components/NormalImageUploaderInput";

type FileUploaderProps = {
    aspect: '1:1' | '3:1' | 'none',
    className?: string,
    fileRef: MutableRefObject<File | null>,
    id?: string,
}

const ImageUploader = (props: FileUploaderProps) => {
    const {id} = props;
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [previewUrl, setPreviewUrl] = useState<null | string>(null);

    return (
        <ImageUploaderLayout {...props} inputRef={inputRef}>
            <MdOutlineAddPhotoAlternate/>
            {id !== undefined
                ? <FormImageUploaderInput
                    inputRef={inputRef}
                    setPreviewUrl={setPreviewUrl}
                    {...props}
                />
                : <NormalImageUploaderInput
                    inputRef={inputRef}
                    setPreviewUrl={setPreviewUrl}
                    {...props}
                />}
            <ImageUploaderPreview previewUrl={previewUrl}/>
        </ImageUploaderLayout>
    )
}

export default ImageUploader;