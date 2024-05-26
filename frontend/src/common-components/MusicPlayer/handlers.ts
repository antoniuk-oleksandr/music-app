import React, {Dispatch, SetStateAction} from "react";
import {Repeat} from "@/types/Repeat";
import {UnknownAction} from "redux";
import {nextSong, setRepeat} from "@/redux/reducers/music-player-slice";
import {MusicPlayerType} from "@/types/MusicPlayerType";

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

export const handleRepeatButtonClick = (dispatch: Dispatch<UnknownAction>, repeat: Repeat) => {
    if (!repeat) return null;

    const nextState = {
        [Repeat.None]: Repeat.Queue,
        [Repeat.Queue]: Repeat.Track,
        [Repeat.Track]: Repeat.None
    }[repeat];

    localStorage.setItem("repeat", JSON.stringify(nextState));
    dispatch(setRepeat(nextState));
};

export const updateTime = (audioElement: HTMLAudioElement,
                           setPercentage: Dispatch<SetStateAction<number>>) => {
    const percentageValue = audioElement.currentTime / audioElement.duration * 100;
    setPercentage(percentageValue);
}

export const handleSongEnd = (audioElement: HTMLAudioElement,
                              dispatch: Dispatch<UnknownAction>,
                              musicPlayer: MusicPlayerType) => {
    const {song, songIndex, songQueue, repeat} = musicPlayer;

    if (!repeat) return;

    if (repeat !== Repeat.Track) dispatch(nextSong());
    audioElement.currentTime = 0;
    audioElement.play();
}