import {getIpAddress} from "@/api/ip-address";
import axios from "axios";
import {SignType} from "@/types/SignType";

type singInRequestBody = {
    username: string,
    password: string,
    email?: string,
}

export const singRequest = async (
    body: singInRequestBody,
    type: SignType,
) => {
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/auth/${type === SignType.SignIn ? 'login' : 'register'}`;

    try {
        const response = await axios.post(url, body, {})

        console.log(response.data);

        return response.data;
    } catch (error) {
        return null;
    }
}