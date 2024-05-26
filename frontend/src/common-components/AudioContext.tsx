import {createContext, useContext, useEffect, useRef, useState} from "react";
import {getIsMutedFromLocalStorage, getVolumeFromLocalStorage} from "@/utils/local-storage";
import {LayoutProps} from "@/types/LayoutProps";

const AudioContext = createContext<HTMLAudioElement | null>(null);

export const useAudio = () => {
    return useContext(AudioContext);
}

export const AudioProvider = ({children}: LayoutProps) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.volume = getVolumeFromLocalStorage();
        audioRef.current.muted = getIsMutedFromLocalStorage();

        setAudioElement(audioRef.current);
    }, [audioRef]);

    return (
        <AudioContext.Provider value={audioElement}>
            <audio ref={audioRef}/>
            {audioElement ? children: null}
        </AudioContext.Provider>
    )
}
