import {getIpAddress} from "@/api/ip-address";
import axios from "axios";
import {Profile} from "@/types/Profile";
import {formatListDates} from "@/utils/utils";

export const userProfileRequest = async (jwt: string) => {
    const ip = getIpAddress();

    const url = `http://${ip}:8080/api/profiles/me`;

    try {
        const response = await axios.get(url, {
            headers: {Authorization: `Bearer ${jwt}`},
        });

        let data: Profile = response.data;
        data.playlists = formatListDates(data.playlists);

        return data;
    } catch (error) {
        return null;
    }
}