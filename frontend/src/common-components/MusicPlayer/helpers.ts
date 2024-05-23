import {BarObject} from "@/types/BarObject";
import {MutableRefObject, useRef} from "react";

export const formatTime = (time: number) => {
    time = Math.round(time);
    const minutes = Math.floor((time / 60));
    const seconds = Math.round((time % 60));

    return `${minutes}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

export const changeCurrentTime = (audioElement: HTMLAudioElement, clientX: number,
                                  x: number, width: number) => {
    const newTime = audioElement.duration * (clientX - x) / width;

    if (newTime <= 0) audioElement.currentTime = 0;
    else if (newTime >= audioElement.duration) console.log("over");
    else audioElement.currentTime = newTime;
}

export const setVolume = (volume: number, audioElement: HTMLAudioElement) => {
    audioElement.volume = volume;
    localStorage.setItem("volume", JSON.stringify(volume));

    if (volume > 0 && audioElement.muted) {
        audioElement.muted = false;
        localStorage.setItem("muted", JSON.stringify(false));
    } else if (volume <= 0) {
        audioElement.muted = true;
        localStorage.setItem("muted", JSON.stringify(true));
    }
}

export const changeVolume = (audioElement: HTMLAudioElement, clientX: number,
                             x: number, width: number) => {
    const newVolume = (clientX - x) / width;

    if (newVolume <= 0) setVolume(0, audioElement);
    else if (newVolume >= 1) setVolume(1, audioElement);
    else setVolume(newVolume, audioElement);
}

export const InitBarObjects = (): BarObject[] => [
    {
        htmlObjectRef: useRef<HTMLDivElement | null>(null),
        mouseDownRef: useRef(false),
        changeFunc: changeCurrentTime,
        id: 'timeline',
    },
    {
        htmlObjectRef: useRef<HTMLDivElement | null>(null),
        mouseDownRef: useRef(false),
        changeFunc: changeVolume,
        id: 'volume-bar'
    }
];

export const calcIndicatorOffset = (indicatorRef: MutableRefObject<HTMLDivElement | null>,
                                    barRef: MutableRefObject<HTMLDivElement | null>,
                                    percentage: number) => {
    if (!indicatorRef.current || !barRef.current) return -1000;

    const indicatorWidth = Math.round(indicatorRef.current.getBoundingClientRect().width);
    const barWidth = Math.round(barRef.current.getBoundingClientRect().width);

    let leftOffset = Math.round((barWidth * percentage) / 100 - indicatorWidth / 2);

    const minOffset = 12;
    const maxOffset = barWidth - minOffset - indicatorWidth;

    if (leftOffset < minOffset) leftOffset = minOffset;
    if (leftOffset > maxOffset) leftOffset = maxOffset;

    return leftOffset;
}
