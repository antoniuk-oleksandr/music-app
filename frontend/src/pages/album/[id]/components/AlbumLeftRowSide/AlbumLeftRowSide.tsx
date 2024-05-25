import AlbumLeftRowSideLayout from "./AlbumLeftRowSideLayout";
import AlbumSongIndex from "@/pages/album/[id]/components/AlbumSongIndex";
import {Song} from "@/types/Song";

type AlbumLeftRowSideProps = {
    index: number,
    song: Song,
    isHovered: boolean,
    isPlaying: boolean
}

const AlbumLeftRowSide = (props: AlbumLeftRowSideProps) => {
    const {song} = props;

    return (
        <AlbumLeftRowSideLayout>
            <AlbumSongIndex {...props}/>
            <span className={"font-semibold"}>{song.name}</span>
        </AlbumLeftRowSideLayout>
    )
}

export default AlbumLeftRowSide;