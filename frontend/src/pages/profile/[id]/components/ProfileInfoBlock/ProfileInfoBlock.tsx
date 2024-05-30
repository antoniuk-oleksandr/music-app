import ProfileInfoBlockLayout from "./ProfileInfoBlockLayout";
import {Profile} from "@/types/Profile";
import BannerButtonsLayout from "@/pages/profile/[id]/components/BannerButtons/BannerButtonsLayout";
import ProfilePlayButton from "@/pages/profile/[id]/components/ProfilePlayButton";
import ProfileUsernameName from "@/pages/profile/[id]/components/ProfileUsernameName";
import SubscribeButton from "@/pages/profile/[id]/components/SubscribeButton";

type ProfileInfoBlockProps = {
    profileData: Profile,
}

const ProfileInfoBlock = (props: ProfileInfoBlockProps) => {
    const {profileData} = props;

    return (
        <ProfileInfoBlockLayout>
            <ProfileUsernameName username={profileData.user.username}/>
            <BannerButtonsLayout>
                <ProfilePlayButton songs={profileData.songs}/>
                <SubscribeButton profileData={profileData}/>
            </BannerButtonsLayout>
        </ProfileInfoBlockLayout>
    )
}

export default ProfileInfoBlock;