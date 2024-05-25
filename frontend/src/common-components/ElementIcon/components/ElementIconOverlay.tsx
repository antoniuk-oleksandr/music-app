import {Song} from "@/types/Song";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {IconHoverState} from "@/types/IconHoverState";
import {handleSongClick} from "@/pages/search/handlers";
import {useAudio} from "@/common-components/AudioContext";
import {useIconHoverState} from "@/common-components/ElementIcon/use-icon-hover-state";
import ElementOverlayIcon from "@/common-components/ElementIcon/components/ElementOverlayIcon";
import {SearchTab} from "@/types/SearchTab";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";

type ElementIconOverlay = {
    element: Song | User | Album | Playlist,
    rowHovered: boolean,
    elementType: SearchTab,
    bg: string,
    iconColor: string,
    isPlaying: boolean,
}

const ElementIconOverlay = (props: ElementIconOverlay) => {
    const {element, rowHovered, elementType, bg, iconColor, isPlaying} = props;
    const [iconHovered, setIconHovered] = useState(false);
    const playerSong: Song = useSelector((state: any) => state.musicPlayer.song);
    const dispatch = useDispatch();
    const audiElement = useAudio() as HTMLAudioElement;
    const iconState = useIconHoverState(playerSong, element as Song, iconHovered, rowHovered, elementType, isPlaying);

    if (iconState === IconHoverState.None ||
        elementType !== SearchTab.Songs) return null;
    return (
        <div
            onClick={() =>
                handleSongClick(audiElement, dispatch, element as Song, iconState, playerSong)}
            onMouseEnter={() => setIconHovered(true)}
            onMouseLeave={() => setIconHovered(false)}
            className={`absolute grid place-items-center size-full ${iconColor} ${bg}`}>
            <ElementOverlayIcon iconState={iconState}/>
        </div>
    )
}

export default ElementIconOverlay;