import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setIsModalOpened} from "@/redux/reducers/modal-slice";
import {checkIfJWTExpired} from "@/utils/jwt-utils";
import {TokenInfo} from "@/types/TokenInfo";
import {refreshJwtRequest} from "@/api/refresh-jwt-request";
import {addSongToPlaylist} from "@/api/add-song-to-playlist";
import {Playlist} from "@/types/Playlist";
import {setUserProfilePlaylists} from "@/redux/reducers/user-profile-slice";
import {Song} from "@/types/Song";

export const handleAddPlaylistModalPlaylistClick = async (
    dispatch: Dispatch<UnknownAction>,
    modalName: string,
    playlistId: number,
    tokenInfo: TokenInfo,
    song: Song,
    playlists: Playlist[],
) => {
    let {token, expiration} = tokenInfo.jwt;
    if (checkIfJWTExpired(expiration)) {
        ({token} = await refreshJwtRequest(tokenInfo.refresh));
    }

    await addSongToPlaylist(playlistId, song.id, token);

    const updatedList = playlists.map((item) => {
        if (item.id === playlistId) {
            return {
                ...item,
                songs: [song, ...item.songs]
            }
        }
        else return item;
    })

    console.log(updatedList);

    dispatch(setUserProfilePlaylists(updatedList));
    dispatch(setIsModalOpened({modalName, isOpened: false}));
}