import {useEffect, useRef} from "react";
import {TokenInfo} from "@/types/TokenInfo";
import {fetchAndRefreshToken} from "@/utils/jwt-utils";
import {useDispatch, useSelector} from "react-redux";

export const useTokens = () => {
    const tokenInfo = useRef<null | TokenInfo>(null);
    const dispatch = useDispatch();
    const tokenStatus = useSelector((state: any) => state.token);

    useEffect(() => {
        fetchAndRefreshToken(tokenInfo, dispatch);
    }, []);

    return tokenStatus;
};

