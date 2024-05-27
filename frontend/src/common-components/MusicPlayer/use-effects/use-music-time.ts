import { Dispatch, useEffect, useState } from "react";
import { UnknownAction } from "redux";
import { handleNextTrack, updateTime } from "@/common-components/MusicPlayer/handlers";
import { MusicPlayerType } from "@/types/MusicPlayerType";

export const useMusicTime = (
    audioElement: HTMLAudioElement,
    dispatch: Dispatch<UnknownAction>,
    musicPlayer: MusicPlayerType
) => {
    const [percentage, setPercentage] = useState(0);

    const handleTimeUpdate = () => updateTime(audioElement, setPercentage);
    const handleEnd = () => handleNextTrack(audioElement, dispatch, musicPlayer);

    useEffect(() => {
        if (Object.values(musicPlayer).includes(null)) return;

        audioElement.addEventListener("timeupdate", handleTimeUpdate);
        audioElement.addEventListener("ended", handleEnd);

        return () => {
            audioElement.removeEventListener("timeupdate", handleTimeUpdate);
            audioElement.removeEventListener("ended", handleEnd);
        };
    }, [musicPlayer, audioElement]);

    return percentage;
};
