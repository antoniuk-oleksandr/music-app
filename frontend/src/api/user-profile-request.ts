import {getIpAddress} from "@/api/ip-address";
import axios from "axios";

export const userProfileRequest = async (jwt: string) => {
    const ip = getIpAddress();

    const url = `http://${ip}:8080/api/profiles/me`;

    try {
        const response = await axios.get(url, {
            headers: {Authorization: `Bearer ${jwt}`},
        });
        return response.data;
    } catch (error) {
        return null;
    }
}