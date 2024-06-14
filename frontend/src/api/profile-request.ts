import axios from "axios";
import {getIpAddress} from "@/api/ip-address";

export const profileRequest = async (id: number, token?: string) => {
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/profiles/${id}`;

    try {
        const response = await axios.get(url, token !== undefined ?
            {headers: {Authorization: `Bearer ${token}`}}
            : undefined
        );

        return response.data;
    } catch (error) {
        return null;
    }
}