import AlbumSongsListLayout from "./AlbumSongsListLayout";
import {Song} from "@/types/Song";
import AlbumSongRow from "@/common-components/ListPage/components/AlbumSongsList/components/AlbumSongRow/AlbumSongRow";

type AlbumSongsListProps = {
    songs: Song[]
}

const AlbumSongsList = (props: AlbumSongsListProps) => {
    const {songs} = props;

    return (
        <AlbumSongsListLayout>
            {songs.map((song, index) => (
                <AlbumSongRow
                    topBorder={index !== 0}
                    song={song}
                    index={index}
                    key={index}
                />
            ))}
        </AlbumSongsListLayout>
    )
}

export default AlbumSongsList;