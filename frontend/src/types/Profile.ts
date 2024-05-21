import {User} from "@/types/User";
import {Song} from "@/types/Song";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";

export type Profile = {
    user: User,
    songs: Song[],
    albums: Album[],
    playlist: Playlist[],
}