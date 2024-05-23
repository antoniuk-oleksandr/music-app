import {useEffect, useState} from "react";
import {useAudio} from "@/utils/AudioContext";

export const usePlayButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioElement = useAudio() as HTMLAudioElement;

    useEffect(() => {
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        audioElement.addEventListener("play", handlePlay);
        audioElement.addEventListener("pause", handlePause);

        return () => {
            audioElement.removeEventListener("play", handlePlay);
            audioElement.removeEventListener("pause", handlePause);
        }
    }, []);

    return isPlaying;
}