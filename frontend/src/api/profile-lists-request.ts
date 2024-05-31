import {getIpAddress} from "@/api/ip-address";
import axios from "axios";
import {SearchTab} from "@/types/SearchTab";

export const profileListsRequest = async (id: number, type: SearchTab, limit: number, offset: number) => {
    const ip = getIpAddress();
    const loweredType = type.toLowerCase();
    const url = `http://${ip}:8080/api/profiles/${id}/${loweredType}?limit=${limit}&offset=${offset}`;

    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        return null;
    }
}