import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {Jwt, TokenInfo} from "@/types/TokenInfo";
import Cookies from "js-cookie";
import {refreshJwtRequest} from "@/api/refresh-jwt-request";
import {setJwtToCookies} from "@/utils/utils";
import {UnknownAction} from "redux";
import {setTokenStore} from "@/redux/reducers/token-slice";

export const scheduleJwtUpdate = (
    tokenInfo: MutableRefObject<TokenInfo | null>,
    dispatch: Dispatch<UnknownAction>,
) => {
    if (!tokenInfo.current) return;

    const timeoutId = setTimeout(() => {
        updateJwt(tokenInfo).then(() => {
            dispatch(setTokenStore([true, tokenInfo.current]));
        });
    }, calcTime(tokenInfo.current.jwt.expiration));

    return () => clearTimeout(timeoutId);
}

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

const calcTime = (expiration: number) => {
    const time = expiration - Date.now() - 5000;
    return time < 0 ? 0 : time;
};

const updateJwt = async (tokenInfo: MutableRefObject<null | TokenInfo>) => {
    if (!tokenInfo.current) return;

    const refreshToken = tokenInfo.current.refresh;
    const response: { jwt: Jwt } = await refreshJwtRequest(refreshToken);
    tokenInfo.current = {
        jwt: response.jwt,
        refresh: tokenInfo.current.refresh,
    };
    setJwtToCookies(response.jwt);
};