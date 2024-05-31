import ProfileListPage from "@/common-components/ProfileListPage/ProfileListPage";
import {SearchTab} from "@/types/SearchTab";

const ProfilePlaylistsPage = () => {
    return <ProfileListPage type={SearchTab.Playlists}/>
}

export default ProfilePlaylistsPage;