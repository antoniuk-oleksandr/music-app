import React, {Dispatch, MutableRefObject} from "react";
import {NextRouter} from "next/router";
import {SearchTab} from "@/types/SearchTab";
import {subscribeRequest} from "@/api/subscribe-request";
import {TokenInfo} from "@/types/TokenInfo";
import {checkIfJWTExpired, updateJwt} from "@/utils/jwt-utils";
import {UnknownAction} from "redux";
import {profileSubscribeSignal} from "@/pages/profile/[id]/signals/profile-subscribe-signal";
import {showDialog} from "@/utils/utils";
import {User} from "@/types/User";

export const handleProfileAlbumClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ref: MutableRefObject<HTMLButtonElement | null>,
    router: NextRouter,
    type: SearchTab,
    id: number,
) => {
    if (!ref.current) return null;

    if (!ref.current.contains(e.target as Node)) {
        const formattedType = type.toLowerCase().slice(0, type.length - 1);
        router.push(`/${formattedType}/${id}`);
    }
}

export const handleSubscribeButtonClick = async (
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
    isSubscribed: boolean,
    user: User,
    dialogIds: any[],
) => {
    let {token, expiration} = tokenInfo.jwt;
    if (checkIfJWTExpired(expiration)) {
        ({token} = await updateJwt(tokenInfo, dispatch));
    }

    await subscribeRequest(user.id, token, isSubscribed);
    profileSubscribeSignal.value = !isSubscribed;
    const text = (!isSubscribed ? 'Subscribed to '  : 'Unsubscribed from ') + user.username;
    showDialog(dispatch, text, 'neutral-800', dialogIds);
}