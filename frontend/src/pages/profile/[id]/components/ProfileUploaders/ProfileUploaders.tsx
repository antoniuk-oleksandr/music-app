import FileUploaderContainer from "@/common-components/FileUploaderContainer/FileUploaderContainer";
import {MutableRefObject, useRef} from "react";
import {SetRef} from "@/types/SetRef";
import {handleProfileUploadClick} from "@/pages/profile/[id]/components/ProfileUploaders/handleProfileUploadClick";
import {useDispatch, useSelector} from "react-redux";
import {TokenInfo} from "@/types/TokenInfo";

type ProfileUploaderProps = {
    menuRef: MutableRefObject<HTMLDivElement | null>,
    setRefs: MutableRefObject<SetRef>[],
}

const ProfileUploader = (props: ProfileUploaderProps) => {
    const {menuRef, setRefs} = props;
    const tokenInfo: TokenInfo = useSelector((state: any) => state.token.tokens);
    const dispatch = useDispatch();

    const avatarRef = useRef<File | null>(null);
    const bannerRef = useRef<File | null>(null);

    const avatarClick = async () => {
        await handleProfileUploadClick(avatarRef, tokenInfo, dispatch, 'avatar');
        setRefs[0].current && setRefs[0].current(false);
    }
    const bannerClick = async () => {
        await handleProfileUploadClick(bannerRef, tokenInfo, dispatch, 'banner');
        setRefs[1].current && setRefs[1].current(false);
    }

    return (
        <>
            <FileUploaderContainer
                onUploadButtonClick={avatarClick}
                fileRef={avatarRef}
                aspect={"1:1"}
                setIsMenuOpenedRef={setRefs[0]}
                menuRef={menuRef}
                headerText={"Select an image"}
            />
            <FileUploaderContainer
                onUploadButtonClick={bannerClick}
                fileRef={bannerRef}
                aspect={"3:1"}
                setIsMenuOpenedRef={setRefs[1]}
                menuRef={menuRef}
                headerText={"Select an image"}
            />
        </>
    )
}

export default ProfileUploader;