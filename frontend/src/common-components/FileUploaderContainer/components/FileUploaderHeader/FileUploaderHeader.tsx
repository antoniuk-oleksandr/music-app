import FileUploaderHeaderLayout from "./FileUploaderHeaderLayout";
import {IoClose} from "react-icons/io5";
import {Dispatch, SetStateAction} from "react";

type FileUploaderHeaderProps = {
    text: string,
    setIsFileUploaderOpened: Dispatch<SetStateAction<boolean>>,
}

const FileUploaderHeader = (props: FileUploaderHeaderProps) => {
    const {text, setIsFileUploaderOpened} = props;

    return (
        <FileUploaderHeaderLayout>
            <span>{text}</span>
            <IoClose
                onClick={() => setIsFileUploaderOpened(false)}
                className={"text-2xl cursor-pointer"}
            />
        </FileUploaderHeaderLayout>
    )
}

export default FileUploaderHeader;