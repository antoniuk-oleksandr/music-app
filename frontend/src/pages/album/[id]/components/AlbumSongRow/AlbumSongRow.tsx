import AlbumSongRowLayout from "./AlbumSongRowLayout";
import {Song} from "@/types/Song";
import AlbumLeftRowSide
    from "@/pages/album/[id]/components/AlbumLeftRowSide/AlbumLeftRowSide";
import AlbumRightRowSide
    from "@/pages/album/[id]/components/AlbumRightRowSide/AlbumRightRowSide";
import {useState} from "react";

type AlbumSongRowProps = {
    song: Song;
    index: number;
    topBorder: boolean;
    isPlaying: boolean;
}

const AlbumSongRow = (props: AlbumSongRowProps) => {
    const {song, index, topBorder, isPlaying} = props;
    const [isHovered, setHovered] = useState<boolean>(false);

    return (
        <AlbumSongRowLayout setHovered={setHovered} topBorder={topBorder}>
            <AlbumLeftRowSide
                index={index}
                song={song}
                isPlaying={isPlaying}
                isHovered={isHovered}
            />
            <AlbumRightRowSide duration={song.duration}/>
        </AlbumSongRowLayout>
    )
}

export default AlbumSongRow;