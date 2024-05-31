import ProfileSongsLayout from "./ProfileSongsLayout";
import {useProfileSongs} from "@/pages/profile/[id]/use-effects/use-profile-songs";
import PlaylistSongsList from "@/pages/playlist/[id]/components/PlaylistSongsList/PlaylistSongsList";
import ProfileListsHeader from "@/pages/profile/[id]/components/ProfileListsHeader";
import {SearchTab} from "@/types/SearchTab";

const ProfileSongsPage = () => {
    const songs = useProfileSongs();

    if(!songs) return null;
    return (
        <ProfileSongsLayout>
            <ProfileListsHeader type={SearchTab.Songs}/>
            <PlaylistSongsList songs={songs}/>
        </ProfileSongsLayout>
    )
}

export default ProfileSongsPage;