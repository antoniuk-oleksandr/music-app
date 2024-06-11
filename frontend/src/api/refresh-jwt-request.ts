import {getIpAddress} from "@/api/ip-address";
import axios from "axios";

export const refreshJwtRequest = async (refreshToken: string) => {
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/tokens/refresh-token`;

    try {
        const response = await axios.post(url, {}, {
            headers: {
                Authorization: `Bearer ${refreshToken}`
            }
        })

        return response.data;
    }
    catch(error){return null}
}