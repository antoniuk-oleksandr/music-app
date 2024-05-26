import MusicPlayerLayout from "./MusicPlayerLayout";
import Progressbar from "@/common-components/MusicPlayer/components/Progressbar/Progressbar";
import Control from "@/common-components/MusicPlayer/components/Control/Control";
import {useDispatch, useSelector} from "react-redux";
import {useAudio} from "@/common-components/AudioContext";
import {useMusicTime} from "@/common-components/MusicPlayer/use-effects/use-music-time";
import {useBarDragging} from "@/common-components/MusicPlayer/use-effects/use-bar-dragging";
import {MutableRefObject} from "react";
import {useRepeatButton} from "@/common-components/MusicPlayer/use-effects/use-repeat-button";

const MusicPlayer = () => {
    const song = useSelector((state: any) => state.musicPlayer.song);
    const songQueue = useSelector((state: any) => state.musicPlayer.songQueue);
    const dispatch = useDispatch();
    const repeat = useSelector((state: any) => state.musicPlayer.repeat);
    const audioElement = useAudio() as HTMLAudioElement;
    const percentage = useMusicTime(audioElement, dispatch, repeat, songQueue);
    const htmlRefs = useBarDragging(audioElement);
    useRepeatButton(dispatch);

    const timelineRef = htmlRefs.find((v) => v.id === 'timeline')?.htmlObjectRef;
    const volumeBarRef = htmlRefs.find((v) => v.id === 'volume-bar')?.htmlObjectRef;

    const setMusicPercentage = (value: number) => {
        audioElement.currentTime = audioElement.duration * value / 100;
    }

    if (!song || !repeat) return null;
    return (
        <MusicPlayerLayout>
            <Progressbar
                isCursorShown
                id={"timeline"}
                rounded={false}
                width={"w-full"}
                showValueIndicator
                percentage={percentage}
                setPercentage={(v) => setMusicPercentage(v)}
                barRef={timelineRef as MutableRefObject<HTMLDivElement>}
            />
            <Control volumeBarRef={volumeBarRef as MutableRefObject<HTMLDivElement>}/>
        </MusicPlayerLayout>
    )
}

export default MusicPlayer;