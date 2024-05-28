import {useProfileData} from "@/pages/profile/[id]/use-profile-data";
import ProfileBannerBlock from "@/pages/profile/[id]/components/ProfileBannerBlock/ProfileBannerBlock";
import ProfilePageLayoutLayout from "@/pages/profile/[id]/ProfilePageLayout";
import SearchResultHeader from "@/pages/search/components/SearchResultHeader/SearchResultHeader";
import {SearchTab} from "@/types/SearchTab";
import SearchResultRow from "@/pages/search/components/SearchResultRow/SearchResultRow";
import {capitalize} from "@/utils/utils";
import Wrapper from "@/common-components/Wrapper";

const ProfilePage = () => {
    const profileData = useProfileData();

    console.log(profileData);

    if (!profileData) return null;
    return (
        <ProfilePageLayoutLayout>
            <ProfileBannerBlock profileData={profileData}/>
            <Wrapper pt={'pt-8'} pb={'pb-8'}>
                <SearchResultHeader text={SearchTab.Songs}/>
                {Object.values(profileData.songs.slice(0, 5)).map((item, index) => (
                    <SearchResultRow
                        isPlaying={false}
                        item={item}
                        key={index}
                        index={index}
                        itemType={capitalize(SearchTab.Songs) as SearchTab}
                    />
                ))}
            </Wrapper>
        </ProfilePageLayoutLayout>
    )
}

export default ProfilePage