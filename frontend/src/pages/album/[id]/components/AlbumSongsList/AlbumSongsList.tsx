import AlbumSongsListLayout from "./AlbumSongsListLayout";
import {Song} from "@/types/Song";
import AlbumSongRow from "@/pages/album/[id]/components/AlbumSongRow/AlbumSongRow";
import {useIsPlaying} from "@/common-use-effects/use-is-playing";
import {useAudio} from "@/common-components/AudioContext";

type AlbumSongsListProps = {
    songs: Song[]
}

const AlbumSongsList = (props: AlbumSongsListProps) => {
    const {songs} = props;
    const audioElement = useAudio() as HTMLAudioElement;
    const isPlaying = useIsPlaying(audioElement);

    return (
        <AlbumSongsListLayout>
            {songs.map((song, index) => (
                <AlbumSongRow
                    isPlaying={isPlaying}
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