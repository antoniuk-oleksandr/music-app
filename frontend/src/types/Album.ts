import {User} from "@/types/User";

export type Album = {
    id: number,
    name: string,
    imagePath: string,
    creatingDate: number,
    user: User
}