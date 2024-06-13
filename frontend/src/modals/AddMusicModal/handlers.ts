import {checkIfJWTExpired, updateJwt} from "@/utils/jwt-utils";
import {TokenInfo} from "@/types/TokenInfo";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setIsModalOpened} from "@/redux/reducers/modal-slice";
import {getSongDuration} from "@/utils/file-utils";
import {createSongRequest} from "@/api/create-song-request";
import {CreateSongType} from "@/types/CreateSongType";
import {profileSongSignal} from "@/pages/profile/[id]/signals/profile-song-signal";
import {User} from "@/types/User";

export const handleAddMusicFormSubmit = async (
    data: any, tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
    userProfile: User,
) => {
    const duration = await getSongDuration(data.audioFile[0]) as number;

    let songData: CreateSongType = {
        name: data.songName,
        duration,
        releaseDate: new Date(),
        imagePath: URL.createObjectURL(data.songCover[0]),
        songPath: URL.createObjectURL(data.audioFile[0]),
        album: null,
        users: [userProfile],
    }

    let {token, expiration} = tokenInfo.jwt;
    if (checkIfJWTExpired(expiration)) {
        ({token} = await updateJwt(tokenInfo, dispatch));
    }

    const {id} = await createSongRequest(data.audioFile[0], data.songCover[0], songData, token);
    console.log(songData.releaseDate);
    songData = {
        ...songData,
        id,
        releaseDate: new Date(songData.releaseDate).getTime().toString()
    }
    profileSongSignal.value = songData;
    dispatch(setIsModalOpened({modalName: 'addMusic', isOpened: false}));
}