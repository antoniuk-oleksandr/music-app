import {useEffect, useState} from "react";
import {IconHoverState} from "@/types/IconHoverState";
import {Song} from "@/types/Song";
import {SearchTab} from "@/types/SearchTab";

export const useIconHoverState = (playerSong: Song, song: Song, iconHovered: boolean,
                                  rowHovered: boolean, elementType: SearchTab, isPlaying: boolean) => {
    const [iconState, setIconState] = useState(IconHoverState.None);

    useEffect(() => {
        if(elementType !== SearchTab.Songs) return;

        if (playerSong && playerSong.id === song.id) {
            if (isPlaying) setIconState(iconHovered ? IconHoverState.Pause : IconHoverState.Sound);
            else setIconState(IconHoverState.Play);
        } else setIconState(rowHovered ? IconHoverState.Play : IconHoverState.None);
    }, [rowHovered, iconHovered, playerSong, song, isPlaying]);

    return iconState;
}