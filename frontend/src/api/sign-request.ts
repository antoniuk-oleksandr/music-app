import {getIpAddress} from "@/api/ip-address";
import axios, {AxiosError} from "axios";
import {SignType} from "@/types/SignType";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";

type ErrorType = {
    response: {
        status: number
    }
}

const signInRequest = async (ip: string, body: SignInInputs | SignUpInputs) => {
    const url = `http://${ip}:8080/api/auth/login`;

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

export const getToken = async () => {

}

export const signRequest = async (
    body: SignInInputs | SignUpInputs,
    type: SignType,
) => {
    const ip = getIpAddress();

    switch (type) {
        case SignType.SignIn:
            return await signInRequest(ip, body);
        case SignType.SignUp:

    }
}