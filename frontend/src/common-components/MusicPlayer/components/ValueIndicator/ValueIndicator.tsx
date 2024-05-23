import ValueIndicatorLayout from "./ValueIndicatorLayout";
import {formatTime} from "@/common-components/MusicPlayer/helpers";
import {useAudio} from "@/utils/AudioContext";
import {MutableRefObject, useRef} from "react";

type ValueIndicatorProps = {
    showValueIndicator: boolean,
    percentage: number,
    isHovered: boolean,
    barRef: MutableRefObject<HTMLDivElement | null>,
}

const ValueIndicator = (props: ValueIndicatorProps) => {
    const {showValueIndicator, percentage, isHovered, barRef} = props;
    const audioElement = useAudio() as HTMLAudioElement;
    const indicatorRef = useRef<HTMLDivElement | null>(null);

    if (!showValueIndicator || !isHovered) return null;
    return (
        <ValueIndicatorLayout
            barRef={barRef}
            indicatorRef={indicatorRef}
            percentage={percentage}>
            <span>{formatTime(audioElement.duration * percentage / 100)}</span>
        </ValueIndicatorLayout>
    )
}

export default ValueIndicator;