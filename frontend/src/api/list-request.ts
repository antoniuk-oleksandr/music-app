import {ListType} from "@/types/ListType";
import axios from "axios";

export const listRequest = async (id: number, listType: ListType) => {
    const url = `http://localhost:8080/api/${listType.toLowerCase()}s/${id}`;

    try {
        const response = await axios(url, {});
        return response.data;
    } catch (error) {
        return null;
    }
}