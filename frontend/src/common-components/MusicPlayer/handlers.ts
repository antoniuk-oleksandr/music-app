import React, {Dispatch, SetStateAction} from "react";
import {Repeat} from "@/types/Repeat";
import {UnknownAction} from "redux";
import {changeQueueSong, setRepeat} from "@/redux/reducers/music-player-slice";
import {MusicPlayerType} from "@/types/MusicPlayerType";

export const handlePlayButtonClick = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    audioElement: HTMLAudioElement | null
) => {
    const id = e.currentTarget.id;
    if (id === 'play-button') audioElement?.play();
    else audioElement?.pause();
}

export const handleVolumeButtonClick = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    audioElement: HTMLAudioElement | null
) => {
    if (!audioElement) return;

    const id = e.currentTarget.id;
    const isVolumeOff = id === 'volume-off-button';
    audioElement.muted = isVolumeOff;
    localStorage.setItem("muted", JSON.stringify(isVolumeOff));
}

export const handleProgressbarClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    setPercentage: (value: number) => void
) => {
    const {clientX} = e;
    const {x, width} = e.currentTarget.getBoundingClientRect();

    const percentage = (clientX - x) / width * 100;
    setPercentage(percentage);
}

export const handleMouseOverValueIndicator = (
    e: React.MouseEvent,
    setPercentage: Dispatch<SetStateAction<number>>,
    showValueIndicator: boolean
) => {
    if (!showValueIndicator) return;

    const {clientX} = e;
    const {x, width} = e.currentTarget.getBoundingClientRect();
    setPercentage((clientX - x) / width * 100);
}

export const handleRepeatButtonClick = (dispatch: Dispatch<UnknownAction>, repeat: Repeat) => {
    if (!repeat) return null;

    const nextState = {
        [Repeat.None]: Repeat.Queue,
        [Repeat.Queue]: Repeat.Song,
        [Repeat.Song]: Repeat.None
    }[repeat];

    localStorage.setItem("repeat", JSON.stringify(nextState));
    dispatch(setRepeat(nextState));
};

export const updateTime = (
    audioElement: HTMLAudioElement,
    setPercentage: Dispatch<SetStateAction<number>>
) => {
    const percentageValue = audioElement.currentTime / audioElement.duration * 100;
    setPercentage(percentageValue);
}

const resetSong = (audioElement: HTMLAudioElement) => {
    audioElement.currentTime = 0;
    audioElement.play();
}

export const handleNextTrack = (
    audioElement: HTMLAudioElement,
    dispatch: Dispatch<UnknownAction>,
    musicPlayer: MusicPlayerType
) => {
    const {songIndex, songQueue, repeat, song} = musicPlayer;

    if (!repeat) return;

    if (repeat === Repeat.Song) resetSong(audioElement);
    else if (songIndex + 1 >= songQueue.length) {
        if (repeat === Repeat.Queue) {
            audioElement.src = songQueue[0].songPath;
            dispatch(changeQueueSong(0));
            resetSong(audioElement);
        }
    } else {
        audioElement.src = songQueue[songIndex + 1].songPath;
        dispatch(changeQueueSong(songIndex + 1));
        resetSong(audioElement);
    }
};

export const handlePrevTrack = (
    audioElement: HTMLAudioElement,
    dispatch: Dispatch<UnknownAction>,
    musicPlayer: MusicPlayerType
) => {
    const {songIndex, songQueue, repeat} = musicPlayer;

    if (!repeat) return;

    if (songIndex === 0) resetSong(audioElement);
    else {
        audioElement.src = songQueue[songIndex - 1].songPath;
        dispatch(changeQueueSong(songIndex - 1));
        resetSong(audioElement);
    }
}