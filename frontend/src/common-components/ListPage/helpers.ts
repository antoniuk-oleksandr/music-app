import {Song} from "@/types/Song";

export const getSongsNumberString = (songs: Song[]) => {
    if (songs.length === 1) return '1 song';
    else return `${songs.length} songs`
}

export const getSongsDuration = (songs: Song[]) => {
    const totalDuration = songs.reduce((ac, song) => ac + song.duration, 0);

    const hours = Math.floor(totalDuration / 3600);
    const minutes = Math.floor((totalDuration % 3600) / 60);
    const seconds = totalDuration % 60;

    const parts = [
        hours > 0 ? `${hours} hour${hours === 1 ? '' : 's'}` : '',
        minutes > 0 ? `${minutes} minute${minutes === 1 ? '' : 's'}` : '',
        seconds > 0 ? `${seconds} second${seconds === 1 ? '' : 's'}` : ''
    ];

    return parts.filter(Boolean).join(', ');
};
