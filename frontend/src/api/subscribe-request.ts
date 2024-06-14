import {getIpAddress} from "@/api/ip-address";
import axios from "axios";

export const subscribeRequest = async (userId: number, token: string, unSub: boolean) => {
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/subscribe/${userId}`;

    try {
        if (unSub) await axios.delete(url, {
            headers: {'Authorization': `Bearer ${token}`}
        });
        else await axios[unSub ? 'delete' : 'post'](url, unSub ? undefined : {}, {
            headers: {'Authorization': `Bearer ${token}`}
        });
    } catch (error) {
        console.error(error);
    }
}