import {Dispatch, SetStateAction} from "react";
import {UnknownAction} from "redux";
import {setIsModalOpened} from "@/redux/reducers/modal-slice";
import {TokenInfo} from "@/types/TokenInfo";
import {checkIfJWTExpired, updateJwt} from "@/utils/jwt-utils";
import {profilePlaylistsSignal} from "@/pages/profile/[id]/signals/profile-playlists-signal";
import {User} from "@/types/User";
import {createPlaylistRequest} from "@/api/create-playlist-request";
import {addUserProfilePlaylist} from "@/redux/reducers/user-profile-slice";
import {Playlist} from "@/types/Playlist";
import {getYearFromTimestamp} from "@/utils/utils";

type UserProfile = User & {
    playlists: Playlist[]
}

export const handleOnNewPlaylistsFormSubmit = async (
    data: any,
    dispatch: Dispatch<UnknownAction>,
    modalName: string,
    setSending: Dispatch<SetStateAction<boolean>>,
    tokenInfo: TokenInfo,
    userProfile: UserProfile,
) => {
    setSending(true);
    let {token, expiration} = tokenInfo.jwt;
    if (checkIfJWTExpired(expiration)) {
        ({token} = await updateJwt(tokenInfo, dispatch));
    }

    const {id} = await createPlaylistRequest(token, data);
    const newPlaylist = {
        ...data,
        id,
        creator: userProfile,
        imagePath: userProfile.avatarPath,
        creatingDate: new Date().getTime().toString(),
        songs: [],
    }

    console.log(newPlaylist);

    profilePlaylistsSignal.value = newPlaylist;
    dispatch(addUserProfilePlaylist({newPlaylist, oldPlaylists: userProfile.playlists}));
    dispatch(setIsModalOpened({modalName, isOpened: false}));
    setSending(false);
}