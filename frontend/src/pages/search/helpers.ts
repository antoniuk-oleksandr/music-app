import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {SearchTab} from "@/types/SearchTab";
import {SearchResult} from "@/types/SearchResult";
import {Song} from "@/types/Song";
import {User} from "@/types/User";
import {Album} from "@/types/Album";
import {Playlist} from "@/types/Playlist";
import {getUrlFromString} from "@/utils/utils";

export const changeSearchTab = (router: AppRouterInstance, tab: SearchTab, searchQuery: string) => {
    router.push(`/search?q=${searchQuery}&tab=${tab}`);
}

export const addImageBlobs = async (searchResult: SearchResult) => {
    for (const arr of Object.values(searchResult)) {
        if(!arr) continue;

        for (const value of arr) {
            if ('username' in value)
                value.avatarPath = await getUrlFromString(value.avatarPath, "image/jpeg");
            else if('name' in value)
                value.imagePath = await getUrlFromString(value.imagePath, "image/jpeg");
        }
    }

    return searchResult;
}

export const filterResults = (searchResult: SearchResult): SearchResult => {
    return Object.entries(searchResult).reduce((acc, [key, value]) => {
        if (value && value.length > 0) {
            // @ts-ignore
            acc[key] = value;
        }
        return acc;
    }, {}) as SearchResult;
}

export const getName = (item: Song | User | Album | Playlist) => {
    if ('username' in item) return item.username;
    if ('song' in item) return (item.song as Song).name;
    if ('name' in item) return item.name;
}

export const getImage = (item: Song | User | Album | Playlist) => {
    if ('username' in item) return item.avatarPath;
    if ('name' in item) return item.imagePath;
}
