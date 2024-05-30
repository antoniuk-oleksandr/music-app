import axios from "axios";
import {SearchTab} from "@/types/SearchTab";
import {getIpAddress} from "@/api/ip-address";

export const searchRequest = async (value: string, limit: number,
                                    offset: number, searchType: SearchTab | string) => {
    searchType = searchType.toLowerCase();
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/search/${searchType}?value=${value}&limit=${limit}&offset=${offset}`;

    try {
        const response = await axios.get(url, {});

        return response.data;
    } catch (error) {
        return null;
    }
}