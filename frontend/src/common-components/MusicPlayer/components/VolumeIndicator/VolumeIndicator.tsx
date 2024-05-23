import Progressbar from "../Progressbar/Progressbar";
import VolumeIndicatorLayout from "./VolumeIndicatorLayout";
import VolumeIcon from "@/common-components/MusicPlayer/components/VolumeIcon";
import {useVolume} from "@/common-components/MusicPlayer/use-effects/use-volume";
import {useAudio} from "@/common-components/AudioContext";
import {MutableRefObject} from "react";

type VolumeIndicatorProps = {
    volumeBarRef: MutableRefObject<HTMLDivElement | null>
}

const VolumeIndicator = (props: VolumeIndicatorProps) => {
    const {volumeBarRef} = props;
    const {volume, muted} = useVolume();
    const audioElement = useAudio() as HTMLAudioElement;

    const setVolumePercentage = (volume: number) => {
        if (volume <= 0) {
            volume = 0;
            audioElement.muted = true;
            localStorage.setItem("muted", JSON.stringify(true));
        }

        audioElement.volume = volume / 100;
        localStorage.setItem("volume", JSON.stringify(volume / 100));

        if (volume !== 0 && audioElement.muted) {
            audioElement.muted = false;
            localStorage.setItem("muted", JSON.stringify(false));
        }
    }

    return (
        <VolumeIndicatorLayout>
            <VolumeIcon/>
            <Progressbar
                showValueIndicator={false}
                id={'volume-bar'}
                barRef={volumeBarRef}
                setPercentage={(v) => setVolumePercentage(v)}
                rounded
                isCursorShown
                percentage={muted ? 0 : volume * 100}
                width={"w-25"}/>
        </VolumeIndicatorLayout>
    )
}

export default VolumeIndicator;