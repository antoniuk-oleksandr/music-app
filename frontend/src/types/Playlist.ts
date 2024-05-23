import {User} from "@/types/User";

export type Playlist = {
    id: number,
    isPublic: boolean,
    creatingDate: Date,
    name: string,
    imagePath: string,
    user: User
}