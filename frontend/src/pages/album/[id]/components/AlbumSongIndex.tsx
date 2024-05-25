import {useState} from "react";
import {Song} from "@/types/Song";
import {SearchTab} from "@/types/SearchTab";
import ElementIconOverlay from "@/common-components/ElementIcon/components/ElementIconOverlay";

type AlbumSongIndexProps = {
    index: number,
    song: Song,
    isHovered: boolean,
    isPlaying: boolean,
}

const AlbumSongIndex = (props: AlbumSongIndexProps) => {
    const {index, song, isHovered, isPlaying} = props

    return (
        <div
            className={"relative grid place-items-center size-9 text-base text-neutral-700"}>
            <ElementIconOverlay
                isPlaying={isPlaying}
                iconColor={'text-neutral-700'}
                bg={'bg-neutral-100'}
                rowHovered={isHovered}
                element={song}
                elementType={SearchTab.Songs}
            />
            <span>{index + 1}</span>
        </div>
    )
}

export default AlbumSongIndex;