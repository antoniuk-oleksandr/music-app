import {Song} from "@/types/Song";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setSong, setSongQueue} from "@/redux/reducers/music-player-slice";
import {getSongImagesForList, getSongSrcs, formatUrl} from "@/utils/utils";

export const handleListPlayButtonClick = async (songs: Song[], dispatch: Dispatch<UnknownAction>,
                                                audioElement: HTMLAudioElement) => {
    if(songs.length === 0) return;

    const editedSongs = getSongSrcs(songs);
    const firstSong = editedSongs[0];
    dispatch(setSongQueue(editedSongs))
    audioElement.src = firstSong.songPath;
    audioElement.play();
}