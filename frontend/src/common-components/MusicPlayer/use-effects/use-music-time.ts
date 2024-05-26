import {Dispatch, useEffect, useState} from "react";
import {UnknownAction} from "redux";
import {handleSongEnd, updateTime} from "@/common-components/MusicPlayer/handlers";
import {Repeat} from "@/types/Repeat";
import {Song} from "@/types/Song";

export const useMusicTime = (audioElement: HTMLAudioElement,
                             dispatch: Dispatch<UnknownAction>,
                             repeat: Repeat,
                             songQueue: Song[]) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        audioElement.addEventListener("timeupdate", () =>
            updateTime(audioElement, setPercentage));
        audioElement.addEventListener("ended", () =>
            handleSongEnd(audioElement, dispatch, repeat));

        return () => {
            audioElement.removeEventListener("timeupdate", () =>
                updateTime(audioElement, setPercentage));
            audioElement.removeEventListener("ended", () =>
                handleSongEnd(audioElement, dispatch, repeat));
        }
    }, [repeat, songQueue]);

    return percentage;
}