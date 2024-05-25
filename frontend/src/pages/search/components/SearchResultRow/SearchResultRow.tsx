import SearchResultRowLayout from "./SearchResultRowLayout";
import {Song} from "@/types/Song";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import SearchResultIcon from "@/pages/search/components/SearchResultIcon";
import SearchResultText from "@/pages/search/components/SearchResultText/SearchResultText";
import {SearchTab} from "@/types/SearchTab";

type SearchResultProps = {
    item: Song | User | Album | Playlist;
    itemType: SearchTab;
    index: number;
}

const SearchResultRow = (props: SearchResultProps) => {
    const {item, itemType, index} = props;

    return (
        <SearchResultRowLayout item={item} topBorder={index !== 0} itemType={itemType}>
            <SearchResultIcon itemType={itemType} item={item}/>
            <SearchResultText itemType={itemType} item={item}/>
        </SearchResultRowLayout>
    )
}

export default SearchResultRow;