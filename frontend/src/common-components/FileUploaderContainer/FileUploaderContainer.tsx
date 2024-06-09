import FileUploaderContainerLayout from "./FileUploaderContainerLayout";
import ImageUploader from "@/common-components/FileUploader/ImageUploader";
import FileUploaderHeader
    from "@/common-components/FileUploaderContainer/components/FileUploaderHeader/FileUploaderHeader";
import LightButton from "@/common-components/LightButton";
import {Dispatch, MutableRefObject, SetStateAction, useRef} from "react";
import {useFileUploaderContainer} from "@/common-components/FileUploaderContainer/use-file-uploader-container";

type FileUploaderContainer = {
    headerText: string,
    menuRef: MutableRefObject<HTMLDivElement | null>,
    setIsMenuOpenedRef: MutableRefObject<null | Dispatch<SetStateAction<boolean>>>,
    aspect: '3:1' | '1:1',
}

const FileUploaderContainer = (props: FileUploaderContainer) => {
    const {headerText, menuRef, setIsMenuOpenedRef, aspect} = props;
    const fileUploaderRef = useRef<HTMLDivElement | null>(null);
    const {
        isMenuOpened,
        setIsMenuOpened
    } = useFileUploaderContainer(fileUploaderRef, menuRef, setIsMenuOpenedRef);

    return (
        <FileUploaderContainerLayout
            isFileUploaderOpened={isMenuOpened}
            fileUploaderRef={fileUploaderRef}
        >
            <FileUploaderHeader
                setIsFileUploaderOpened={setIsMenuOpened}
                text={headerText}
            />
            <ImageUploader aspect={aspect}/>
            <LightButton
                className={"!bg-red-500 mb-4 mx-4 text-white w-40 flex justify-center"}>
                <span>Upload</span>
            </LightButton>
        </FileUploaderContainerLayout>
    )
}

export default FileUploaderContainer;