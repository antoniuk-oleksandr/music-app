import ProfileBannerBlockLayout from "./ProfileBannerBlockLayout";
import {Profile} from "@/types/Profile";
import Banner from "@/pages/profile/[id]/components/Banner/Banner";
import BannerOverlay from "@/pages/profile/[id]/components/BannerOverlay";
import ProfileInfoBlock from "@/pages/profile/[id]/components/ProfileInfoBlock/ProfileInfoBlock";

type ProfileBannerBlockProps = {
    profileData: Profile,
}

const ProfileBannerBlock = (props: ProfileBannerBlockProps) => {
    return (
        <ProfileBannerBlockLayout>
            <Banner {...props}/>
            <BannerOverlay/>
            <ProfileInfoBlock {...props}/>
        </ProfileBannerBlockLayout>
    )
}

export default ProfileBannerBlock;