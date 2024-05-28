import axios from "axios";

export const profileRequest = async (id: number) => {
    const url = `http://localhost:8080/api/profiles/${id}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return null;
    }
}