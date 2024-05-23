import {createContext, useContext, useEffect, useRef, useState} from "react";
import {getIsMuted, getVolume} from "@/utils/local-storage";

const AudioContext = createContext<HTMLAudioElement | null>(null);

export const useAudio = () => {
    return useContext(AudioContext);
}

export const AudioProvider = ({children}) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [audioElement, setAudioElement] = useState();

    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.volume = getVolume();
        audioRef.current.muted = getIsMuted();

        setAudioElement(audioRef.current);
    }, [audioRef]);

    if (!audioElement) return (
        <AudioContext.Provider value={audioElement}>
            <audio ref={audioRef}/>
        </AudioContext.Provider>
    )

    return (
        <AudioContext.Provider value={audioElement}>
            <audio ref={audioRef}/>
            {children}
        </AudioContext.Provider>
    )
}
