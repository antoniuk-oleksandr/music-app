import axios from "axios";

export const fileRequest = async (filePath: string) => {
    const url = `http://localhost:8080/api/files/${filePath}`;

    try {
        const response = await axios.get(url, {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/octet-stream',
            }
        });

        return response.data;
    } catch (error) {
        return null;
    }
}
