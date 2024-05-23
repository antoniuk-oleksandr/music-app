import {Song} from "@/types/Song";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";

export type SearchResult = {
    songs: Song[],
    users: User[],
    profiles: User[],
    artists: Album[],
    albums: Album[],
    playlist: Playlist[],
}