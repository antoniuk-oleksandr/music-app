import PlaylistSongRowLayout from "./PlaylistSongRowLayout";
import {Song} from "@/types/Song";
import {formatTime} from "@/common-components/MusicPlayer/helpers";
import {useState} from "react";
import PlaylistFirstColumn from "@/pages/playlist/[id]/components/PlaylistFirstColumn/PlaylistFirstColumn";
import PlaylistSecondColumn from "@/pages/playlist/[id]/components/PlaylistSecondColumn";
import AlbumLink from "@/common-components/AlbumLink";
import SongListButtons from "@/common-components/SongListButtons/SongListButtons";

type PlaylistSongRowProps = {
    song: Song,
    topBorder: boolean,
    isPlaying: boolean,
}

const PlaylistSongRow = (props: PlaylistSongRowProps) => {
    const {song, topBorder, isPlaying} = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <PlaylistSongRowLayout
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            topBorder={topBorder}
        >
            <PlaylistFirstColumn
                isPlaying={isPlaying}
                song={song}
                isHovered={isHovered}
            />
            <PlaylistSecondColumn song={song}/>
            <AlbumLink album={song.album}/>
            <SongListButtons isShown={isHovered} song={song}/>
            <span className={"text-end"}>{formatTime(song.duration)}</span>
        </PlaylistSongRowLayout>
    )
}

export default PlaylistSongRow;