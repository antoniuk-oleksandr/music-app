import {Song} from "@/types/Song";
import {fileRequest} from "@/api/file-request";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setSong} from "@/redux/reducers/music-player-slice";
import {getUrlFromString} from "@/utils/utils";

export const handleSongClick = async (audioElement: HTMLAudioElement | null,
                                      dispatch: Dispatch<UnknownAction>,
                                      song: Song) => {
    if (!song.songPath.includes('blob'))
        song.songPath = await getUrlFromString(song.songPath, 'audio/mpeg');

    (audioElement as HTMLAudioElement).src = song.songPath;

    dispatch(setSong(song));
    audioElement?.play();
}