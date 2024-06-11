import ProfileMenuButtonLayout from "./ProfileMenuButtonLayout";
import ProfileMenu from "@/common-components/ProfileMenu/ProfileMenu";
import {useMenu} from "@/common-components/ProfileMenu/use-menu";
import {useRef} from "react";
import {useUserProfileData} from "@/common-components/ProfileMenu/use-user-profile-data";
import {useDispatch, useSelector} from "react-redux";

const ProfileMenuButton = () => {
    const jwt = useSelector((state: any) => state.token.tokens.jwt.token);
    const dispatch = useDispatch();
    const data = useUserProfileData(jwt, dispatch);

    const profileMenuRef = useRef<HTMLDivElement | null>(null);
    const profileMenuButtonRef = useRef<HTMLImageElement | null>(null);
    const {isMenuOpened, setIsMenuOpened} = useMenu(profileMenuRef, profileMenuButtonRef);

    if (!data) return;
    return (
        <ProfileMenuButtonLayout>
            <img
                ref={profileMenuButtonRef}
                onClick={() => setIsMenuOpened((prev) => !prev)}
                className={"size-full rounded-full cursor-pointer"}
                src={data.avatarPath}
                alt={data.username}
            />
            <ProfileMenu
                profileMenuRef={profileMenuRef}
                isMenuOpened={isMenuOpened}
                user={data}
                setIsMenuOpened={setIsMenuOpened}
            />
        </ProfileMenuButtonLayout>
    )
}

export default ProfileMenuButton;