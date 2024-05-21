import ControlLayout from "./ControlLayout";
import SongInfo from "@/common-components/MusicPlayer/components/SongInfo/SongInfo";
import Play from "@/common-components/MusicPlayer/components/Play/Play";
import Indicators from "@/common-components/MusicPlayer/components/Indicators/Indicators";

const Control = () => {
    return (
        <ControlLayout>
            <SongInfo/>
            <Play isStopped={true}/>
            <Indicators/>
        </ControlLayout>
    )
}

export default Control;