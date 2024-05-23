import MusicPlayerLayout from "./MusicPlayerLayout";
import Progressbar from "@/common-components/MusicPlayer/components/Progressbar/Progressbar";
import Control from "@/common-components/MusicPlayer/components/Control/Control";
import {useDispatch, useSelector} from "react-redux";
import {useAudio} from "@/common-components/AudioContext";
import {useMusicTime} from "@/common-components/MusicPlayer/use-effects/use-music-time";
import {useBarDragging} from "@/common-components/MusicPlayer/use-effects/use-bar-dragging";
import {MutableRefObject} from "react";

const MusicPlayer = () => {
    const song = useSelector((state: any) => state.musicPlayer.song);
    const dispatch = useDispatch();
    const audioElement = useAudio() as HTMLAudioElement;
    const percentage = useMusicTime(audioElement, dispatch);
    const htmlRefs = useBarDragging(audioElement);

    const timelineRef = htmlRefs.find((v) => v.id === 'timeline')?.htmlObjectRef;
    const volumeBarRef = htmlRefs.find((v) => v.id === 'volume-bar')?.htmlObjectRef;

    const setMusicPercentage = (value: number) => {
        audioElement.currentTime = audioElement.duration * value / 100;
    }

    if (!song) return null;
    return (
        <MusicPlayerLayout>
            <Progressbar
                showValueIndicator
                barRef={timelineRef as MutableRefObject<HTMLDivElement>}
                id={"timeline"}
                setPercentage={(v) => setMusicPercentage(v)}
                isCursorShown
                rounded={false}
                percentage={percentage}
                width={"w-full"}/>
            <Control volumeBarRef={volumeBarRef as MutableRefObject<HTMLDivElement>}/>
        </MusicPlayerLayout>
    )
}

export default MusicPlayer;