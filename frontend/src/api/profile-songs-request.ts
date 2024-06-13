import {getIpAddress} from "@/api/ip-address";
import axios from "axios";
import {SearchTab} from "@/types/SearchTab";
import {Playlist} from "@/types/Playlist";
import {Album} from "@/types/Album";
import {Song} from "@/types/Song";

export const profileSongsRequest = async (id: number, limit: number, offset: number) => {
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/profiles/${id}/songs?limit=${limit}&offset=${offset}`;

    try {
        const response = await axios.get(url);
        const data = {...response.data};

        return {
            ...data,
            songs: (data.songs as Song[]).map((song) => ({
                ...song,
                creatingDate: song.releaseDate.toString(),
            }))
        };
    } catch (error) {
        return null;
    }
}