import {getIpAddress} from "@/api/ip-address";
import axios from "axios";

export const addSongToPlaylist = async (playlistId: number, songId: number, token: string) => {
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/playlists/${playlistId}?songId=${songId}`;

    try {
        await axios.post(url, {}, {headers: {Authorization: `Bearer ${token}`}});
    } catch (error) {
        console.error(error);
    }
}