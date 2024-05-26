import {Song} from "@/types/Song";
import {Repeat} from "@/types/Repeat";

export type MusicPlayerType = {
    song: null | Song,
    songQueue: Song[],
    repeat: null | Repeat,
    songIndex: number,
}