import IndicatorsLayout from "./IndicatorsLayout";
import TimeIndicator from "@/common-components/MusicPlayer/components/TimeIndicator/TimeIndicator";
import VolumeIndicator from "@/common-components/MusicPlayer/components/VolumeIndicator/VolumeIndicator";

const Indicators = () => {
    return (
        <IndicatorsLayout>
            <TimeIndicator currentTime={69} duration={315}/>
            <VolumeIndicator volume={0.7} isMuted={false}/>
        </IndicatorsLayout>
    )
}

export default Indicators;