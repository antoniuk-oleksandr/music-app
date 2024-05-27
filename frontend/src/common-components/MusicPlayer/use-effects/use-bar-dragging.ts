import {useEffect, useRef} from "react";
import {
    handleBarCursorDown,
    handleBarCursorMove,
    handleBarCursorUp
} from "@/common-components/MusicPlayer/cusor-dragging-handlers";
import {BarObject} from "@/types/BarObject";
import {InitBarObjects} from "@/common-components/MusicPlayer/helpers";

export const useBarDragging = (audioElement: HTMLAudioElement) => {
    const barObjects: BarObject[] = InitBarObjects();
    const listenersInitialized = useRef<boolean>(false);

    const handleMouseMove = (e: MouseEvent) => handleBarCursorMove(e, audioElement, barObjects);

    useEffect(() => {
        if (listenersInitialized.current) return;
        if (Object.values(barObjects).find((v) => v.htmlObjectRef.current === null)) return;

        document.addEventListener("mousemove", handleMouseMove);
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