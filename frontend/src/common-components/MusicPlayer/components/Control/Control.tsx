import ControlLayout from "./ControlLayout";
import SongInfo from "@/common-components/MusicPlayer/components/SongInfo/SongInfo";
import PlayController from "@/common-components/MusicPlayer/components/Play/PlayController";
import Indicators from "@/common-components/MusicPlayer/components/Indicators/Indicators";
import {MutableRefObject} from "react";

type ControlProps = {
    volumeBarRef: MutableRefObject<HTMLDivElement | null>
}

const Control = (props: ControlProps) => {
    const {volumeBarRef} = props;

    return (
        <ControlLayout>
            <SongInfo/>
            <PlayController/>
            <Indicators volumeBarRef={volumeBarRef}/>
        </ControlLayout>
    )
}

export default Control;