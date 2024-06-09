import ProfileTopLayout from "./ProfileTopLayout";
import ProfileIcon from "@/common-components/ProfileMenu/components/ProfileIcon";
import {User} from "@/types/User";

type ProfileTopProps = {
    user: User,
}

const ProfileTop = (props: ProfileTopProps) => {
    const {username, id, avatarPath} = props.user;

    return (
        <ProfileTopLayout>
            <ProfileIcon avatarPath={avatarPath}/>
            <span>{username}</span>
        </ProfileTopLayout>
    )
}

export default ProfileTop;