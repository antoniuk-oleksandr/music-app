import {useEffect, useState} from "react";

export const useIsPlaying = (audioElement: HTMLAudioElement) => {
    const [isPlaying, setIsPlaying] = useState(!audioElement.paused);
    
    useEffect(() => {
        audioElement.addEventListener("pause", () => setIsPlaying(false));
        audioElement.addEventListener("play", () => setIsPlaying(true));

        return () => {
            audioElement.removeEventListener("pause", () => setIsPlaying(false));
            audioElement.removeEventListener("play", () => setIsPlaying(true));
        }
    }, []);

    return isPlaying;
}