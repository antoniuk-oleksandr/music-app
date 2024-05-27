import {useEffect, useState} from "react";
import {useAudio} from "@/common-components/AudioContext";

export const usePlayButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioElement = useAudio() as HTMLAudioElement;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    useEffect(() => {
        audioElement.addEventListener("play", handlePlay);
        audioElement.addEventListener("pause", handlePause);

        return () => {
            audioElement.removeEventListener("play", handlePlay);
            audioElement.removeEventListener("pause", handlePause);
        }
    }, []);

    return isPlaying;
}