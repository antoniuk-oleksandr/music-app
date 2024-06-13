import {User} from "@/types/User";
import {Song} from "@/types/Song";

export type Playlist = {
    id: number,
    isPublic: boolean,
    creatingDate: string,
    name: string,
    imagePath: string,
    creator: User,
    songs: Song[],
}