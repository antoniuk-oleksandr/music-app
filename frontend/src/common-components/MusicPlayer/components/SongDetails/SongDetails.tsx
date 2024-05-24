import SongDetailsLayout from "./SongDetailsLayout";
import {Song} from "@/types/Song";
import {useSelector} from "react-redux";
import UserList from "@/pages/search/components/UserList";
import BottomInfoLayout from "@/pages/search/components/BottomInfoLayout";
import {getYearFromTimestamp} from "@/utils/utils";

const SongDetails = () => {
    const song: Song = useSelector((state: any) => state.musicPlayer.song);

    return (
        <SongDetailsLayout>
            <span className={"text-lg font-semibold select-text"}>{song.name}</span>
            <BottomInfoLayout>
                <UserList users={song.users}/>
                <span>•</span>
                <span>{getYearFromTimestamp(song.releaseDate)}</span>
            </BottomInfoLayout>
        </SongDetailsLayout>
    )
}

export default SongDetails;