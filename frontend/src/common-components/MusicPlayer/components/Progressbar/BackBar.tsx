import {handleMouseOverValueIndicator, handleProgressbarClick} from "@/common-components/MusicPlayer/handlers";
import {MutableRefObject, useState} from "react";
import ValueIndicator from "@/common-components/MusicPlayer/components/ValueIndicator/ValueIndicator";
import BackBarLayout from "@/common-components/MusicPlayer/components/Progressbar/BackBarLayout";

type BackBarProps = {
    rounded: boolean,
    setPercentage: (value: number) => void,
    id: string,
    barRef: MutableRefObject<HTMLDivElement | null>,
    showValueIndicator: boolean,
}

const BackBar = (props: BackBarProps) => {
    const {rounded, setPercentage, id, barRef, showValueIndicator} = props;
    const [indicatorPercentage, setIndicatorPercentage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <BackBarLayout rounded={rounded}>
            <ValueIndicator
                barRef={barRef}
                percentage={indicatorPercentage}
                showValueIndicator={showValueIndicator}
                isHovered={isHovered}
            />
            <div
                ref={barRef}
                id={id}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                onMouseMove={(e) => handleMouseOverValueIndicator(e, setIndicatorPercentage, showValueIndicator)}
                onClick={(e) => handleProgressbarClick(e, setPercentage)}
                className={"w-full h-full py-4 absolute -bottom-[14px] cursor-pointer z-10"}
            ></div>
        </BackBarLayout>
    )
}

export default BackBar;