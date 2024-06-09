import FileUploaderContainer from "@/common-components/FileUploaderContainer/FileUploaderContainer";
import {MutableRefObject} from "react";
import {SetRef} from "@/types/SetRef";

type ProfileUploaderProps = {
    menuRef: MutableRefObject<HTMLDivElement | null>,
    setRefs: MutableRefObject<SetRef>[],
}

const ProfileUploader = (props: ProfileUploaderProps) => {
    const {menuRef, setRefs} = props;

    return (
        <>
            <FileUploaderContainer
                aspect={"1:1"}
                setIsMenuOpenedRef={setRefs[0]}
                menuRef={menuRef}
                headerText={"Select an image"}
            />
            <FileUploaderContainer
                aspect={"3:1"}
                setIsMenuOpenedRef={setRefs[1]}
                menuRef={menuRef}
                headerText={"Select an image"}
            />
        </>
    )
}

export default ProfileUploader;