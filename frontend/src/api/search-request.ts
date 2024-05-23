import axios from "axios";
import {SearchTab} from "@/types/SearchTab";

export const searchRequest = async (value: string, limit: number,
                                    offset: number, searchType: SearchTab | string) => {
    searchType = searchType.toLowerCase();

    try {
        const url = `http://localhost:8080/api/search/${searchType}?value=${value}&limit=${limit}&offset=${offset}`;
        const response = await axios.get(url, {});
        return response.data;
    } catch (error) {
        return null;
    }
}