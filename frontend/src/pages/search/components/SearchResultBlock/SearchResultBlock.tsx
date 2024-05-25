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
import {useAudio} from "@/common-components/AudioContext";
import {useIsPlaying} from "@/utils/use-is-playing";

type SearchResultBlockProps = {
    name: string,
    items: Song[] | User[] | Album[] | Playlist[],
    searchQuery: string,
    selectedTab: SearchTab,
}

const SearchResultBlock = (props: SearchResultBlockProps) => {
    const {name, items, searchQuery, selectedTab} = props;
    const audioElement = useAudio() as HTMLAudioElement;
    const isPlaying = useIsPlaying(audioElement);

    return (
        <SearchResultBlockLayout>
            <SearchResultHeader text={name}/>
            {Object.values(items).map((item, index) => (
                <SearchResultRow
                    isPlaying={isPlaying}
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