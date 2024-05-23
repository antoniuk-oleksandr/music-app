import TimeIndicatorLayout from "./TimeIndicatorLayout";
import {formatTime} from "@/common-components/MusicPlayer/helpers";
import {useAudio} from "@/utils/AudioContext";
import {useSelector} from "react-redux";
import {Song} from "@/types/Song";

const TimeIndicator = () => {
    let {currentTime, duration} = useAudio() as HTMLAudioElement;
    const song: Song = useSelector(state => (state as any).musicPlayer.song);

    if (Number.isNaN(duration)) duration = song.duration;

    return (
        <TimeIndicatorLayout>
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
        </TimeIndicatorLayout>
    )
}

export default TimeIndicator;