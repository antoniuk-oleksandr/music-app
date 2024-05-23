import axios from "axios";

export const searchRequest = async (value: string, limit: number, offset: number) => {
    try {
        const url = `http://localhost:8080/api/search?value=${value}&limit=${limit}&offset=${offset}`;
        const response = await axios.get(url, {});
        return response.data;
    } catch (error) {
        return null;
    }
}