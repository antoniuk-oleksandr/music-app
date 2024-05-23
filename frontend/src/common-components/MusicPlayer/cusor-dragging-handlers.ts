import {BarObject} from "@/types/BarObject";

export const handleBarCursorMove = (e: MouseEvent,
                                    audioElement: HTMLAudioElement,
                                    barObjects: BarObject[]) => {
    const {clientX} = e;

    Object.values(barObjects).forEach((v) => {
        const {x, width} = (v.htmlObjectRef.current as HTMLDivElement).getBoundingClientRect();
        if (v.mouseDownRef.current) v.changeFunc(audioElement, clientX, x, width);
    })
}

export const handleBarCursorDown = (e: MouseEvent, barObjects: BarObject[]) => {
    const target = e.target as HTMLElement;

    Object.values(barObjects).forEach((v) => {
        if (target.id === v.id) v.mouseDownRef.current = true;
    })

}

export const handleBarCursorUp = (barObjects: BarObject[]) => {
    Object.values(barObjects).forEach((v) => {
        v.mouseDownRef.current = false;
    })
}