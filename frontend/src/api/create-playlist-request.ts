import {getIpAddress} from "@/api/ip-address";
import axios from "axios";

type RequestBody = {
    name: string,
    isPublic: boolean,
}

export const createPlaylistRequest = async (token: string, body: RequestBody) => {
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/playlists/create`;

    try {
        const response = await axios.post(url, body,
            {headers: {'Authorization': `Bearer ${token}`}});
        return response.data;
    } catch (error) {
        return {
            id: null,
        }
    }
}