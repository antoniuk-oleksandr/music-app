import {Song} from "@/types/Song";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setSong, setSongQueue} from "@/redux/reducers/music-player-slice";
import {getSongImagesForList, getSongSrcs, getUrlFromString} from "@/utils/utils";

export const handleListPlayButtonClick = async (songs: Song[], dispatch: Dispatch<UnknownAction>,
                                                audioElement: HTMLAudioElement) => {
    if(songs.length === 0) return;
    await getSongSrcs(songs);

    const firstSong = songs[0];
    dispatch(setSongQueue(songs))
    audioElement.src = firstSong.songPath;
    audioElement.play();
}