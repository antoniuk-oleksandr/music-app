import Progressbar from "../Progressbar/Progressbar";
import VolumeIndicatorLayout from "./VolumeIndicatorLayout";
import {IoVolumeHigh, IoVolumeMute} from "react-icons/io5";

type VolumeIndicatorProps = {
    volume: number;
    isMuted: boolean;
}

const VolumeIndicator = (props: VolumeIndicatorProps) => {
    const {volume, isMuted} = props;

    return (
        <VolumeIndicatorLayout>
            {isMuted ?
                <IoVolumeMute className={"text-2xl"}/> : <IoVolumeHigh className={"text-2xl"}/>
            }
            <Progressbar
                rounded
                isCursorShown
                percentage={volume * 100}
                width={"w-25"}/>
        </VolumeIndicatorLayout>
    )
}

export default VolumeIndicator;