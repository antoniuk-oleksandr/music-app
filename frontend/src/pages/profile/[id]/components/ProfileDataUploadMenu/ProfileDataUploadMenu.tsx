import ProfileDataUploadMenuLayout from "./ProfileDataUploadMenuLayout";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import ProfileDataUploadMenuHeader
    from "@/pages/profile/[id]/components/ProfileDataUploadMenu/components/ProfileDataUploadMenuHeader/ProfileDataUploadMenuHeader";
import ImageUploader
    from "@/common-components/FileUploader/ImageUploader";

type EditProfileMenuProps = {
    isOpened: boolean,
    menuRef: MutableRefObject<HTMLDivElement | null>,
    setIsOpened: Dispatch<SetStateAction<boolean>>,
}

const ProfileDataUploadMenu = (props: EditProfileMenuProps) => {
    return (
        <ProfileDataUploadMenuLayout {...props}>
            <ProfileDataUploadMenuHeader/>
            <ImageUploader/>
        </ProfileDataUploadMenuLayout>
    )
}

export default ProfileDataUploadMenu;