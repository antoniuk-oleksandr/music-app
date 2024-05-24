import {useEffect, useState} from "react";
import {searchRequest} from "@/api/search-request";
import {useRouter} from "next/router";
import {SearchTab} from "@/types/SearchTab";
import {capitalize} from "@/utils/utils";
import {SearchResult} from "@/types/SearchResult";
import {addImageBlobs, filterResults} from "@/pages/search/helpers";


type SearchData = {
    searchResult: SearchResult,
    selectedTab: SearchTab,
    searchQuery: string,
}

export const useSearch = () => {
    const [searchData, setSearchData] = useState<SearchData | null>(null);
    const router = useRouter();

    useEffect(() => {
        const query = router.query;
        if (!query.q) return;

        const getSearchResult = async () => {
            const limit = query.tab === SearchTab.Default ? 3 : 30;
            let result = await searchRequest(query.q as string, limit, 0, query.tab as SearchTab) as SearchResult;
            result = await addImageBlobs(result);

            setSearchData({
                searchResult: filterResults(result),
                selectedTab: capitalize(query.tab),
                searchQuery: query.q as string,
            });
        }

        getSearchResult();
    }, [router]);

    return searchData;
}