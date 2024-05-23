import React, {Dispatch, SetStateAction} from "react";

export const handlePlayButtonClick = (e: React.MouseEvent<SVGElement, MouseEvent>,
                                      audioElement: HTMLAudioElement | null) => {
    const id = e.currentTarget.id;

    if (id === 'play-button') {
        audioElement?.play();
    } else {
        audioElement?.pause();
    }
}

export const handleVolumeButtonClick = (e: React.MouseEvent<SVGElement, MouseEvent>,
                                        audioElement: HTMLAudioElement | null) => {
    if (!audioElement) return;

    const id = e.currentTarget.id;

    if (id === 'volume-off-button') {
        audioElement.muted = true;
        localStorage.setItem("muted", JSON.stringify(true));
    } else {
        audioElement.muted = false;
        localStorage.setItem("muted", JSON.stringify(false));
    }
}

export const handleProgressbarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,
                                       setPercentage: (value: number) => void) => {
    const {clientX} = e;
    const {x, width} = e.currentTarget.getBoundingClientRect();

    const percentage = (clientX - x) / width * 100;

    setPercentage(percentage);
}

export const handleMouseOverValueIndicator = (e: React.MouseEvent,
                                              setPercentage: Dispatch<SetStateAction<number>>,
                                              showValueIndicator: boolean) => {
    if (!showValueIndicator) return;

    const {clientX} = e;
    const {x, width} = e.currentTarget.getBoundingClientRect();

    setPercentage((clientX - x) / width * 100);
}