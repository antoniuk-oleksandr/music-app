import SearchResultHeader from "@/pages/search/components/SearchResultHeader/SearchResultHeader";
import {SearchTab} from "@/types/SearchTab";
import ProfileShowAllButton from "@/pages/profile/[id]/components/ProfileShowAllButton";
import {useRouter} from "next/router";
import {ProfilePageProps} from "@/types/ProfilePageProps";
import ProfileLists from "@/pages/profile/[id]/components/ProfileLists/ProfileLists";

type ProfileListsProps = ProfilePageProps & {
    listType: SearchTab;
}

const ProfileListsContainer = (props: ProfileListsProps) => {
    const {listType, profileData} = props;
    const router = useRouter();

    if(profileData[listType.toLowerCase() as 'albums' | 'playlists'].length === 0) return null;
    return (
        <div>
            <SearchResultHeader text={listType}/>
            <ProfileLists {...props}/>
            <ProfileShowAllButton
                action={() =>
                    router.push(`/profile/${profileData.user.id}/${listType.toLowerCase()}`)}
            />
        </div>
    )
}

export default ProfileListsContainer;