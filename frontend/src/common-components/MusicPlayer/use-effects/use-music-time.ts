import {Dispatch, useEffect, useState} from "react";
import {UnknownAction} from "redux";

export const useMusicTime = (audioElement: HTMLAudioElement, dispatch: Dispatch<UnknownAction>) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const updateTime = () => {
            const percentageValue = audioElement.currentTime / audioElement.duration * 100;
            setPercentage(percentageValue);
        }

        audioElement.addEventListener("timeupdate", updateTime);

        return () => {
            audioElement.removeEventListener("timeupdate", updateTime);
        }
    }, []);

    return percentage;
}