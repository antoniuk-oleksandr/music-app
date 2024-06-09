import ProfileMenuLayout from "./ProfileMenuLayout";
import ProfileTop from "@/common-components/ProfileMenu/components/ProfileTop/ProfileTop";
import {User} from "@/types/User";
import ProfileCenter from "@/common-components/ProfileMenu/components/ProfileCenter/ProfileCenter";
import ProfileBottom from "@/common-components/ProfileMenu/components/ProfileBottom/ProfileBottom";
import {Dispatch, MutableRefObject, SetStateAction} from "react";

type ProfileMenuProps = {
    user: User,
    isMenuOpened: boolean,
    profileMenuRef: MutableRefObject<HTMLDivElement| null> ,
    setIsMenuOpened: Dispatch<SetStateAction<boolean>>,
}

const ProfileMenu = (props: ProfileMenuProps) => {
    return (
        <ProfileMenuLayout {...props}>
            <ProfileTop {...props}/>
            <ProfileCenter {...props}/>
            <ProfileBottom {...props}/>
        </ProfileMenuLayout>
    )
}

export default ProfileMenu;