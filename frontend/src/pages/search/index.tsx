import SearchLayout from "./SearchLayout";
import {useSearch} from "@/pages/search/use-search";
import TabsBlock from "@/pages/search/components/TabsBlock/TabsBlock";
import SearchResultSection from "@/pages/search/components/SearchResultSection/SearchResultSection";

const SearchPage = () => {
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
        </SearchLayout>
    )
}

export default SearchPage;