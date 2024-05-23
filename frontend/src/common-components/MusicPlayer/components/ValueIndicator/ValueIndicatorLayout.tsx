import {LayoutProps} from "@/types/LayoutProps";
import {MutableRefObject} from "react";
import {calcIndicatorOffset} from "@/common-components/MusicPlayer/helpers";

type ValueIndicatorLayoutProps = LayoutProps & {
    percentage: number,
    indicatorRef: MutableRefObject<HTMLDivElement | null>,
    barRef: MutableRefObject<HTMLDivElement | null>,
}

const ValueIndicatorLayout = (props: ValueIndicatorLayoutProps) => {
    const {children, percentage, indicatorRef, barRef} = props;

    const leftOffset = calcIndicatorOffset(indicatorRef, barRef, percentage);

    return (
        <div
            ref={indicatorRef}
            style={{left: `${leftOffset}px`}}
            className="absolute z-10 bg-neutral-200 text-sm px-1 py-0.5  -top-[28px]">
            {children}
        </div>
    )
}

export default ValueIndicatorLayout;