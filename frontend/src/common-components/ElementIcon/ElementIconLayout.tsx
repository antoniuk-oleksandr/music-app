import {LayoutProps} from "@/types/LayoutProps";
import {NextRouter, useRouter} from "next/router";
import {SearchTab} from "@/types/SearchTab";
import {handleElementIconClick} from "@/common-components/ElementIcon/handlers";
import {Song} from "@/types/Song";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";

type SongIconLayoutProps = LayoutProps & {
    size: string,
    roundedFull: boolean,
    elementType: SearchTab,
    element: Song | User | Album | Playlist,
}

const ElementIconLayout = (props: SongIconLayoutProps) => {
    const {children, size, roundedFull, elementType, element} = props;
    const router = useRouter();

    return (
        <div
            onClick={() => handleElementIconClick(router, elementType, element.id)}
            className={`relative ${size} cursor-pointer overflow-hidden 
            ${roundedFull ? 'rounded-full' : 'rounded'} `}>
            {children}
        </div>
    )
}

export default ElementIconLayout;