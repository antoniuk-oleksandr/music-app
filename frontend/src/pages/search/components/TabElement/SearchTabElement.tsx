import SearchTabElementLayout from "./SearchTabElementLayout";
import {SearchTab} from "@/types/SearchTab";
import {SearchResult} from "@/types/SearchResult";

type SearchTabElementProps = {
    tab: SearchTab,
    selectedTab: SearchTab,
    searchQuery: string
    searchResult: SearchResult,
}

const SearchTabElement = (props: SearchTabElementProps) => {
    const {tab, selectedTab, searchQuery, searchResult} = props;

    if (!Object.keys(searchResult).includes(tab.toLowerCase())) return null;
    return (
        <SearchTabElementLayout
            tab={tab}
            searchQuery={searchQuery}
            selected={tab === selectedTab}>
            <span>{tab}</span>
        </SearchTabElementLayout>
    )
}

export default SearchTabElement;