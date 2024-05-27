import {useEffect, useState} from "react";
import {useAudio} from "@/common-components/AudioContext";

export const useVolume = () => {
    const audioElement = useAudio() as HTMLAudioElement;
    const [volumeObject, setVolumeObject] = useState({
        muted: audioElement.muted,
        volume: audioElement.volume,
    });

    const handleVolumeChange = (e: Event) => {
        const target = e.target as HTMLAudioElement;

        setVolumeObject({
            muted: target.muted,
            volume: target.volume
        })
    }

    useEffect(() => {
        audioElement.addEventListener("volumechange", handleVolumeChange);

        return () => {
            audioElement.removeEventListener("volumechange", handleVolumeChange);
        }
    }, []);

    return volumeObject;
}