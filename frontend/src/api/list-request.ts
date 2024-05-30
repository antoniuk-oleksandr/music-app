import {ListType} from "@/types/ListType";
import axios from "axios";
import {getIpAddress} from "@/api/ip-address";

export const listRequest = async (id: number, listType: ListType) => {
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/${listType.toLowerCase()}s/${id}`;

    try {
        const response = await axios(url, {});
        return response.data;
    } catch (error) {
        return null;
    }
}