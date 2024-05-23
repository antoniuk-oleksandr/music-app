import {useEffect, useRef} from "react";
import {
    handleBarCursorDown,
    handleBarCursorMove,
    handleBarCursorUp
} from "@/common-components/MusicPlayer/cusor-dragging-handlers";
import {BarObject} from "@/types/BarObject";
import {changeCurrentTime, changeVolume, InitBarObjects} from "@/common-components/MusicPlayer/helpers";

export const useBarDragging = (audioElement: HTMLAudioElement) => {
    const barObjects: BarObject[] = InitBarObjects();
    const listenersInitialized = useRef<boolean>(false);

    useEffect(() => {
        if(listenersInitialized.current) return;
        if (Object.values(barObjects).find((v) => v.htmlObjectRef.current === null)) return;

        document.addEventListener("mousemove", (e) =>
            handleBarCursorMove(e, audioElement, barObjects));
        document.addEventListener("mousedown", (e) =>
            handleBarCursorDown(e, barObjects));
        document.addEventListener("mouseup", () =>
            handleBarCursorUp(barObjects));

        listenersInitialized.current = true;

        return () => {
            document.removeEventListener("mousemove", (e) =>
                handleBarCursorMove(e, audioElement, barObjects));
            document.removeEventListener("mousedown", (e) =>
                handleBarCursorDown(e, barObjects));
            document.removeEventListener("mouseup", () =>
                handleBarCursorUp(barObjects));
        }
    }, [barObjects]);

    return barObjects;
}