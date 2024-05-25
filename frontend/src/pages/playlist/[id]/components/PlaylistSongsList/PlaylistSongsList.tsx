import PlaylistSongsListLayout from "./PlaylistSongsListLayout";
import {Song} from "@/types/Song";
import PlaylistSongRow from "@/pages/playlist/[id]/components/PlaylistSongRow/PlaylistSongRow";
import {useAudio} from "@/common-components/AudioContext";
import {useIsPlaying} from "@/utils/use-is-playing";

type PlaylistSongsListProps = {
    songs: Song[],
}

const PlaylistSongsList = (props: PlaylistSongsListProps) => {
    const {songs} = props;
    const audioElement = useAudio() as HTMLAudioElement;
    const isPlaying = useIsPlaying(audioElement);

    return (
        <PlaylistSongsListLayout>
            {songs.map((song, index) => (
                <PlaylistSongRow
                    isPlaying={isPlaying}
                    key={index}
                    song={song}
                    topBorder={index !== 0}
                />
            ))}
        </PlaylistSongsListLayout>
    )
}

export default PlaylistSongsList;