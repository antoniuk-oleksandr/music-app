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

type ProfileInfoBlockProps = {
    profileData: Profile,
}

const ProfileInfoBlock = (props: ProfileInfoBlockProps) => {
    const {profileData} = props;
    const tokenInfo = useSelector((state: any) => state.token);
    console.log(tokenInfo);

    return (
        <ProfileInfoBlockLayout>
            <ProfileUsernameName username={profileData.user.username}/>
            <BannerButtonsLayout>
                <div className={"flex gap-x-2"}>
                    <ProfilePlayButton songs={profileData.songs}/>
                    <SubscribeButton profileData={profileData}/>
                </div>
                <EditProfileButton/>
            </BannerButtonsLayout>
        </ProfileInfoBlockLayout>
    )
}

export default ProfileInfoBlock;