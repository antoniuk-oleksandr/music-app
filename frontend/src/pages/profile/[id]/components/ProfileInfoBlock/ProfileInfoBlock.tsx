import ProfileInfoBlockLayout from "./ProfileInfoBlockLayout";
import {Profile} from "@/types/Profile";
import BannerButtonsLayout from "@/pages/profile/[id]/components/BannerButtons/BannerButtonsLayout";
import ProfilePlayButton from "@/pages/profile/[id]/components/ProfilePlayButton";
import ProfileUsernameName from "@/pages/profile/[id]/components/ProfileUsernameName";
import SubscribeButton from "@/pages/profile/[id]/components/SubscribeButton";
import {useSelector} from "react-redux";
import LightButton from "@/common-components/LightButton";
import {MdModeEdit, MdOutlineEdit} from "react-icons/md";
import EditProfileButton from "@/pages/profile/[id]/components/EditProfileButton/EditProfileButton";
import PlaySubButtonsLayout from "../PlaySubButtonsLayout";

type ProfileInfoBlockProps = {
    profileData: Profile,
}

const ProfileInfoBlock = (props: ProfileInfoBlockProps) => {
    const {profileData} = props;
    const tokenInfo = useSelector((state: any) => state.token);

    return (
        <ProfileInfoBlockLayout>
            <ProfileUsernameName username={profileData.user.username}/>
            <BannerButtonsLayout>
                <PlaySubButtonsLayout>
                    <ProfilePlayButton songs={profileData.songs}/>
                    <SubscribeButton profileData={profileData}/>
                </PlaySubButtonsLayout>
                <EditProfileButton/>
            </BannerButtonsLayout>
        </ProfileInfoBlockLayout>
    )
}

export default ProfileInfoBlock;