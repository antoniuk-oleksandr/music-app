import { getIpAddress } from "@/api/ip-address";
import { CreateSongType } from "@/types/CreateSongType";
import axios from "axios";

export const createSongRequest = async (
    songAudioFile: File,
    songCoverFile: File,
    songData: CreateSongType,
    jwt: string
) => {
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/songs/create`;

    console.log(songAudioFile);

    const formData = new FormData();
    formData.append('mp3', songAudioFile);
    formData.append('picture', songCoverFile);
    formData.append('songData', new Blob([JSON.stringify(songData)], { type: 'application/json' }));

    try {
        const response = await axios.post(url, formData, {
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.status;
    } catch (error) {
        console.error(error);
        return null;
    }
}
