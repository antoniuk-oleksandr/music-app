import ElementIconLayout from "./ElementIconLayout";
import {Song} from "@/types/Song";
import ElementIconOverlay from "@/common-components/ElementIcon/components/ElementIconOverlay";
import {getImage} from "@/pages/search/helpers";
import {SearchTab} from "@/types/SearchTab";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";

type ElementIconProps = {
    size: string,
    rowHovered: boolean,
    element: Song | User | Album | Playlist,
    elementType: SearchTab,
    roundedFull: boolean,
    bg: string,
    iconColor: string,
    isPlaying: boolean,
}

const ElementIcon = (props: ElementIconProps) => {
    const {element} = props;

    return (
        <ElementIconLayout {...props}>
            <ElementIconOverlay {...props}/>
            <img
                className="w-full h-full object-center object-cover"
                src={getImage(element)}
                alt="icon"
            />
        </ElementIconLayout>
    )
}

export default ElementIcon;