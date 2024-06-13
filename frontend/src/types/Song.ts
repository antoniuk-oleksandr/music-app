import {User} from "@/types/User";
import {Album} from "@/types/Album";

export type Song = {
    id: number,
    name: string,
    duration: number,
    releaseDate: string,
    songPath: string,
    imagePath: string,
    users: User[]
    album: Album,
}