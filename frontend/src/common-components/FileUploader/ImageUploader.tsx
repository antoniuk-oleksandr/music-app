import ImageUploaderLayout from "./ImageUploaderLayout";
import {MdOutlineAddPhotoAlternate} from "react-icons/md";
import {useRef, useState} from "react";
import {handleFileSelect} from "@/common-components/FileUploader/handlers";


type FileUploaderProps = {
    aspect: '1:1' | '3:1' | 'none',
    className?: string,
}

const ImageUploader = (props: FileUploaderProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<null | string>(null);

    return (
        <ImageUploaderLayout {...props} inputRef={inputRef}>
            <MdOutlineAddPhotoAlternate/>
            <input
                onChange={(e) => handleFileSelect(e, setFile, setPreviewUrl)}
                ref={inputRef}
                type="file"
                accept={"image/*"}
                className={"hidden"}
            />
            <img
                className={`absolute top-0 left-0 w-full h-full object-cover object-center 
                ${previewUrl ? '' : 'hidden'}`}
                src={previewUrl as string}
                alt="selected image"
            />
        </ImageUploaderLayout>
    )
}

export default ImageUploader;