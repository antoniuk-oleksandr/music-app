import {MutableRefObject} from "react";

export type BarObject = {
    htmlObjectRef: MutableRefObject<HTMLDivElement | null>,
    mouseDownRef: MutableRefObject<boolean>,
    changeFunc: (audioElement: HTMLAudioElement, clientX: number,
                 x: number, width: number) => void
    id: string,
}