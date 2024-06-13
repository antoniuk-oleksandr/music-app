import {Album} from "@/types/Album";
import {User} from "@/types/User";

export type CreateSongType = {
    name: string,
    duration: number,
    releaseDate: Date | string,
    songPath: string,
    imagePath: string,
    album: Album | null,
    users: User[],
    id?: number,
}