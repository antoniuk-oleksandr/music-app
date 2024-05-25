import {LayoutProps} from "@/types/LayoutProps";
import {SearchTab} from "@/types/SearchTab";
import {useRouter} from "next/router";
import {isAlbumOrPlaylist} from "@/pages/search/helpers";
import {Song} from "@/types/Song";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {handleSearchRowClick} from "@/pages/search/handlers";

type SearchResultRowLayoutProps = LayoutProps & {
    topBorder: boolean;
    itemType: SearchTab;
    item: Song | User | Album | Playlist;
}

const SearchResultRowLayout = (props: SearchResultRowLayoutProps) => {
    const {children, topBorder, itemType, item} = props;

    const router = useRouter();

    return (
        <div
            onClick={() => handleSearchRowClick(router, item, itemType)}
            className={`w-full px-2 h-20 flex items-center
            ${topBorder ? 'border-t border-neutral-200' : ''}
            ${isAlbumOrPlaylist(itemType) ? 'cursor-pointer' : ''}`}>
            {children}
        </div>
    )
}

export default SearchResultRowLayout;