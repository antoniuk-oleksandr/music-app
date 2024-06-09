import {useEffect, useRef} from "react";
import {TokenInfo} from "@/types/TokenInfo";
import {fetchAndRefreshToken, scheduleJwtUpdate} from "@/utils/jwt-utils";
import {useDispatch, useSelector} from "react-redux";

export const useTokens = () => {
    const tokenInfo = useRef<null | TokenInfo>(null);
    const first = useRef(true);
    const dispatch = useDispatch();
    const tokenStatus = useSelector((state: any) => state.token);

    useEffect(() => {
        fetchAndRefreshToken(tokenInfo, dispatch);
    }, []);

    useEffect(() => {
        if(first.current) {
            first.current = false;
            return;
        }
        scheduleJwtUpdate(tokenInfo, dispatch);
    }, [tokenStatus]);

    return tokenStatus;
};

