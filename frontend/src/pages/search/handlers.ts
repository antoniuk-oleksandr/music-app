import {Song} from "@/types/Song";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setSong} from "@/redux/reducers/music-player-slice";
import {getUrlFromString} from "@/utils/utils";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {SearchTab} from "@/types/SearchTab";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {NextRouter} from "next/router";

export const handleSongClick = async (audioElement: HTMLAudioElement | null,
                                      dispatch: Dispatch<UnknownAction>,
                                      song: Song) => {
    if (!song.songPath.includes('blob'))
        song.songPath = await getUrlFromString(song.songPath, 'audio/mpeg');

    (audioElement as HTMLAudioElement).src = song.songPath;

    dispatch(setSong(song));
    audioElement?.play();
}

export const handleSearchRowClick = (router: NextRouter,
                                     item: Song | User | Album | Playlist,
                                     itemType: SearchTab) => {
    if(itemType === SearchTab.Albums) router.push(`/album/${item.id}`);
    if(itemType === SearchTab.Playlists) router.push(`/playlist/${item.id}`);
}