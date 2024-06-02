import {getIpAddress} from "@/api/ip-address";
import axios, {AxiosError} from "axios";
import {SignType} from "@/types/SignType";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";

type ErrorType = {
    response: {
        status: number
    }
}

export const signRequest = async (
    body: SignInInputs | SignUpInputs,
    type: SignType,
) => {
    const ip = getIpAddress();
    const url = `http://${ip}:8080/api/auth/${type === SignType.SignIn ? 'login' : 'registration'}`;

    try {
        const response = await axios.post(url, body, {});
        return {
            data: response.data,
            status: response.status,
        };
    } catch (error) {
        return {
            data: null,
            status: (error as ErrorType).response.status,
        };
    }
}