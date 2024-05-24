import SearchResultTextLayout from "./SearchResultTextLayout";
import {Song} from "@/types/Song";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {getName} from "@/pages/search/helpers";
import BottomItemInfo from "@/pages/search/components/BottomItemInfo";
import {SearchTab} from "@/types/SearchTab";
import BottomInfoLayout from "@/pages/search/components/BottomInfoLayout";

type SearchResultTextProps = {
    item: Song | User | Album | Playlist;
    itemType: SearchTab;
}

const SearchResultText = (props: SearchResultTextProps) => {
    const {item, itemType} = props;

    return (
        <SearchResultTextLayout>
            <span className={"font-semibold select-text"}>{getName(item)}</span>
            <BottomInfoLayout>
                <BottomItemInfo item={item} itemType={itemType}/>
            </BottomInfoLayout>
        </SearchResultTextLayout>
    )
}

export default SearchResultText;