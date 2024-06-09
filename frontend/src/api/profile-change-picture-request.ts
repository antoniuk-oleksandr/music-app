import axios from 'axios';
import { getIpAddress } from "@/api/ip-address";

export const profileChangePictureRequest = async (
    type: 'banner' | 'avatar',
    file: File,
    jwt: string
) => {
    try {
        const ip = await getIpAddress();
        const url = `http://${ip}:8080/api/profiles/update/${type}`;

        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.patch(url, formData, {
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.status;  // Assuming your endpoint returns data
    } catch (error) {
        return null;
    }
};
