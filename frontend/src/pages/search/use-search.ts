import {useEffect, useState} from "react";
import {searchRequest} from "@/api/search-request";
import {useRouter} from "next/router";
import {SearchTab} from "@/types/SearchTab";
import {capitalize} from "@/utils/utils";
import {SearchResult} from "@/types/SearchResult";
import {filterResults} from "@/pages/search/helpers";


type SearchData = {
    searchResult: SearchResult,
    tab: SearchTab,
    searchQuery: string,
}

export const useSearch = () => {
    const [searchData, setSearchData] = useState<SearchData | null>(null);
    const router = useRouter();

    useEffect(() => {
        const query = router.query;
        if (!query.q) return;

        const getSearchResult = async () => {
            const result = await searchRequest(query.q as string, 10, 0) as SearchResult;

            setSearchData({
                searchResult: filterResults(result),
                tab: capitalize(query.tab),
                searchQuery: query.q as string,
            });
        }

        getSearchResult();
    }, [router]);

    return searchData;
}