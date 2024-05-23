import Cursor from "@/common-components/MusicPlayer/components/Cursor";
import ProgressbarLayout from "@/common-components/MusicPlayer/components/Progressbar/ProgressbarLayout";
import BackBar from "@/common-components/MusicPlayer/components/Progressbar/BackBar";
import TopBar from "@/common-components/MusicPlayer/components/Progressbar/TopBar";
import {MutableRefObject} from "react";

type ProgressbarProps = {
    percentage: number,
    isCursorShown: boolean,
    width: string,
    rounded: boolean,
    setPercentage: (percentage: number) => void,
    id: string,
    barRef: MutableRefObject<HTMLDivElement | null>,
    showValueIndicator: boolean,
}

const Progressbar = (props: ProgressbarProps) => {
    const {percentage, isCursorShown, width, rounded, setPercentage, id, barRef, showValueIndicator} = props;

    return (
        <ProgressbarLayout width={width}>
            <Cursor percentage={percentage} isShown={isCursorShown}/>
            <BackBar
                showValueIndicator={showValueIndicator}
                barRef={barRef}
                id={id}
                rounded={rounded}
                setPercentage={setPercentage}/>
            <TopBar rounded={rounded} percentage={percentage}/>
        </ProgressbarLayout>
    )
}

export default Progressbar;