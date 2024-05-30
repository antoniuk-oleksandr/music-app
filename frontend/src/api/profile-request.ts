import axios from "axios";
import {getIpAddress} from "@/api/ip-address";

export const profileRequest = async (id: number) => {
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/profiles/${id}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return null;
    }
}