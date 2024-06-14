import {useProfileData} from "@/pages/profile/[id]/use-effects/use-profile-data";
import ProfileBannerBlock from "@/pages/profile/[id]/components/ProfileBannerBlock/ProfileBannerBlock";
import ProfilePageLayoutLayout from "@/pages/profile/[id]/ProfilePageLayout";
import ProfileUserData from "@/pages/profile/[id]/components/ProfileUserData/ProfileUserData";
import {useDispatch, useSelector} from "react-redux";

const ProfilePage = () => {
    const tokenStatus = useSelector((state: any) => state.token);
    const dispatch = useDispatch();
    const profileData = useProfileData(tokenStatus, dispatch);


    if (!profileData) return null;
    return (
        <ProfilePageLayoutLayout>
            <ProfileBannerBlock profileData={profileData}/>
            <ProfileUserData profileData={profileData}/>
        </ProfilePageLayoutLayout>
    )
}

export default ProfilePage