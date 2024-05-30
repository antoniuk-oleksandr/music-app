import {useProfileData} from "@/pages/profile/[id]/use-profile-data";
import ProfileBannerBlock from "@/pages/profile/[id]/components/ProfileBannerBlock/ProfileBannerBlock";
import ProfilePageLayoutLayout from "@/pages/profile/[id]/ProfilePageLayout";
import ProfileUserData from "@/pages/profile/[id]/components/ProfileUserData/ProfileUserData";

const ProfilePage = () => {
    const profileData = useProfileData();

    if (!profileData) return null;
    return (
        <ProfilePageLayoutLayout>
            <ProfileBannerBlock profileData={profileData}/>
            <ProfileUserData profileData={profileData}/>
        </ProfilePageLayoutLayout>
    )
}

export default ProfilePage