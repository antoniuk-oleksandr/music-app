import {Song} from "@/types/Song";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setSong, setSongQueue} from "@/redux/reducers/music-player-slice";
import {getUrlFromString} from "@/utils/utils";

export const handleListPlayButtonClick = async (list: Song[], dispatch: Dispatch<UnknownAction>,
                                                audioElement: HTMLAudioElement) => {
    for (let song of list) {
        song.songPath = await getUrlFromString(song.songPath, 'image/jpeg');
    }

    const firstSong = list[0];
    dispatch(setSongQueue(list));
    dispatch(setSong(firstSong));
    audioElement.src = firstSong.songPath;
    audioElement.play();
}