import {LayoutProps} from "@/types/LayoutProps";
import {SearchTab} from "@/types/SearchTab";
import {useRouter} from "next/router";
import {isAlbumOrPlaylist} from "@/pages/search/helpers";
import {Song} from "@/types/Song";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {handleSearchRowClick} from "@/pages/search/handlers";
import {Dispatch, SetStateAction} from "react";

type SearchResultRowLayoutProps = LayoutProps & {
    topBorder: boolean;
    itemType: SearchTab;
    item: Song | User | Album | Playlist;
    rowHovered: boolean;
    setRowHovered: Dispatch<SetStateAction<boolean>>;
}

const SearchResultRowLayout = (props: SearchResultRowLayoutProps) => {
    const {children, topBorder, itemType, item, setRowHovered} = props;

    const router = useRouter();

    return (
        <div
            onMouseEnter={() => setRowHovered(true)}
            onMouseLeave={() => setRowHovered(false)}
            onClick={() => handleSearchRowClick(router, item, itemType)}
            className={`w-full px-2 h-20 flex items-center gap-x-3
            ${topBorder ? 'border-t border-neutral-200' : ''}
            ${isAlbumOrPlaylist(itemType) ? 'cursor-pointer' : ''}`}>
            {children}
        </div>
    )
}

export default SearchResultRowLayout;