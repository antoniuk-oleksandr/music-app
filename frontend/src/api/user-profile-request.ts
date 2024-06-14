import {getIpAddress} from "@/api/ip-address";
import axios from "axios";
import {Profile} from "@/types/Profile";
import {formatListDates} from "@/utils/utils";
import {Playlist} from "@/types/Playlist";
import {Album} from "@/types/Album";

export const userProfileRequest = async (jwt: string) => {
    const ip = getIpAddress();

    const url = `http://${ip}:8080/api/profiles/me`;

    try {
        const response = await axios.get(url, {
            headers: {Authorization: `Bearer ${jwt}`},
        });

        let data: Profile = response.data as Profile;
        data.playlists = formatListDates(data.playlists) as Playlist[];

        return data;
    } catch (error) {
        return null;
    }
}