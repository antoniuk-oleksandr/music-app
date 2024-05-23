import {User} from "@/types/User";

export type Song = {
    id: number,
    name: string,
    duration: number,
    releaseDate: Date,
    songPath: string,
    imagePath: string,
    users: User[]
    src: null | string | BlobPart,
}