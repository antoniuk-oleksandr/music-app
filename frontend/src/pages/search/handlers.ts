import {Song} from "@/types/Song";
import {fileRequest} from "@/api/file-request";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setSong} from "@/redux/reducers/music-player-slice";

export const handleSongClick = async (audioElement: HTMLAudioElement | null,
                                      dispatch: Dispatch<UnknownAction>) => {
    const song: Song = {
        name: 'XO Tour Llif3',
        duration: 183,
        releaseDate: null as unknown as Date,
        songURL: await fileRequest('songs', '1.mp3'),
        src: await fileRequest('avatars', '1.jpg'),
    }

    const songBlob = new Blob([song.songURL], {type: "audio/mpeg"});
    const avatarBlog = new Blob([song.src as BlobPart], {type: "image/jpeg"});
    song.src = URL.createObjectURL(avatarBlog);
    song.songURL = URL.createObjectURL(songBlob);

    (audioElement as HTMLAudioElement).src = URL.createObjectURL(songBlob);

    dispatch(setSong(song));
    audioElement?.play();
}