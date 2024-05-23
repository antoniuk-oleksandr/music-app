import IndicatorsLayout from "./IndicatorsLayout";
import TimeIndicator from "@/common-components/MusicPlayer/components/TimeIndicator/TimeIndicator";
import VolumeIndicator from "@/common-components/MusicPlayer/components/VolumeIndicator/VolumeIndicator";
import {MutableRefObject} from "react";

type IndicatorsProps = {
    volumeBarRef: MutableRefObject<HTMLDivElement | null>
}

const Indicators = (props: IndicatorsProps) => {
    const {volumeBarRef} = props;

    return (
        <IndicatorsLayout>
            <TimeIndicator/>
            <VolumeIndicator volumeBarRef={volumeBarRef}/>
        </IndicatorsLayout>
    )
}

export default Indicators;