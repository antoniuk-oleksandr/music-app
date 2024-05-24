import SearchResultSectionLayout from "./SearchResultSectionLayout";
import {SearchResult} from "@/types/SearchResult";
import SearchResultBlock from "@/pages/search/components/SearchResultBlock/SearchResultBlock";
import {SearchTab} from "@/types/SearchTab";

type SearchResultSectionProps = {
    searchResult: SearchResult;
    searchQuery: string,
    selectedTab: SearchTab,
}

const SearchResultSection = (props: SearchResultSectionProps) => {
    const {searchResult, searchQuery, selectedTab} = props;

    return (
        <SearchResultSectionLayout>
            {Object.entries(searchResult).map((entry, index) => (
                <SearchResultBlock
                    selectedTab={selectedTab}
                    searchQuery={searchQuery}
                    name={entry[0]}
                    items={entry[1]}
                    key={index}
                />
            ))}
        </SearchResultSectionLayout>
    )
}

export default SearchResultSection;