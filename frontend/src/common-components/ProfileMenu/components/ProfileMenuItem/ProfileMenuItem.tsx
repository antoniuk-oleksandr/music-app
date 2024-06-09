import ProfileMenuItemLayout from "./ProfileMenuItemLayout";
import {Dispatch, ReactNode, SetStateAction} from "react";

type ProfileMenuItemProps = {
    icon: ReactNode,
    text: string,
    onClick: () => void,
    setIsMenuOpened: Dispatch<SetStateAction<boolean>>,
}

const ProfileMenuItem = (props: ProfileMenuItemProps) => {
    const {icon, text} = props;

    return (
        <ProfileMenuItemLayout {...props}>
            {icon}
            <span className={"text-base"}>{text}</span>
        </ProfileMenuItemLayout>
    )
}

export default ProfileMenuItem;