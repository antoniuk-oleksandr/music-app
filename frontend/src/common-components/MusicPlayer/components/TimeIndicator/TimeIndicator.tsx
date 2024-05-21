import TimeIndicatorLayout from "./TimeIndicatorLayout";
import {formatTime} from "@/common-components/MusicPlayer/helpers";

type TimeIndicatorProps = {
    currentTime: number;
    duration: number;
}

const TimeIndicator = (props: TimeIndicatorProps) => {
    const { currentTime, duration } = props;

    return (
        <TimeIndicatorLayout>
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
        </TimeIndicatorLayout>
    )
}

export default TimeIndicator;