import {getIpAddress} from "@/api/ip-address";
import axios from "axios";
import {SignType} from "@/types/SignType";
import {SignInInputs, SignUpInputs} from "@/types/SignInInputs";

type ErrorType = {
    response: {
        status: number
    }
}

const signInUpRequest = async (
    ip: string,
    body: SignInInputs | SignUpInputs,
    type: SignType,
) => {
    const endpoint = type === SignType.SignIn ? 'login' : 'registration-request';
    const url = `http://${ip}:8080/api/auth/${endpoint}`;

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

export const confirmCodeRequest = async (ip: string, body: SignUpInputs, digits: number[]) => {
    const url = `http://${ip}:8080/api/auth/registration-confirm`;
    const code = digits.join('');

    try {
        const response = await axios.post(url, {...body, code}, {});
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

export const signRequest = async (
    body: SignInInputs | SignUpInputs,
    type: SignType,
    digits?: number[],
) => {
    const ip = getIpAddress();

    switch (type) {
        case SignType.SignIn:
        case SignType.SignUp:
            return await signInUpRequest(ip, body, type);
        case SignType.Verification:
            return await confirmCodeRequest(ip, body as SignUpInputs, digits as number[]);
    }
}