import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {Jwt, TokenInfo} from "@/types/TokenInfo";
import Cookies from "js-cookie";
import {refreshJwtRequest} from "@/api/refresh-jwt-request";
import {setJwtToCookies} from "@/utils/utils";
import {UnknownAction} from "redux";
import {setTokenInfo, setTokenStore} from "@/redux/reducers/token-slice";

export const fetchAndRefreshToken = async (
    tokenInfo: MutableRefObject<TokenInfo | null>,
    dispatch: Dispatch<UnknownAction>,
) => {
    let jwt = Cookies.get('jwt');
    let jwtExpiration = Cookies.get('jwtExpiration');
    const refreshToken = Cookies.get('refreshToken');

    if ([jwt, jwtExpiration, refreshToken].some((value) => value === undefined)) {
        dispatch(setTokenStore([false, null]));
        return;
    }

    let tokenData = {
        token: jwt as string,
        expiration: parseInt(jwtExpiration as string),
    };

    if (Date.now() > tokenData.expiration) {
        const response = await refreshJwtRequest(refreshToken as string);
        tokenData = {
            token: response.jwt.token,
            expiration: response.jwt.expiration
        };
        setJwtToCookies(tokenData);
    }

    tokenInfo.current = {
        jwt: tokenData,
        refresh: refreshToken as string
    };

    dispatch(setTokenStore([true, tokenInfo.current]))
};

export const updateJwt = async (tokenInfo: TokenInfo, dispatch: Dispatch<UnknownAction>) => {
    const refreshToken = tokenInfo.refresh;
    const response: { jwt: Jwt } = await refreshJwtRequest(refreshToken);
    setJwtToCookies(response.jwt);
    dispatch(setTokenInfo(response));
    return response.jwt;
};

export const checkIfJWTExpired = (expiration: number) => {
    return Date.now() > expiration
}