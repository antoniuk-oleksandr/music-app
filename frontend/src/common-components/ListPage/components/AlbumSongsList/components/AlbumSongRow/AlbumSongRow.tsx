import AlbumSongRowLayout from "./AlbumSongRowLayout";
import {Song} from "@/types/Song";
import {formatTime} from "@/common-components/MusicPlayer/helpers";
import AlbumLeftRowSide from "@/common-components/ListPage/components/AlbumSongsList/components/AlbumLeftRowSide";
import AlbumSongIndex from "@/common-components/ListPage/components/AlbumSongsList/components/AlbumSongIndex";

type AlbumSongRowProps = {
    song: Song;
    index: number;
    topBorder: boolean
}

const AlbumSongRow = (props: AlbumSongRowProps) => {
    const {song, index, topBorder} = props;

    return (
        <AlbumSongRowLayout topBorder={topBorder}>
            <AlbumLeftRowSide>
                <AlbumSongIndex index={index}/>
                <span className={"font-semibold"}>{song.name}</span>
            </AlbumLeftRowSide>
            <div>
                <span>{formatTime(song.duration)}</span>
            </div>
        </AlbumSongRowLayout>
    )
}

export default AlbumSongRow;


// <div className={"col-start-1"}>
//     <span>{song.name}</span>
// </div>
// <div className={"col-start-2"}>
//     <UserList users={song.users}/>
// </div>
// <div className={"col-start-3"}></div>
// <div className={"col-start-4"}>
//     <span>{formatTime(song.duration)}</span>
// </div>