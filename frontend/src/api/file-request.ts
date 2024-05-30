import axios from "axios";
import {getIpAddress} from "@/api/ip-address";

export const fileRequest = async (filePath: string) => {
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/files/${filePath}`;

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
