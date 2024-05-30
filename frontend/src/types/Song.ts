import {User} from "@/types/User";
import {Album} from "@/types/Album";

export type Song = {
    id: number,
    name: string,
    duration: number,
    releaseDate: number,
    songPath: string,
    imagePath: string,
    users: User[]
    album: Album,
}