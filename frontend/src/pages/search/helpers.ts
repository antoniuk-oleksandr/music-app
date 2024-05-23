import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {SearchTab} from "@/types/SearchTab";
import {SearchResult} from "@/types/SearchResult";

export const changeSearchTab = (router: AppRouterInstance, tab: SearchTab, searchQuery: string) => {
    router.push(`/search?q=${searchQuery}&tab=${tab}`);
}

export const filterResults = (searchResult: SearchResult): SearchResult => {
    return Object.entries(searchResult).reduce((acc, [key, value]) => {
        if (value.length > 0) {
            // @ts-ignore
            acc[key] = value;
        }
        return acc;
    }, {}) as SearchResult;
}

