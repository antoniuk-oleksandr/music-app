import SearchResultHeader from "@/pages/search/components/SearchResultHeader/SearchResultHeader";
import {SearchTab} from "@/types/SearchTab";
import PlaylistSongsList from "@/pages/playlist/[id]/components/PlaylistSongsList/PlaylistSongsList";
import {ProfilePageProps} from "@/types/ProfilePageProps";
import ProfileShowAllButton from "@/pages/profile/[id]/components/ProfileShowAllButton";
import {useRouter} from "next/router";

const ProfileSongs = (props: ProfilePageProps) => {
    const {profileData} = props;
    const router = useRouter();

    if (profileData.songs.length === 0) return null;
    return (
        <div>
            <SearchResultHeader text={SearchTab.Songs}/>
            <PlaylistSongsList songs={profileData.songs.slice(0, 5)}/>
            <ProfileShowAllButton
                action={() => router.push(`/profile/${profileData.user.id}/songs`)}
            />
        </div>
    )
}

export default ProfileSongs;