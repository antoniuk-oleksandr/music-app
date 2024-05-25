import {Song} from "@/types/Song";
import UserList from "@/common-components/UserList";
import {formatTime} from "@/common-components/MusicPlayer/helpers";
import {getYearFromTimestamp} from "@/utils/utils";

type SongBottomInfoProps = {
    song: Song,
}

const SongBottomInfo = (props: SongBottomInfoProps) => {
    const {song} = props;

    return (
        <>
            <UserList users={song.users}/>
            <span>•</span>
            <span>{formatTime(song.duration)}</span>
            <span>•</span>
            <span>{getYearFromTimestamp(song.releaseDate)}</span>
        </>
    )
}

export default SongBottomInfo;