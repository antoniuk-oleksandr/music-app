import React from "react";
import {NextRouter} from "next/router";

export const handleNavbarPlaylistClick = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number,
    router: NextRouter
) => {
    if(e.target !== e.currentTarget) return;
    router.push(`/playlist/${id}`)
}