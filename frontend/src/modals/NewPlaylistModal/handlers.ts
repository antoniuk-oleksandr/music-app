import {Dispatch, SetStateAction} from "react";
import {UnknownAction} from "redux";
import {setIsModalOpened} from "@/redux/reducers/modal-slice";
import {TokenInfo} from "@/types/TokenInfo";
import {checkIfJWTExpired, updateJwt} from "@/utils/jwt-utils";
import {profilePlaylistsSignal} from "@/pages/profile/[id]/signals/profile-playlists-signal";
import {User} from "@/types/User";
import {createPlaylistRequest} from "@/api/create-playlist-request";

export const handleOnNewPlaylistsFormSubmit = async (
    data: any,
    dispatch: Dispatch<UnknownAction>,
    modalName: string,
    setSending: Dispatch<SetStateAction<boolean>>,
    tokenInfo: TokenInfo,
    userProfile: User,
) => {
    setSending(true);
    let {token, expiration} = tokenInfo.jwt;
    if (checkIfJWTExpired(expiration)) {
        ({token} = await updateJwt(tokenInfo, dispatch));
    }
    await createPlaylistRequest(token, data);

    const id = 1;
    profilePlaylistsSignal.value = {
        ...data,
        id,
        creator: userProfile,
        imagePath: userProfile.avatarPath,
        creatingDate: new Date(),
        songs: [],
    }
    dispatch(setIsModalOpened({modalName, isOpened: false}));
    setSending(false);
}