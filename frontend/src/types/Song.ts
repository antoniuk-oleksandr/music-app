import {User} from "@/types/User";

export type Song = {
    id: number,
    name: string,
    duration: number,
    releaseDate: number,
    songPath: string,
    imagePath: string,
    users: User[]
}