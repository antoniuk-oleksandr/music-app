import {User} from "@/types/User";
import {Song} from "@/types/Song";

export type Album = {
    id: number,
    name: string,
    imagePath: string,
    creatingDate: string,
    creator: User,
    songs: Song[],
}