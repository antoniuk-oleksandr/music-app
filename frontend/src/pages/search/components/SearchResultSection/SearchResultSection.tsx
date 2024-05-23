import SearchResultSectionLayout from "./SearchResultSectionLayout";
import {SearchResult} from "@/types/SearchResult";
import SearchResultBlock from "@/pages/search/components/SearchResultBlock/SearchResultBlock";

type SearchResultSectionProps = {
    searchResult: SearchResult;
}

const SearchResultSection = (props: SearchResultSectionProps) => {
    const {searchResult} = props;

    return (
        <SearchResultSectionLayout>
            {Object.entries(searchResult).map((entry, index) => (
                <SearchResultBlock
                    name={entry[0]}
                    items={entry[1]}
                    key={index}
                />
            ))}
        </SearchResultSectionLayout>
    )
}

export default SearchResultSection;