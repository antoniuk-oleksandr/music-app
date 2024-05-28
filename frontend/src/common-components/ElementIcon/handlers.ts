import {NextRouter} from "next/router";
import {SearchTab} from "@/types/SearchTab";

export const handleElementIconClick = (router: NextRouter, elementType: SearchTab, id:number) => {
    if([SearchTab.Artists, SearchTab.Profiles].includes(elementType)){
        router.push(`/profile/${id}`);
    }
}