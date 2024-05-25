import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";

type PlaylistSongRowLayoutProps = LayoutProps & {
    topBorder: boolean,
    isHovered: boolean,
    setIsHovered: Dispatch<SetStateAction<boolean>>,
}

const PlaylistSongRowLayout = (props: PlaylistSongRowLayoutProps) => {
    const {children, topBorder, isHovered, setIsHovered} = props;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`grid grid-cols-playlist-song-row h-12 items-center
            ${topBorder ? 'border-t border-neutral-200' : ''}`}>
            {children}
        </div>
    )
}

export default PlaylistSongRowLayout;