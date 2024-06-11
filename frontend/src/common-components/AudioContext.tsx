import {createContext, useContext, useEffect, useRef, useState} from "react";
import {getIsMutedFromLocalStorage, getVolumeFromLocalStorage} from "@/utils/local-storage";
import {LayoutProps} from "@/types/LayoutProps";

const AudioContext = createContext<HTMLAudioElement | null>(null);

export const useAudio = () => {
    return useContext(AudioContext);
}

type AudioContextProps = LayoutProps & {
    font: string,
}

export const AudioProvider = (props: AudioContextProps) => {
    const {font, children} = props;
    const audioRef = useRef<HTMLAudioElement>(null);
    const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.volume = getVolumeFromLocalStorage();
        audioRef.current.muted = getIsMutedFromLocalStorage();

        setAudioElement(audioRef.current);
    }, [audioRef]);

    return (
        <div className={font}>
            <AudioContext.Provider value={audioElement}>
                <audio ref={audioRef}/>
                {audioElement ? children : null}
            </AudioContext.Provider>
        </div>
    )
}
