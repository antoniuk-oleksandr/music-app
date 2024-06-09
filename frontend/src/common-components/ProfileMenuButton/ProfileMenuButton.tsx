import ProfileMenuButtonLayout from "./ProfileMenuButtonLayout";
import ProfileMenu from "@/common-components/ProfileMenu/ProfileMenu";
import {User} from "@/types/User";
import {useMenu} from "@/common-components/ProfileMenu/use-menu";
import {AnimatePresence} from "framer-motion";
import {Dispatch, SetStateAction, useRef, useState} from "react";
import ModalElement from "@/common-components/ModalElement/ModalElement";

const ProfileMenuButton = () => {
    const data = {
        username: 'alex',
        id: 328,
        avatarPath: '/images/default-avatar.jpg',
    } as User;

    const profileMenuRef = useRef<HTMLDivElement | null>(null);
    const profileMenuButtonRef = useRef<HTMLImageElement | null>(null);
    const {isMenuOpened, setIsMenuOpened} = useMenu(profileMenuRef, profileMenuButtonRef);

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