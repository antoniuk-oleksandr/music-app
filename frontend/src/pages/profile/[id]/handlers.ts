import React, {MutableRefObject} from "react";
import {NextRouter} from "next/router";
import {SearchTab} from "@/types/SearchTab";

export const handleProfileAlbumClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ref: MutableRefObject<HTMLButtonElement | null>,
    router: NextRouter,
    type: SearchTab,
    id: number,
) => {
    if (!ref.current) return null;

    if (!ref.current.contains(e.target as Node)) {
        const formattedType = type.toLowerCase().slice(0, type.length - 1);
        router.push(`/${formattedType}/${id}`);
    }
}