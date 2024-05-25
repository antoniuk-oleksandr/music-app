import SearchResultBlockLayout from "./SearchResultBlockLayout";
import {Song} from "@/types/Song";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import SearchResultHeader from "@/pages/search/components/SearchResultHeader/SearchResultHeader";
import SearchResultRow from "@/pages/search/components/SearchResultRow/SearchResultRow";
import ShowAllButton from "@/pages/search/components/ShowAllButton";
import {capitalize} from "@/utils/utils";
import {SearchTab} from "@/types/SearchTab";

type SearchResultBlockProps = {
    name: string,
    items: Song[] | User[] | Album[] | Playlist[],
    searchQuery: string,
    selectedTab: SearchTab,
}

const SearchResultBlock = (props: SearchResultBlockProps) => {
    const {name, items, searchQuery, selectedTab} = props;

    return (
        <SearchResultBlockLayout>
            <SearchResultHeader text={name}/>
            {Object.values(items).map((item, index) => (
                <SearchResultRow
                    item={item}
                    key={index}
                    index={index}
                    itemType={capitalize(name) as SearchTab}
                />
            ))}
            <ShowAllButton
                selectedTab={selectedTab}
                tab={capitalize(name)}
                searchQuery={searchQuery}
            />
        </SearchResultBlockLayout>
    )
}

export default SearchResultBlock;