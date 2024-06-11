import {checkIfJWTExpired, updateJwt} from "@/utils/jwt-utils";
import {TokenInfo} from "@/types/TokenInfo";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setIsModalOpened} from "@/redux/reducers/modal-slice";
import {getSongDuration} from "@/utils/file-utils";
import {createSongRequest} from "@/api/create-song-request";

export const handleAddMusicFormSubmit = async (
    data: any, tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>
) => {
    const duration = await getSongDuration(data.audioFile[0]) as number;
    console.log(duration);

    const songData = {
        name: data.songName,
        duration,
        releaseDate: new Date(),
    }

    let {token, expiration} = tokenInfo.jwt;
    if (checkIfJWTExpired(expiration)) {
        ({token} = await updateJwt(tokenInfo, dispatch));
    }

    await createSongRequest(data.audioFile[0], data.songCover[0], songData, token);
    dispatch(setIsModalOpened({modalName: 'addMusic', isOpened: false}));
}