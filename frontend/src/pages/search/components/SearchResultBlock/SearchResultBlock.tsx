import SearchResultBlockLayout from "./SearchResultBlockLayout";
import {Song} from "@/types/Song";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import SearchResultHeader from "@/pages/search/components/SearchResultHeader/SearchResultHeader";
import SearchResultRow from "@/pages/search/components/SearchResultRow/SearchResultRow";

type SearchResultBlockProps = {
    name: string,
    items: Song[] | User[] | Album[] | Playlist[],
}

const SearchResultBlock = (props: SearchResultBlockProps) => {
    const {name, items} = props;

    return (
        <SearchResultBlockLayout>
            <SearchResultHeader text={name}/>
            {Object.values(items).map((item, index) => (
                <SearchResultRow item={item} key={index}/>
            ))}
        </SearchResultBlockLayout>
    )
}

export default SearchResultBlock;