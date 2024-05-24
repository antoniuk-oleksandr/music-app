import SearchLayout from "./SearchLayout";
import {useAudio} from "@/common-components/AudioContext";
import {useDispatch} from "react-redux";
import {useSearch} from "@/pages/search/use-search";
import TabsBlock from "@/pages/search/components/TabsBlock/TabsBlock";
import {handleSongClick} from "@/pages/search/handlers";
import SearchResultSection from "@/pages/search/components/SearchResultSection/SearchResultSection";

const SearchPage = () => {
    const audioElement = useAudio();
    const dispatch = useDispatch();
    const searchData = useSearch();

    if (!searchData) return null;

    return (
        <SearchLayout>
            <TabsBlock
                searchResult={searchData.searchResult}
                searchQuery={searchData.searchQuery}
                selectedTab={searchData.selectedTab}
            />
            <SearchResultSection
                searchQuery={searchData.searchQuery}
                searchResult={searchData.searchResult}
                selectedTab={searchData.selectedTab}
            />
            {/*<button onClick={() => handleSongClick(audioElement, dispatch)}*/}
            {/*>Lil Uzi Vert*/}
            {/*</button>*/}
        </SearchLayout>
    )
}

export default SearchPage;