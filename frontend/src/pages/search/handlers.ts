import {Song} from "@/types/Song";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setSong} from "@/redux/reducers/music-player-slice";
import {formatImageUrl} from "@/utils/utils";
import {SearchTab} from "@/types/SearchTab";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {NextRouter} from "next/router";
import {IconHoverState} from "@/types/IconHoverState";

export const handleSongClick = async (audioElement: HTMLAudioElement | null,
                                      dispatch: Dispatch<UnknownAction>,
                                      song: Song, iconState: IconHoverState,
                                      playerSong: Song) => {
    const isCurrentSongSelected = playerSong && playerSong.id === song.id;

    if (iconState === IconHoverState.Pause && !audioElement?.paused) {
        audioElement?.pause();
        return;
    }
    if(iconState === IconHoverState.Play && isCurrentSongSelected){
        audioElement?.play();
        return;
    }

    if (!song.songPath.includes('blob'))
        song.songPath = await formatImageUrl(song.songPath);

    (audioElement as HTMLAudioElement).src = song.songPath;

    dispatch(setSong(song));
    audioElement?.play();
}

export const handleSearchRowClick = (router: NextRouter,
                                     item: Song | User | Album | Playlist,
                                     itemType: SearchTab) => {
    if (itemType === SearchTab.Albums) router.push(`/album/${item.id}`);
    if (itemType === SearchTab.Playlists) router.push(`/playlist/${item.id}`);
}